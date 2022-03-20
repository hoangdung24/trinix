import { Grid } from "@mui/material";
import MemberCardItem from "./MemberCardItem";

const MemberList = () => {
  return (
    <Grid container spacing={2}>
      {[...new Array(10)].map((el, i) => {
        return (
          <Grid key={i} item xs={6}>
            <MemberCardItem />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default MemberList;
