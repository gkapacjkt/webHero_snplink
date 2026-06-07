import { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';
import { VibeTheme } from '../types';

interface BackgroundVideoProps {
  currentTheme: VibeTheme;
  isPaused: boolean;
  reducedMotion: boolean;
  useFallbackMp4: boolean;
  onStreamStateChange?: (state: string) => void;
}

export default function BackgroundVideo({
  currentTheme,
  isPaused,
  reducedMotion,
  useFallbackMp4,
  onStreamStateChange
}: BackgroundVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const hlsRef = useRef<Hls | null>(null);
  const [streamError, setStreamError] = useState(false);
  const [streamInfo, setStreamInfo] = useState<string>('Initializing stream...');

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Reset error state
    setStreamError(false);
    setStreamInfo('Loading HLS Stream...');
    if (onStreamStateChange) onStreamStateChange('buffering');

    // Clean up previous Hls instance
    if (hlsRef.current) {
      hlsRef.current.destroy();
      hlsRef.current = null;
    }

    // Handle standard MP4 Fallback or if HLS is disabled via prop
    if (useFallbackMp4) {
      video.src = currentTheme.fallbackVideoUrl;
      video.load();
      setStreamInfo('Using standard MP4 stream (optimized compatibility)');
      if (onStreamStateChange) onStreamStateChange('playing-fallback');
      return;
    }

    // Native support (e.g. Safari on iOS/Mac)
    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = currentTheme.videoUrl;
      setStreamInfo('Using Safari Native HLS Player');
      if (onStreamStateChange) onStreamStateChange('ready-native');

      const handlePlaying = () => {
        if (onStreamStateChange) onStreamStateChange('playing-native');
      };
      
      const handleError = () => {
        setStreamError(true);
        setStreamInfo('HLS Stream error. Auto-falling back to local loop...');
        video.src = currentTheme.fallbackVideoUrl;
        video.load();
        if (onStreamStateChange) onStreamStateChange('error-fallback');
      };

      video.addEventListener('playing', handlePlaying);
      video.addEventListener('error', handleError);

      return () => {
        video.removeEventListener('playing', handlePlaying);
        video.removeEventListener('error', handleError);
      };
    } 
    // Using hls.js for Chrome / Firefox / Others
    else if (Hls.isSupported()) {
      const hls = new Hls({
        maxMaxBufferLength: 10,
        enableWorker: true,
        lowLatencyMode: true,
      });
      hlsRef.current = hls;

      hls.loadSource(currentTheme.videoUrl);
      hls.attachMedia(video);

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        setStreamInfo('Hls.js connected. Processing ambient segments...');
        if (onStreamStateChange) onStreamStateChange('ready');
      });

      hls.on(Hls.Events.FRAG_CHANGED, (_, data) => {
        const quality = data.frag.level;
        const resolution = hls.levels[quality]?.height || 'adaptive';
        setStreamInfo(`Hls.js streaming active [${resolution}p | level ${quality}]`);
      });

      hls.on(Hls.Events.ERROR, (_, data) => {
        if (data.fatal) {
          console.warn('Fatal HLS error encountered:', data.type);
          setStreamInfo('Hls.js fatal error. Falling back to high-quality MP4 loop...');
          setStreamError(true);
          
          // Switch to fallback source immediately
          video.src = currentTheme.fallbackVideoUrl;
          video.load();
          
          if (onStreamStateChange) onStreamStateChange('error-fallback');
          hls.destroy();
        }
      });

      return () => {
        hls.destroy();
      };
    } else {
      // Fallback for custom browsers without Hls.js support
      video.src = currentTheme.fallbackVideoUrl;
      setStreamInfo('Direct MP4 playback active (HLS unsupported)');
      if (onStreamStateChange) onStreamStateChange('playing-direct');
    }
  }, [currentTheme.videoUrl, currentTheme.fallbackVideoUrl, useFallbackMp4]);

  // Handle Play/Pause
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isPaused || reducedMotion) {
      video.pause();
    } else {
      video.play().catch((err) => {
        console.log('Video autoplay prevented or suspended: ', err);
      });
    }
  }, [isPaused, reducedMotion]);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden select-none pointer-events-none">
      {/* Background Dimming Matrix overlay - reduced opacity to let the video shine through */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/40 via-transparent to-black/50" />
      <div className="absolute inset-0 z-10 bg-black/5 mix-blend-overlay" />

      {/* Reduced Motion Static Fallback Cover */}
      {reducedMotion ? (
        <div 
          className="w-full h-full object-cover transition-all duration-1000 scale-102 bg-cover bg-center brightness-90 filter blur-[2px]"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?w=1600')` }}
        />
      ) : (
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          loop
          className="w-full h-full object-cover scale-[1.01] transition-all duration-1000 filter brightness-100 contrast-100"
          style={{ transformOrigin: 'center' }}
          id="bg-hls-video-element"
        />
      )}

      {/* Real-time streaming parameters monitor (Hidden unless toggled / Screen-Reader accessible) */}
      <div className="sr-only" aria-live="polite">
        Current ambient theme background video is: {currentTheme.name}. Description: {currentTheme.ambientDescription}. Status: {streamInfo}.
      </div>
    </div>
  );
}
