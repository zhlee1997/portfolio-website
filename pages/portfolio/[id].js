import BaseLayout from "../../components/layouts/BaseLayout";
import { useRouter } from "next/router";
import axios from "axios";

const PortfolioDetail = ({ portfolio }) => {
  const router = useRouter();

  return (
    <BaseLayout>
      <h1>I am Portfolio Page</h1>
      <h1>{portfolio.title}</h1>
      <p>BODY: {portfolio.body}</p>
      <p>ID: {portfolio.id}</p>
    </BaseLayout>
  );
};

PortfolioDetail.getInitialProps = async ({ query }) => {
  let post = {};
  try {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${query.id}`
    );
    post = res.data;
  } catch (error) {
    console.error(error);
  }
  return { portfolio: post };
};

export default PortfolioDetail;
