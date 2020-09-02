import React from "react";
import { Typography } from "@material-ui/core";
import PublicMap from "./map-template";

const Home = (props: any) => {
  return (
    <React.Fragment>
      <div>
        <Typography variant="h2">Home</Typography>
      </div>
      <PublicMap />
    </React.Fragment>
  );
};

export default Home;
