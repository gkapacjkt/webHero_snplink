import { useState } from 'react';
import { 
  Play, 
  Sparkles, 
  Share2
} from 'lucide-react';

import { VibeTheme } from './types';
import { VIBE_THEMES } from './data';

// Component Imports
import BackgroundVideo from './components/BackgroundVideo';

export default function App() {
  // Theme & Playback state
  const [currentTheme, setCurrentTheme] = useState<VibeTheme>(VIBE_THEMES[0]);
  const [isVideoPaused] = useState(false);
  const [useFallbackMp4] = useState(false);
  const [streamStatusState, setStreamStatusState] = useState('initializing');

  // Interactive UI indicators within the single screen mockup
  const [likesCount, setLikesCount] = useState(1420);
  const [hasLiked, setHasLiked] = useState(false);
  const [shareStatus, setShareStatus] = useState<string | null>(null);

  const handleLike = () => {
    if (hasLiked) {
      setLikesCount(prev => prev - 1);
    } else {
      setLikesCount(prev => prev + 1);
    }
    setHasLiked(!hasLiked);
  };

  const triggerMockShare = () => {
    setShareStatus('Copying absolute interactive Hub Link...');
    setTimeout(() => {
      setShareStatus('Copied! Send it to your friends.');
      setTimeout(() => setShareStatus(null), 3000);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-black text-white relative transition-colors duration-500 overflow-hidden font-sans">
      
      {/* 1. NATIVE HLS & MP4 BACKGROUND CONTROLLER */}
      <BackgroundVideo
        currentTheme={currentTheme}
        isPaused={isVideoPaused}
        reducedMotion={false}
        useFallbackMp4={useFallbackMp4}
        onStreamStateChange={setStreamStatusState}
      />

      {/* 2. MAIN CONTAINER WRAPPER */}
      <div className="relative z-20 w-full min-h-screen flex flex-col justify-between">
        
        {/* GLASSMORPHIC HEADER */}
        <header className="glass-header w-full z-40 px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          {/* Logo element with custom light animations */}
          <div className="flex items-center space-x-3">
            <div className="relative w-9 h-9 rounded-xl overflow-hidden flex items-center justify-center bg-gradient-to-tr from-cyan-400 via-sky-500 to-fuchsia-500 shadow-md">
              <Sparkles className="w-5 h-5 text-white animate-pulse" />
            </div>
            <div>
              <span className="font-display font-bold text-lg tracking-tight bg-gradient-to-r from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent">
                SnapLink
              </span>
              <span className="hidden sm:inline-block ml-2 text-[9px] font-mono tracking-widest text-[#d4d4d8] border border-white/10 bg-white/5 rounded px-1.5 py-0.5">
                PRO.VIBE
              </span>
            </div>
          </div>

          {/* Right utilities removed to maintain absolute clean aesthetic on the right side of the header */}
          <div className="flex items-center space-x-3" />
        </header>

        {/* 3. COHESIVE GRID WITH HERO CONTENTS AND PLAYGROUND MOCKUP INTEGRATION */}
        <main className="flex-grow flex items-center z-20 w-full px-4 sm:px-6 lg:px-12 py-2 overflow-y-auto">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* LEFT SIDE: HERO CONTENTS POSITIONED BOTTOM-LEFT / MID-LEFT */}
            <section className="lg:col-span-6 flex flex-col justify-center items-start text-left space-y-5 selection:bg-cyan-500 select-none">
              
              {/* Sparkles Vibe Badge */}
              <div className="inline-flex items-center space-x-2 bg-black/60 backdrop-blur-md border border-white/10 rounded-full px-4 py-1.5">
                <Sparkles className="w-4 h-4 text-fuchsia-400 animate-pulse" />
                <span className="text-[10px] font-mono tracking-wider text-zinc-200">INTRODUCING SNAPLINK v3.0</span>
              </div>

              {/* Typography Heading pairing - Big text & sub */}
              <div className="space-y-3">
                <h1 className="font-display font-medium text-5xl sm:text-7xl lg:text-8xl tracking-tighter text-white leading-none">
                  SnapLink
                </h1>
                
                <p className={`font-display text-xl sm:text-2xl lg:text-3xl font-light text-zinc-300 leading-tight tracking-tight ${
                  currentTheme.accentColor
                }`}>
                  Share the vibe, not the screenshot.
                </p>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-md">
                With SnapLink, capture any AI conversation, webpage, or research result — directly from your Chrome extension — and get an instant, beautiful, shareable link.
              </p>

              {/* Interactive Gen Z CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full max-w-md pt-3 z-30">
                <a
                  href="https://chromewebstore.google.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center justify-center space-x-2 bg-lime-300 text-black border-2 border-black font-mono font-black text-xs sm:text-sm uppercase tracking-wide px-5 py-3.5 rounded-xl transition-all duration-200 transform hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_#f43f5e] shadow-[4px_4px_0px_0px_#f43f5e] active:translate-y-0 active:translate-x-0 active:shadow-[1px_1px_0px_0px_#f43f5e] cursor-pointer"
                >
                  <span>download chrome ext</span>
                  <span className="inline-block transition-transform group-hover:translate-x-1 font-sans">⚡</span>
                </a>

                <a
                  href="https://snplink.memzo.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center justify-center space-x-2 bg-fuchsia-500 text-white border-2 border-black font-mono font-black text-xs sm:text-sm uppercase tracking-wide px-5 py-3.5 rounded-xl transition-all duration-200 transform hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_#22d3ee] shadow-[4px_4px_0px_0px_#10b981] active:translate-y-0 active:translate-x-0 active:shadow-[1px_1px_0px_0px_#10b981] cursor-pointer"
                >
                  <span>login</span>
                  <span className="inline-block transition-transform group-hover:scale-115 font-sans animate-pulse">👾</span>
                </a>
              </div>

            </section>

            {/* RIGHT SIDE: CORE PHONE PREVIEW INTEGRATED IN A SINGLE-SCREEN VIEW */}
            <section style={{ height: '601.989px' }} className="lg:col-span-6 flex justify-center items-center py-4 relative">
              
              {/* Main Canvas with beautiful twilight night city gradient sky */}
              <div style={{ height: '650px' }} className="w-full max-w-[340px] sm:max-w-[380px] bg-gradient-to-b from-[#060a17] via-[#0d122b] to-[#1f122e] rounded-[48px] border border-white/10 shadow-2xl relative overflow-hidden flex items-center justify-center p-4 select-none">
                
                {/* 1. Ambient Background City Lights (Abstract blur representing background city buildings) */}
                <div className="absolute inset-0 z-0 pointer-events-none opacity-45">
                  {/* Glowing blurred blobs mimicking distant skyscraper lights */}
                  <div className="absolute top-1/4 left-1/4 w-12 h-20 bg-amber-400/20 rounded-full filter blur-xl animate-pulse" />
                  <div className="absolute top-1/3 right-1/4 w-16 h-24 bg-indigo-500/15 rounded-full filter blur-2xl" />
                  <div className="absolute bottom-1/4 left-1/2 w-20 h-28 bg-purple-500/10 rounded-full filter blur-3xl" />
                  
                  {/* Distant building structures (abstract geometric shapes with subtle lights) */}
                  <div className="absolute bottom-0 inset-x-0 h-1/3 flex items-end justify-between opacity-30 gap-2 px-6">
                    <div className="w-8 h-24 bg-zinc-950/80 rounded-t border-t border-zinc-900 flex flex-col justify-around py-2 items-center">
                      <div className="w-4 h-1 bg-amber-400/30 rounded-sm" />
                      <div className="w-4 h-1 bg-amber-400/20 rounded-sm" />
                      <div className="w-4 h-1 bg-amber-400/30 rounded-sm" />
                    </div>
                    <div className="w-12 h-36 bg-zinc-950/90 rounded-t border-t border-zinc-900 flex flex-col justify-around py-3 items-center">
                      <div className="w-6 h-1.5 bg-yellow-400/35 rounded-sm" />
                      <div className="w-6 h-1.5 bg-yellow-400/20 rounded-sm" />
                      <div className="w-6 h-1.5 bg-yellow-400/30 rounded-sm" />
                      <div className="w-6 h-1.5 bg-yellow-400/15 rounded-sm" />
                    </div>
                    <div className="w-10 h-28 bg-zinc-950/85 rounded-t border-t border-zinc-900 flex flex-col justify-around py-2 items-center">
                      <div className="w-5 h-1 bg-amber-300/30 rounded-sm" />
                      <div className="w-5 h-1 bg-amber-300/15 rounded-sm" />
                      <div className="w-5 h-1 bg-amber-300/30 rounded-sm" />
                    </div>
                  </div>
                </div>

                {/* 2. Left Doodle Sticker: Glowing Neon-Green Zigzag */}
                <div className="absolute left-4 top-[60%] sm:top-[65%] z-20 -translate-y-1/2 pointer-events-none drop-shadow-[0_0_12px_rgba(163,230,53,0.6)]">
                  <svg className="w-10 h-10 stroke-lime-400 stroke-[3] fill-none" viewBox="0 0 40 40">
                    <path d="M5 25 L12 12 L20 25 L28 12 L35 25" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

                {/* 3. Right Sticker: Floating Yellow "one link." Speech Bubble + Purple Lightning */}
                <div className="absolute right-2 sm:right-4 bottom-[28%] z-30 flex flex-col items-center max-w-[120px] sm:max-w-[140px] animate-bounce-slow">
                  
                  {/* Purple Lightning Bolt Sticker */}
                  <div className="absolute -top-6 right-2 z-40 drop-shadow-[0_0_8px_rgba(168,85,247,0.8)] rotate-12">
                    <svg className="w-6 h-7 fill-purple-500 text-purple-500" viewBox="0 0 24 24">
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                    </svg>
                  </div>

                  {/* Speech Bubble Container */}
                  <div className="relative bg-[#d9f99d] border-2 border-black rounded-[22px] px-3.5 py-2.5 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] text-black select-none">
                    
                    {/* Handwritten style bold text */}
                    <p className="text-[11px] sm:text-xs font-mono font-extrabold italic text-center leading-tight tracking-tight uppercase">
                      one link.
                    </p>
                    <div className="h-0.5 w-14 bg-black mx-auto my-0.5" />
                    <p className="text-[11px] sm:text-xs font-mono font-extrabold italic text-center leading-tight tracking-tight uppercase border-b border-black pb-0.5">
                      that's it.
                    </p>
                    
                    {/* Speech bubble pointy tail on the left pointing towards the phone */}
                    <div className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-4 h-4 bg-[#d9f99d] border-l-2 border-b-2 border-black rotate-45" />
                  </div>
                </div>

                {/* 4. Elegant 3D Smartphone Body representing the hand-held experience */}
                <div className="w-[190px] sm:w-[220px] aspect-[9/18.5] bg-[#0b0c10] border-[6px] sm:border-[8px] border-zinc-800 rounded-[34px] sm:rounded-[40px] shadow-[0_20px_45px_-12px_rgba(0,0,0,0.9)] relative overflow-hidden flex flex-col justify-between z-10 select-none group hover:scale-[1.02] transition-transform duration-500">
                  
                  {/* Top Notch Dynamic Island / Speaker */}
                  <div className="absolute top-2 inset-x-0 h-4 z-30 flex justify-center items-center">
                    <div className="w-[70px] sm:w-[85px] bg-black border border-white/5 rounded-full h-3 sm:h-3.5 flex items-center justify-between px-2.5">
                      {/* Simulated camera dot */}
                      <span className="text-[7px] font-mono text-white/90 leading-none select-none">9:41</span>
                      <div className="w-1.5 h-1.5 bg-zinc-900 rounded-full" />
                      <div className="flex items-center space-x-0.5">
                        {/* Cellular, Wifi signals */}
                        <div className="flex items-end space-x-[1px] h-1.5">
                          <div className="w-[1.5px] h-0.5 bg-white rounded-full" />
                          <div className="w-[1.5px] h-1 bg-white rounded-full" />
                          <div className="w-[1.5px] h-1.5 bg-white rounded-full" />
                        </div>
                        <div className="w-1.5 h-1.5 rounded-full border-[1.5px] border-white flex items-center justify-center overflow-hidden" />
                      </div>
                    </div>
                  </div>

                  {/* SCREEN INTERFACES: WHATSAPP CHAT IN DEEP DARK MODE */}
                  <div className="flex-grow flex flex-col bg-[#0b141a] pt-8 overflow-hidden relative">
                    
                    {/* Header Bar */}
                    <div className="bg-[#121b22] px-2 py-1.5 sm:py-2 border-b border-black/30 flex items-center justify-between">
                      <div className="flex items-center space-x-1 sm:space-x-1.5">
                        {/* Back Arrow */}
                        <span className="text-emerald-500 text-xs font-bold font-mono cursor-pointer select-none">‹</span>
                        
                        {/* Dimas Profile Avatar */}
                        <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gradient-to-tr from-cyan-500 to-indigo-500 flex items-center justify-center text-white text-[9px] font-bold border border-emerald-500/50">
                          {/* Placeholder display */}
                          D
                        </div>

                        {/* Name Info */}
                        <div className="flex flex-col">
                          <span className="text-[10px] sm:text-[11px] font-bold text-white leading-none">Dimas</span>
                          <span className="text-[8px] text-emerald-400 font-semibold leading-none mt-0.5">online</span>
                        </div>
                      </div>

                      {/* Top Right Utilities: Camera & Phone icons */}
                      <div className="flex items-center space-x-1.5 sm:space-x-2 text-zinc-400">
                        {/* Video Camera Icon */}
                        <svg className="w-3 h-3 text-zinc-300" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z" />
                        </svg>
                        
                        {/* Telephone / Call details */}
                        <svg className="w-3 h-3 text-zinc-300" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-2.2 2.2a15.045 15.045 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1.02c-.36-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
                        </svg>
                      </div>
                    </div>

                    {/* Chat Background Workspace Container */}
                    <div className="flex-grow flex flex-col justify-end p-2.5 sm:p-3 relative bg-[#0b141a]">
                      
                      {/* Dynamic light rays inside screen */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/5 to-transparent pointer-events-none" />

                      {/* The single WhatsApp green chat bubble */}
                      <div className="bg-[#005c4b] rounded-2xl rounded-tr-none px-2.5 sm:px-3 py-1.5 sm:py-2 max-w-[145px] sm:max-w-[170px] ml-auto mr-1 relative shadow-md select-text hover:bg-[#026c59] transition-all cursor-pointer">
                        
                        {/* Chat Text */}
                        <p className="text-[10px] sm:text-[11.5px] text-zinc-100 font-sans leading-tight">
                          check this out 🔥
                        </p>
                        
                        {/* SnapLink URL */}
                        <p className="text-[10px] sm:text-[11.5px] font-bold text-sky-200 hover:underline leading-tight mt-0.5 tracking-tight break-all">
                          snplink.memzo.dev/v/66WnqV
                        </p>

                        {/* Bubble footer (Timestamp & Tick) */}
                        <div className="flex items-center justify-end space-x-1 mt-1 text-[8px] text-zinc-300/80 float-right">
                          <span>9:41 AM</span>
                          {/* Double double ticks */}
                          <span className="text-cyan-400 font-bold">✓✓</span>
                        </div>

                        {/* Hearth Reaction Pill on bubble bottom-left */}
                        <button 
                          onClick={handleLike}
                          className={`absolute -bottom-2.5 left-2 bg-[#1f2c34] border border-[#2c3d47] px-1.5 py-0.5 rounded-full flex items-center justify-center scale-90 sm:scale-95 shadow-md active:scale-90 transition-transform ${hasLiked ? 'animate-bounce' : ''}`}
                          title="Like it!"
                        >
                          <span className="text-rose-500 text-[9px] mr-1">❤️</span>
                          <span className="text-white text-[8px] font-mono leading-none">{likesCount}</span>
                        </button>
                      </div>

                    </div>

                    {/* Subtitle bottom branding inside mobile screen */}
                    <div className="bg-[#121b22] py-1 text-center border-t border-white/5 select-none z-10">
                      <p className="text-[8px] text-zinc-500 font-mono tracking-widest leading-none pt-0.5">
                        SNAPLINK // NATIVE WRITING
                      </p>
                    </div>

                  </div>

                </div>

              </div>
            </section>

          </div>
        </main>

        {/* COMPACT FOOTER OVERLAY BAR */}
        <footer className="w-full border-t border-white/5 py-4 px-4 sm:px-6 lg:px-8 text-center flex flex-col sm:flex-row justify-between items-center gap-3 bg-zinc-950/20 backdrop-blur-md">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span className="font-display font-medium text-white tracking-wider text-[10px] uppercase">member of Memzo.dev</span>
          </div>

          <p className="text-[9px] font-mono text-zinc-500">
            © 2026 SnapLink Inc. WCAG AAA and .m3u8 native streaming compliant.
          </p>
        </footer>

      </div>

    </div>
  );
}

