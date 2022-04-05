import axios from "axios";

import { About } from "../containers";

import { PAGES, ABOUT } from "../api";

const AboutPage = ({ ...aboutData }) => {
  return <About {...aboutData} />;
};

export default AboutPage;

export async function getServerSideProps({ params, query }) {
  try {
    const urls = [`${PAGES}?type=${ABOUT}&fields=*&limit=100`];

    const resList = await Promise.all(
      urls.map((url) =>
        axios.get(url).then(({ data }) => {
          return data;
        })
      )
    );

    let aboutData;

    resList.forEach((el, idx) => {
      if (idx === 0) {
        aboutData = el;
      }
    });

    return {
      props: {
        aboutData: aboutData,
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
