import axios from "axios";
import { PortfolioCategory } from "../../containers";

import { PAGES, PORTFOLIO_CATEGORY_LIST, PORTFOLIO_CATEGORY } from "../../api";

const PortfolioCategoryPage = ({ ...props }) => {
  return <PortfolioCategory {...props} />;
};

export default PortfolioCategoryPage;

export async function getServerSideProps({ params, query }) {
  try {
    const urls = [
      `${PAGES}?type=${PORTFOLIO_CATEGORY_LIST}&fields=*`,
      `${PAGES}?type=${PORTFOLIO_CATEGORY}&fields=*`,
    ];

    const resList = await Promise.all(
      urls.map((url) =>
        axios.get(url).then(({ data }) => {
          return data;
        })
      )
    );

    let portfolioCategory, portfolioCategoryDetail;

    resList.forEach((el, idx) => {
      if (idx === 0) {
        portfolioCategory = el;
      } else if (idx === 1) {
        portfolioCategoryDetail = el;
      }
    });

    return {
      props: {
        portfolioCategory: portfolioCategory,
        portfolioCategoryDetail: portfolioCategoryDetail,
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
