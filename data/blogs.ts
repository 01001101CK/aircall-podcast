import type { Blog } from '../types/blog';

export const blogs: Blog[] = [
  {
    image: '/blog1.png',
    category: 'SALES',
    readTime: '9 MIN READ',
    title: 'How to Pick the Best Technology for Your Team',
    description: 'Choosing call recording software is difficult, to say the least.',
    categoryKey: 'categorySales',
  },
  {
    image: '/blog2.png',
    category: 'PRODUCT',
    readTime: '3 MIN READ',
    title: 'The Secret to Building a Hybrid Workplace | Part III: Hiring Hybrid Employees',
    description: 'This article is a part of our series about building the ultimate hybrid workplace.',
    categoryKey: 'categoryProduct',
  },
  {
    image: '/blog3.png',
    category: 'LIFE AT AIRCALL',
    readTime: '5 MIN READ',
    title: 'Developing a Hybrid Workforce? Here Are the Top Factors to Consider',
    description: 'A recent survey conducted by global consulting firm PwC...',
    categoryKey: 'categoryLife',
  },
  {
    image: '/blog4.png',
    category: 'SALES',
    readTime: '9 MIN READ',
    title: 'Creating a Workplace Built on Collaboration',
    description: 'This article is a part of our series about building the ultimate hybrid workplace.',
    categoryKey: 'categorySales',
  }
]; 