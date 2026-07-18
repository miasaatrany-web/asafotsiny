export type Role = 'Community Manager' | 'Virtual Assistant';

export interface PortfolioData {
  role: Role;
  name: string;
  bio: string;
  skills: string;
  projects: { title: string; description: string }[];
  formation: {
    metier: string;
    outillage: string;
  };
  theme: 'modern' | 'minimal' | 'bold' | 'playful' | 'elegant';
  socialLinks: { platform: string; url: string }[];
  media: string[]; // URLs for photos/videos
}
