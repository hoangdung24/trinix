import { NextSeo } from "next-seo";

const SEO = ({ data = {} }) => {
  const { seo_title, search_description } = data;

  return (
    <NextSeo
      title={seo_title || "Trinix Studio Viet Nam | Post-production & 3D production"}
      description={
        search_description ||
        "We specialize in 3D Animation, Game, VFX and Post-Production Services. Let's work together!"
      }
      openGraph={{
        url: "https://trinix.studio",
        title: seo_title || "Trinix Studio Viet Nam | Post-production & 3D production",
        description:
          search_description ||
          "We specialize in 3D Animation, Game, VFX and Post-Production Services. Let's work together!",
        images: [
          {
            url: "/trinix-banner.jpg",
            width: 800,
            height: 600,
            alt: "Trinix Studio Viet Nam | Post-production & 3D production",
            type: "image/jpeg",
          },
        ],
        site_name: "Trinix Studio Viet Nam | Post-production & 3D production",
      }}
      additionalLinkTags={[
        {
          rel: "icon",
          href: `/favicon.png`,
        },
        {
          rel: "apple-touch-icon",
          href: `/favicon.png`,
        },
      ]}
    />
  );
};

export default SEO;

// console
