import axios from "axios";

import { PAGES, PORTFOLIO_CATEGORY, PORTFOLIO_DETAIL } from "../../api";

import { Portfolio } from "../../containers";

const PortfolioPage = ({ ...props }) => {
  return <Portfolio {...props} />;
};

export default PortfolioPage;

export async function getServerSideProps({ params, query }) {
  const { portfolio } = params;

  try {
    const urls = [
      `${PAGES}?type=${PORTFOLIO_DETAIL}&child_of=${portfolio}&fields=*`,
      `${PAGES}?type=${PORTFOLIO_CATEGORY}&fields=*`,
    ];

    const resList = await Promise.all(
      urls.map((url) =>
        axios.get(url).then(({ data }) => {
          return data;
        })
      )
    );

    let portfolioDetailList, portfolioCategoryList;

    resList.forEach((el, idx) => {
      if (idx === 0) {
        portfolioDetailList = el;
      }

      if (idx === 1) {
        portfolioCategoryList = el;
      }
    });

    return {
      props: {
        portfolioDetailList,
        portfolioCategoryList,
      },
    };
  } catch (err) {
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };
  }
}
