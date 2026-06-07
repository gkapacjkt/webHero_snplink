import { VibeTheme, SharedLinkVibe } from './types';

export const VIBE_THEMES: VibeTheme[] = [
  {
    id: 'cyberpunk-neon',
    name: 'Cyberpunk Tokyo',
    subtitle: 'High frequency neon and synthetic rain visuals.',
    category: 'cyberpunk',
    // High-quality user-selected HLS stream
    videoUrl: 'https://stream.mux.com/Kec29dVyJgiPdtWaQtPuEiiGHkJIYQAVUJcNiIHUYeo.m3u8',
    fallbackVideoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-futuristic-subway-station-with-neon-lights-44129-large.mp4',
    accentColor: 'text-fuchsia-400',
    buttonColor: 'bg-fuchsia-500/20 text-fuchsia-300 border-fuchsia-500/30 hover:bg-fuchsia-500/35 focus:ring-fuchsia-500',
    badgeColor: 'bg-fuchsia-500/10 text-fuchsia-400 border-fuchsia-500/20',
    glassColor: 'rgba(244, 63, 94, 0.05)',
    ambientDescription: 'Cosmopolitan neon signs reflecting on wet asphalt during a futuristic Tokyo rain shower with neon pink and fluorescent blue luminescence.'
  },
  {
    id: 'cosmic-nebula',
    name: 'Deep Cosmic',
    subtitle: 'Interstellar dust clouds and particle drift.',
    category: 'cosmic',
    videoUrl: 'https://stream.mux.com/Kec29dVyJgiPdtWaQtPuEiiGHkJIYQAVUJcNiIHUYeo.m3u8',
    fallbackVideoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-dreamy-glowing-particles-background-loop-41804-large.mp4',
    accentColor: 'text-cyan-400',
    buttonColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30 hover:bg-cyan-500/35 focus:ring-cyan-500',
    badgeColor: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/25',
    glassColor: 'rgba(6, 182, 212, 0.04)',
    ambientDescription: 'Deep cosmic celestial visualization showing starry nebula clouds swirling with rich cyan, gold, and turquoise light specs floating smoothly.'
  },
  {
    id: 'ambient-forest',
    name: 'Nordic Forest',
    subtitle: 'Cozy mist in northern pine forest valleys.',
    category: 'ambient',
    videoUrl: 'https://stream.mux.com/Kec29dVyJgiPdtWaQtPuEiiGHkJIYQAVUJcNiIHUYeo.m3u8',
    fallbackVideoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-dense-fog-in-a-coniferous-forest-41908-large.mp4',
    accentColor: 'text-emerald-400',
    buttonColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30 hover:bg-emerald-500/35 focus:ring-emerald-500',
    badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    glassColor: 'rgba(16, 185, 129, 0.04)',
    ambientDescription: 'Misty coniferous forest pine trees enveloped in dense morning fog under subtle rays of celestial northern lights.'
  },
  {
    id: 'synthwave-grid',
    name: 'Synthwave Horizon',
    subtitle: 'Wireframe vectors and nostalgic 80s warmth.',
    category: 'synthwave',
    videoUrl: 'https://stream.mux.com/Kec29dVyJgiPdtWaQtPuEiiGHkJIYQAVUJcNiIHUYeo.m3u8',
    fallbackVideoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-animation-of-futuristic-neon-lights-cyberpunk-concept-43187-large.mp4',
    accentColor: 'text-amber-400',
    buttonColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30 hover:bg-amber-500/35 focus:ring-amber-500',
    badgeColor: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    glassColor: 'rgba(245, 158, 11, 0.04)',
    ambientDescription: 'Vibrant violet and gold wireframe landscape grid stretching out towards a massive glowing nostalgic 80s sun.'
  }
];

export const SAMPLE_LINKS: SharedLinkVibe[] = [
  {
    id: 'lnk-001',
    title: 'Midnight Driving Loops',
    creator: 'Xavier Lopez',
    creatorAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80',
    sourceType: 'spotify',
    vibeThemeId: 'cyberpunk-neon',
    songOrTitle: 'Midnight City — M83 • Nightcall — Kavinsky',
    likesCount: 1420,
    tags: ['Late Night', 'Synth', 'Tokyo Rain'],
    mockScreenshotUrl: 'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?w=600&auto=format&fit=crop&q=60',
    mockLandingPageUrl: 'https://images.unsplash.com/photo-1515462277126-270d878326e5?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'lnk-002',
    title: 'Stargazer Dreams',
    creator: 'Elena Vostova',
    creatorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
    sourceType: 'soundcloud',
    vibeThemeId: 'cosmic-nebula',
    songOrTitle: 'Stargazing Mix (Cozy Space Ambience)',
    likesCount: 984,
    tags: ['Acoustic Space', 'Lo-Fi Chill', 'Ambient'],
    mockScreenshotUrl: 'https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?w=600&auto=format&fit=crop&q=60',
    mockLandingPageUrl: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'lnk-003',
    title: 'Warm Pine Cabin',
    creator: 'Marcus Greenfield',
    creatorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    sourceType: 'instagram',
    vibeThemeId: 'ambient-forest',
    songOrTitle: 'Cabin in the Cascades (Photo Journal)',
    likesCount: 2210,
    tags: ['Mist', 'Cabin Porn', 'Quiet Walks'],
    mockScreenshotUrl: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&auto=format&fit=crop&q=60',
    mockLandingPageUrl: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=600&auto=format&fit=crop&q=80'
  },
  {
    id: 'lnk-004',
    title: 'Outrun Retro Grid',
    creator: 'Max Vector',
    creatorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    sourceType: 'pinterest',
    vibeThemeId: 'synthwave-grid',
    songOrTitle: 'Aesthetic Outrun Visual Board',
    likesCount: 844,
    tags: ['Vaporwave', 'Grid Design', 'Outrun'],
    mockScreenshotUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&auto=format&fit=crop&q=60',
    mockLandingPageUrl: 'https://images.unsplash.com/photo-1563089145-599997674d42?w=600&auto=format&fit=crop&q=80'
  }
];
