import { styled, Card as MuiCard, CardContent, Typography, Box } from "@mui/material";

import { Image } from "../../hoc";

const PortfolioCard = ({ title, banner }) => {
  return (
    <Card>
      <CardContent
        sx={{
          minHeight: 300,
        }}
      >
        <Title variant="title1" component="p">
          {title}
        </Title>
        <Client variant="body2" component="p">
          Client
        </Client>
        <Background className="background" />

        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            zIndex: 1,
          }}
        >
          <Image src={banner} alt="Trinix" width="100%" height="100%" objectFit="cover" />
        </Box>
      </CardContent>
    </Card>
  );
};

export default PortfolioCard;

const Card = styled(MuiCard)(({ theme }) => {
  return {
    position: "relative",
    backgroundColor: "#C4C4C4",
    borderRadius: "20px",
  };
});

const Background = styled("div")(({ theme }) => {
  return {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0,
    zIndex: 2,
    transition: "all 0.3s",
    "&:hover": {
      background: "linear-gradient(360deg, #000111 10.95%, rgba(0, 1, 17, 0) 100%)",
      opacity: 1,
    },
  };
});

const Title = styled(Typography)(({ theme }) => {
  return {
    position: "absolute",
    left: "7.69%",
    bottom: "20%",
    backgroundClip: "text",
    background: "linear-gradient(180deg, #FC5493 0%, #8303D8 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    zIndex: 3,
  };
});

const Client = styled(Typography)(({ theme }) => {
  return {
    position: "absolute",
    left: "7.69%",
    bottom: "14%",
    color: "#fff",
    zIndex: 3,
  };
});
