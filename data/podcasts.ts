import type { Podcast } from '../types/podcast';

export const podcasts: Podcast[] = [
  {
    id: '1',
    image: '/podcast1.png',
    episode: 'S01E01',
    duration: '32MIN',
    title: 'The Data-Driven Way to Put Customers First',
    description: 'Learn how data-driven approaches can transform customer experience.'
  },
  {
    id: '2',
    image: '/podcast2.png',
    episode: 'S01E01',
    duration: '32MIN',
    title: 'What Is Interactive Voice Response',
    description: 'Understanding IVR systems and their impact on customer service.'
  },
  {
    id: '3',
    image: '/podcast-placeholder.png',
    episode: '',
    duration: '',
    title: '',
    isComingSoon: true
  },
  {
    id: '4',
    image: '/podcast-placeholder.png',
    episode: '',
    duration: '',
    title: '',
    isComingSoon: true
  }
]; 