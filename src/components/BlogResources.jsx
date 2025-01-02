import React from "react";
import styles from "../styles/BlogResources.module.css";
import BlogImage1 from "../assets/images/blog-1.png";
import BlogImage2 from "../assets/images/blog-2.png";
import BlogImage3 from "../assets/images/blog-3.png";

const BlogResources = () => {
  const blogs = [
    {
      image: BlogImage1,
      category: "Post-Surgery",
      date: "23Dec,2024",
      title: "5 Tips for a Speedy Post-Surgery Recovery",
    },
    {
      image: BlogImage2,
      category: "Pain Management",
      date: "23Dec,2024",
      title: "How to Manage Chronic Pain Effectively at Home",
    },
    {
      image: BlogImage3,
      category: "Elderly Care",
      date: "23Dec,2024",
      title: "The Benefits of Physiotherapy for Elderly Mobility",
    },
  ];

  return (
    <section className={styles.blog}>
      <div className={styles.header}>
        <h2 className={styles.title}>
          Stay Informed with <span className={styles.highlight}>Our Latest Updates</span>
        </h2>
        <button className={styles.readMoreBtn}>Read More Articles</button>
      </div>
      
      <div className={styles.gridContainer}>
        <div className={styles.mainArticle}>
          <img src={BlogImage1} alt="Main blog article" className={styles.mainImage} />
          <div className={styles.articleMeta}>
            <span className={styles.category}>Cardiology</span>
            <span className={styles.date}>23Dec,2024</span>
          </div>
        </div>

        <div className={styles.sideArticles}>
          {blogs.map((blog, index) => (
            <article key={index} className={styles.articleCard}>
              <img src={blog.image} alt={blog.title} className={styles.articleImage} />
              <div className={styles.articleContent}>
                <h3 className={styles.articleTitle}>{blog.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogResources;