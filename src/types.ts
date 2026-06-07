export interface VibeTheme {
  id: string;
  name: string;
  subtitle: string;
  category: 'cyberpunk' | 'cosmic' | 'ambient' | 'synthwave';
  videoUrl: string; // HLS (.m3u8) Stream
  fallbackVideoUrl: string; // MP4 beautiful loop as dynamic fallback/safeguard
  accentColor: string; // e.g. text-cyan-400
  buttonColor: string; // e.g. bg-cyan-500/20 text-cyan-300 border-cyan-500/30
  badgeColor: string; // e.g. bg-cyan-500/10 text-cyan-400
  glassColor: string; // custom tinting for glassmorphic cards
  ambientDescription: string; // descriptive audio-like caption for low-vision/screen-readers
}

export interface SharedLinkVibe {
  id: string;
  title: string;
  creator: string;
  creatorAvatar: string;
  sourceType: 'spotify' | 'instagram' | 'pinterest' | 'soundcloud' | 'custom';
  vibeThemeId: string;
  songOrTitle: string;
  likesCount: number;
  tags: string[];
  mockScreenshotUrl: string; // high-quality image of the source screenshot
  mockLandingPageUrl: string; // high-quality visually generated preview
}
