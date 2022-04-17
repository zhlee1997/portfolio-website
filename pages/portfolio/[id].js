import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import { useGetPostById } from "../../actions/index";
import { useRouter } from "next/router";

const PortfolioDetail = () => {
  // router.query.id can be null when page first renders
  const router = useRouter();
  const { data: portfolio, error, loading } = useGetPostById(router.query.id);

  return (
    <BaseLayout>
      <BasePage>
        {loading && <p>Loading data...</p>}
        {portfolio && (
          <>
            <h1>I am Portfolio Page</h1>
            <h1>{portfolio.title}</h1>
            <p>BODY: {portfolio.body}</p>
            <p>ID: {portfolio.id}</p>
          </>
        )}
        {error && <div className="alert alert-danger">{error.message}</div>}
      </BasePage>
    </BaseLayout>
  );
};

export default PortfolioDetail;
