import React from "react";
import Box from "@material-ui/core/Box";
import "../../css/FirstHeader.css";

let InnerBox = ({ namehone, namesecond, linkmoredetails }) => {
  return (
    <Box className="whiteBox">
      <h1> {namehone}</h1>
      <h3>{namesecond}</h3>
      <h4>
        <a href="#">{linkmoredetails}</a>
      </h4>
    </Box>
  );
};

export default InnerBox;
