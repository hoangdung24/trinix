import axios from "axios";

import { Home } from "../containers";

import { PAGES, HOME } from "../api";

export default function HomePage({ ...props }) {
  return <Home {...props} />;
}

export async function getServerSideProps({ params, query }) {
  try {
    const urls = [`${PAGES}?type=${HOME}&fields=*`];

    const resList = await Promise.all(
      urls.map((url) =>
        axios.get(url).then(({ data }) => {
          return data;
        })
      )
    );

    let homeData;

    resList.forEach((el, idx) => {
      if (idx === 0) {
        homeData = el;
      }
    });

    return {
      props: {
        initData: homeData,
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
