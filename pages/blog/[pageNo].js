function Post({ post }) {
  return <div>{post.id}</div>;
}

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/");
  const posts = await res.json();
  // Get the paths we want to pre-render based on posts
  const paths = posts.slice(0, 3).map((post) => ({
    params: { pageNo: post.id.toString() },
  }));
  console.log(paths);
  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  console.log(params);
  // params contains the post `pageNo`.
  // If the route is like /posts/1, then params.pageNo is 1
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.pageNo}`
  );
  const post = await res.json();

  // Pass post data to the page via props
  return { props: { post } };
}

export default Post;
