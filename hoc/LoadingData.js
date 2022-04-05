import { LoadingIcon, FailToFetchData, GridContainer } from "../components";

const LoadingData = ({ data, error, children, ...props }) => {
  if (error) {
    return (
      <GridContainer>
        <FailToFetchData />
      </GridContainer>
    );
  }

  if (data === undefined) {
    return (
      <GridContainer>
        <LoadingIcon />
      </GridContainer>
    );
  }

  return children({ data, ...props });
};

export default LoadingData;
