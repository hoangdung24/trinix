import axios from "axios";
import { Blog } from "../containers";

import { PAGES, BLOG_LISTING, BLOG_DETAIL, TAGS } from "../api";

const BlogPage = ({ ...props }) => {
  return <Blog {...props} />;
};

export default BlogPage;

export async function getServerSideProps({ params, query }) {
  try {
    const urls = [
      `${PAGES}?type=${BLOG_LISTING}&fields=*`,
      `${PAGES}?type=${BLOG_DETAIL}&fields=*`,
      `${TAGS}?limit=20`,
    ];

    const resList = await Promise.all(
      urls.map((url) =>
        axios.get(url).then(({ data }) => {
          return data;
        })
      )
    );

    return {
      props: {
        initBlogPage: resList[0],
        initBlogListPage: resList[1],
        initTagList: resList[2],
      },
    };
  } catch (err) {
    console.log(err);

    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
}
