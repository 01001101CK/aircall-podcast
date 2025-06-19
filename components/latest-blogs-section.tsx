import styles from './latest-blogs-section.module.css';
import Image from 'next/image';

const blogs = [
  {
    image: '/blog1.png',
    category: 'SALES',
    categoryColor: styles.categorySales,
    readTime: '9 MIN READ',
    title: 'How to Pick the Best Technology for Your Team',
    description: 'Choosing call recording software is difficult, to say the least.'
  },
  {
    image: '/blog2.png',
    category: 'PRODUCT',
    categoryColor: styles.categoryProduct,
    readTime: '3 MIN READ',
    title: 'The Secret to Building a Hybrid Workplace | Part III: Hiring Hybrid Employees',
    description: 'This article is a part of our series about building the ultimate hybrid workplace.'
  },
  {
    image: '/blog3.png',
    category: 'LIFE AT AIRCALL',
    categoryColor: styles.categoryLife,
    readTime: '5 MIN READ',
    title: 'Developing a Hybrid Workforce? Here Are the Top Factors to Consider',
    description: 'A recent survey conducted by global consulting firm PwC...'
  },
  {
    image: '/blog4.png',
    category: 'SALES',
    categoryColor: styles.categorySales,
    readTime: '9 MIN READ',
    title: 'Creating a Workplace Built on Collaboration',
    description: 'This article is a part of our series about building the ultimate hybrid workplace.'
  }
];

export default function LatestBlogsSection() {
  return (
    <section className={styles.latestBlogsSection}>
      <h2 className={styles.sectionTitle}>Discover our latest articles</h2>
      <div className={styles.blogsGrid}>
        {blogs.map((blog, idx) => (
          <article className={styles.blogCard} key={idx}>
            <div className={styles.blogImageWrapper}>
              <Image src={blog.image} alt={blog.title} fill className={styles.blogImage} />
            </div>
            <div className={styles.blogMetaRow}>
              <span className={blog.categoryColor}>{blog.category}</span>
              <span className={styles.metaDot} />
              <span className={styles.readTime}>{blog.readTime}</span>
            </div>
            <h3 className={styles.blogTitle}>{blog.title}</h3>
            <p className={styles.blogDescription}>{blog.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
} 