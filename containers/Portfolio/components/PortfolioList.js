import { Grid, Box, Fade } from "@mui/material";
import { GridContainer, PortfolioCard, LoadingIcon } from "../../../components";

const PortfolioList = ({ loading, data, onClick }) => {
  return (
    <GridContainer>
      <Grid container spacing={3}>
        {loading ? (
          <LoadingIcon />
        ) : (
          data?.items?.map((el) => {
            return (
              <Grid key={el.id} item xs={12} md={6}>
                <Fade
                  in
                  timeout={{
                    enter: 1000,
                  }}
                >
                  <Box
                    sx={{
                      "&:hover": {
                        cursor: "pointer",
                      },
                    }}
                    onClick={onClick(el)}
                  >
                    <PortfolioCard {...el} />
                  </Box>
                </Fade>
              </Grid>
            );
          })
        )}
      </Grid>
    </GridContainer>
  );
};

export default PortfolioList;
