import { Box, Typography } from "@mui/material";

import {
  PortfolioCategoryBanner,
  CategoryPortfolioCard,
  BottomLogo,
  Headline,
  GridContainer,
} from "../../components";

import get from "lodash/get";

import { useDevice } from "../../hooks";

const PortfolioCategory = ({ portfolioCategory, portfolioCategoryDetail }) => {
  const { isMobile } = useDevice();

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
          {!isMobile ? (
            <Headline variant="h1">WHAT WE DO...</Headline>
          ) : (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography variant="title1" marginBottom={3}>
                {get(portfolioCategory, "items[0].title")}
              </Typography>
              <Typography marginBottom={3}>
                {get(portfolioCategory, "items[0].subtitle")}
              </Typography>
              <Box
                sx={{
                  width: "50%",
                  height: "1px",
                  backgroundColor: "common.black",
                }}
              ></Box>
            </Box>
          )}
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
