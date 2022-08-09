import React from "react";
import NavBar from "../../Components/NavBar";
import styles from "./index.module.css";
export const getStaticProps = async () => {
  const res = await fetch("http://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};
const index = ({ data }) => {
  return (
    <div className={styles.container}>
      <NavBar />
      <h1 className={styles.heading}>My blogs</h1>
      <div className={styles.blogsContainer}>
        {data.map((blog) => (
          <div key={blog.id} className={styles.blogContainer}>
            <div className={styles.blogNumber}>
              <div>{blog.id}</div>
            </div>
            <div className={styles.blogText}>{blog.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default index;
