import { Box } from "@mui/material";

import {
  PortfolioCategoryBanner,
  CategoryPortfolioCard,
  BottomLogo,
  Headline,
  GridContainer,
} from "../../components";

const PortfolioCategory = ({ portfolioCategory, portfolioCategoryDetail }) => {
  console.log(portfolioCategory);

  return (
    <Box>
      <PortfolioCategoryBanner data={portfolioCategory} />

      <GridContainer>
        <Box
          sx={{
            marginTop: 6,
            marginBottom: 12,
          }}
        >
          <Headline variant="h1">WHAT WE DO...</Headline>
        </Box>
      </GridContainer>

      {portfolioCategoryDetail.items.map((el, idx) => {
        const { is_special } = el;

        if (is_special) {
          return <BottomLogo key={el.id} {...el} />;
        } else {
          return <CategoryPortfolioCard key={el.id} {...el} counter={idx + 1} />;
        }
      })}
    </Box>
  );
};

export default PortfolioCategory;
