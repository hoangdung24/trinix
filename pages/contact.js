import React from "react";
import axios from "axios";
import { Contact } from "../containers";

import { CONTACT, PAGES } from "../api";

const Contactpage = ({ ...props }) => {
  return <Contact {...props} />;
};

export default Contactpage;

export async function getServerSideProps({ params, query }) {
  try {
    const urls = [`${PAGES}?type=${CONTACT}&fields=*`];

    const resList = await Promise.all(
      urls.map((url) =>
        axios.get(url).then(({ data }) => {
          return data;
        })
      )
    );

    return {
      props: {
        initContactPage: resList[0],
      },
    };
  } catch (err) {
    // console.log(err);

    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };
  }
}
