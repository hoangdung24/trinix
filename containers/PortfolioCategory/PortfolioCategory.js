import { Box } from "@mui/material";

import {
  PortfolioCategoryBanner,
  CategoryPortfolioCard,
  BottomLogo,
  Headline,
  GridContainer,
} from "../../components";

const data = [
  {
    id: "1.",
    title: "2D Projects",
    subTitle: "Artwork, Graphic Design, Photography",
    imageSrc: "/background2.png",
  },
  {
    id: "2.",
    title: "3D Projects",
    subTitle: "Artwork, Graphic Design, Photography",
    imageSrc: "/background2.png",
  },
  {
    id: "3.",
    title: "Visual Effects",
    subTitle: "TVC, Viral Videos, MV",
    imageSrc: "/background2.png",
  },
  {
    id: "4.",
    title: "UX/UI Design",
    subTitle: "Application, Website, Game.",
    imageSrc: "/background2.png",
  },
];

const PortfolioCategory = () => {
  return (
    <Box>
      <PortfolioCategoryBanner />

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

      {data.map((el) => {
        return <CategoryPortfolioCard key={el?.id} {...el} />;
      })}

      <BottomLogo />
    </Box>
  );
};

export default PortfolioCategory;
