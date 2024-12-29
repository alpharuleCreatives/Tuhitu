import React from "react";
import styles from "../styles/BlogResources.module.css";
import BlogImage1 from "../assets/images/blog-1.png"; // Replace with actual image paths
import BlogImage2 from "../assets/images/blog-2.png";
import BlogImage3 from "../assets/images/blog-3.png";

const BlogResources = () => {
  const blogs = [
    {
      image: BlogImage1,
      title: "5 Tips for a Speedy Post-Surgery Recovery",
      link: "#",
    },
    {
      image: BlogImage2,
      title: "How to Manage Chronic Pain Effectively at Home",
      link: "#",
    },
    {
      image: BlogImage3,
      title: "The Benefits of Physiotherapy for Elderly Mobility",
      link: "#",
    },
  ];

  return (
    <section className={styles.blog}>
      <h2 className={styles.title}>Stay Informed with Our Latest Updates</h2>
      <div className={styles.grid}>
        {blogs.map((blog, index) => (
          <div key={index} className={styles.card}>
            <img src={blog.image} alt={blog.title} className={styles.image} />
            <h3 className={styles.cardTitle}>{blog.title}</h3>
            <button className={styles.button}>Read More</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogResources;
