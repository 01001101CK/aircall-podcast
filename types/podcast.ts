export interface Podcast {
  id: string;
  image: string;
  episode: string;
  duration: string;
  title: string;
  description?: string;
  isComingSoon?: boolean;
  date: string; // ISO date string for sorting
} 