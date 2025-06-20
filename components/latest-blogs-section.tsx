"use client";
import styles from '../styles/components/latest-blogs-section.module.css';
import Image from 'next/image';
import { useSearch } from '../contexts/SearchContext';

export default function LatestBlogsSection() {
  const { filteredBlogs, isSearching } = useSearch();

  return (
    <section className={styles.latestBlogsSection} aria-labelledby="blogs-heading">
      <h2 id="blogs-heading" className={styles.sectionTitle}>
        {isSearching ? `Search Results (${filteredBlogs.length} articles)` : 'Discover our latest articles'}
      </h2>
      <div className={styles.blogsGrid} aria-label="Blog articles">
        {filteredBlogs.map((blog, idx) => (
          <article className={styles.blogCard} key={idx}>
            <div className={styles.blogImageWrapper}>
              <Image src={blog.image} alt="" fill className={styles.blogImage} aria-hidden="true" />
            </div>
            <div className={styles.blogMetaRow}>
              <span className={styles[blog.categoryKey]} aria-label={`Category: ${blog.category}`}>{blog.category}</span>
              <span className={styles.metaDot} aria-hidden="true" />
              <span className={styles.readTime} aria-label={`Reading time: ${blog.readTime}`}>{blog.readTime}</span>
            </div>
            <h3 className={styles.blogTitle}>{blog.title}</h3>
            <p className={styles.blogDescription}>{blog.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
} 