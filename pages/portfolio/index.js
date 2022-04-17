import React from "react";
import BaseLayout from "@/components/layouts/BaseLayout";
import Link from "next/link";
import BasePage from "@/components/BasePage";
import { useGetPosts } from "../../actions";

const Portfolio = () => {
  const { data, error, loading } = useGetPosts();

  const renderPosts = () => {
    return data.map((post) => (
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
        <BasePage>
          <h1>I am Portfolio page</h1>
          {loading && <p>Loading data...</p>}
          <ul>{data && renderPosts()}</ul>
          <ul>
            {error && <div className="alert alert-danger">{error.message}</div>}
          </ul>
        </BasePage>
      </BaseLayout>
    </>
  );
};

export default Portfolio;
