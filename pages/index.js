import axios from "axios";

import { Home } from "../containers";

import { PAGES, HOME, SETTING_API } from "../api";

export default function HomePage({ ...props }) {
  return <Home {...props} />;
}

export async function getServerSideProps({ params, query }) {
  try {
    const urls = [`${PAGES}?type=${HOME}&fields=*`, SETTING_API];

    const resList = await Promise.all(
      urls.map((url) =>
        axios.get(url).then(({ data }) => {
          return data;
        })
      )
    );

    return {
      props: {
        initData: resList[0],
        initSetting: resList[1],
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
