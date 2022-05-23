import { About } from "../containers";

import { PAGES, ABOUT } from "../api";
import { prefetchData, transformUrl } from "../libs";

const AboutPage = ({ ...aboutData }) => {
  return <About {...aboutData} />;
};

export default AboutPage;

export async function getServerSideProps({ params, query }) {
  try {
    const urls = [
      transformUrl(PAGES, {
        fields: "*",
        limit: 100,
        type: ABOUT,
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
        destination: "/404",
        permanent: false,
      },
    };
  }
}
