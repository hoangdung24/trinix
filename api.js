export const DOMAIN_NAME = "https://trinix.t-solution.vn";

export const SETTING = "/api/v2";
export const PAGES = "/api/v2/pages";
export const TAGS = "/api/v2/blog-tags";

// ?type=
// portfolio.PortfolioCategoryListingPage
// portfolio.PortfolioCategoryDetailPage
// portfolio.PortfolioDetailPage

// ?fields=*

// ?child_of={id}

export const PORTFOLIO_CATEGORY_LIST = "portfolio.PortfolioCategoryListingPage";
export const PORTFOLIO_CATEGORY = "portfolio.PortfolioCategoryDetailPage";
export const PORTFOLIO_DETAIL = "portfolio.PortfolioDetailPage";

export const BLOG_LISTING = "blog.BlogListingPage";
export const BLOG_DETAIL = "blog.BlogDetailPage";

export const HOME = "home.HomePage";
export const ABOUT = "about.AboutPage";
export const CONTACT = "contact.ContactPage";

export const SETTING_API = `${DOMAIN_NAME}${SETTING}`;
export const PAGES_API = `${DOMAIN_NAME}${PAGES}`;
// export const PORTFOLIO_CATEGORY_LIST_API = `${DOMAIN_NAME}${PAGES}?type=${PORTFOLIO_CATEGORY_LIST}`;
// export const PORTFOLIO_CATEGORY_API = `${DOMAIN_NAME}${PAGES}?type=${PORTFOLIO_CATEGORY}`;
// export const PORTFOLIO_DETAIL_API = `${DOMAIN_NAME}${PAGES}?type=${PORTFOLIO_DETAIL}`;
