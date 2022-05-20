import { PortfolioCategory } from "../../containers";

import { prefetchData, transformUrl } from "../../libs";
import { PAGES, PORTFOLIO_CATEGORY_LIST, PORTFOLIO_CATEGORY } from "../../api";

const PortfolioCategoryPage = ({ ...props }) => {
  return <PortfolioCategory {...props} />;
};

export default PortfolioCategoryPage;

export async function getServerSideProps({ params, query }) {
  try {
    const urls = [
      transformUrl(PAGES, {
        type: PORTFOLIO_CATEGORY_LIST,
        fields: "*",
      }),
      transformUrl(PAGES, {
        type: PORTFOLIO_CATEGORY,
        fields: "*",
      }),
    ];

    const { resList, fallback } = await prefetchData(urls);

    return {
      props: {
        initData: resList,
        fallback,
      },
    };
  } catch {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
}
