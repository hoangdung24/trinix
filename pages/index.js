import { Home } from "../containers";

import { PAGES, HOME } from "../api";

import { prefetchData, transformUrl } from "../libs";

export default function HomePage({ ...props }) {
  return <Home {...props} />;
}

export async function getServerSideProps({ params, query }) {
  try {
    const urls = [
      transformUrl(PAGES, {
        type: HOME,
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
        destination: "/404",
        permanent: false,
      },
    };
  }
}
