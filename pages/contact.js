import { Contact } from "../containers";

import { CONTACT, PAGES } from "../api";
import { prefetchData, transformUrl } from "../libs";
const Contactpage = ({ ...props }) => {
  return <Contact {...props} />;
};

export default Contactpage;

export async function getServerSideProps({ params, query }) {
  try {
    const urls = [
      transformUrl(PAGES, {
        type: CONTACT,
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
  } catch (err) {
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };
  }
}
