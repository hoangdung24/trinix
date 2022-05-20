import { Portfolio } from "../../containers";
import { prefetchData, transformUrl } from "../../libs";
import { PAGES, PORTFOLIO_CATEGORY, PORTFOLIO_DETAIL } from "../../api";

const PortfolioPage = ({ ...props }) => {
  return <Portfolio {...props} />;
};

export default PortfolioPage;

export async function getServerSideProps({ params, query }) {
  try {
    const { portfolio } = params;

    const detailUrl = transformUrl(PAGES, {
      type: PORTFOLIO_DETAIL,
      child_of: portfolio,
      fields: "*",
    });

    const urls = [
      detailUrl,
      transformUrl(PAGES, {
        type: PORTFOLIO_CATEGORY,
        fields: "*",
      }),
    ];

    const { resList, fallback } = await prefetchData(urls);

    return {
      props: {
        initData: resList,
        fallback: {
          ...fallback,
          [detailUrl]: resList[0],
        },
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
