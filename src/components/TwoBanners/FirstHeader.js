import React from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import "../../css/FirstHeader.css";
import InnerBox from "../../components/TwoBanners/InnerBox";

let FirstHeader = props => {
  return (
    <Box className="forAbsolute">
      <Box className="pictureClass secondClass" />
      <InnerBox
        namehone="NEWS !!!!"
        namesecond="Check Now !!!"
        linkmoredetails="More Details"
      />
    </Box>
  );
};

export default FirstHeader;
