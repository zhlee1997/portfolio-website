import React from "react";
import BaseLayout from "../../components/layouts/BaseLayout";
import axios from "axios";
import Link from "next/link";

const Portfolio = ({ posts }) => {
  const renderPosts = () => {
    return posts.map((post) => (
      <li key={post.id}>
        <Link href={`/portfolio/${post.id}`}>
          <a>{post.title}</a>
        </Link>
      </li>
    ));
  };

  return (
    <>
      <BaseLayout>
        <h1>I am Portfolio page</h1>
        <ul>{renderPosts()}</ul>
      </BaseLayout>
    </>
  );
};

Portfolio.getInitialProps = async () => {
  let posts = [];
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    posts = res.data;
  } catch (error) {
    console.error(e);
  }

  return { posts: posts.slice(0, 10) };
};

export default Portfolio;
