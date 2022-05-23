import { Blog } from "../containers";

import { PAGES, BLOG_LISTING, BLOG_DETAIL, TAGS } from "../api";

import { prefetchData, transformUrl } from "../libs";

const BlogPage = ({ ...props }) => {
  return <Blog {...props} />;
};

export default BlogPage;

export async function getServerSideProps({ params, query }) {
  const { id } = query;

  try {
    const urls = [
      transformUrl(PAGES, {
        type: BLOG_LISTING,
        fields: "*",
      }),
      transformUrl(PAGES, {
        type: BLOG_DETAIL,
        fields: "*",
      }),
      transformUrl(TAGS, {
        limit: "20",
      }),
    ];

    if (id) {
      urls.push(transformUrl(`${PAGES}/${id}`));
    }

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
