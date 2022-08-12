import React from "react";
import NavBar from "../../Components/NavBar";
export const getStaticPaths = async () => {
  const res = await fetch("http://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  const paths = data.map((post) => {
    return { params: { pageNo: post.id.toString() } };
  });
  return {
    paths: paths,
    fallback: false,
  };
};

export async function getStaticProps({ params }) {
  console.log(params);
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.pageNo}`
  );
  const post = await res.json();
  return { props: { post } };
}

const Details = ({ post }) => {
  console.log(post);
  return (
    <div>
      <NavBar />
      <h5>Details page</h5>
      <strong>{post.title}</strong>
      <p>{post.body}</p>
    </div>
  );
};

export default Details;
