import React from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import "../../css/FirstHeader.css";
import InnerBox from "./InnerBox";

let SecondHeader = props => {
  return (
    <Box className="forAbsolute">
      <Box className="pictureClass" />
      <InnerBox
        namehone="HOT DROPS"
        namesecond="Shoes for Hot Summer"
        linkmoredetails="Click here for more details"
      />
    </Box>
  );
};

export default SecondHeader;
