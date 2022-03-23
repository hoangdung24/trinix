import { Grid } from "@mui/material";
import MemberCardItem from "./MemberCardItem";

const MemberList = ({ data }) => {
  return (
    <Grid container spacing={2}>
      {data.map((el, i) => {
        return (
          <Grid key={i} item xs={12} md={6}>
            <MemberCardItem {...el.value} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default MemberList;
