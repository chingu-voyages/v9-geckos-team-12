import React from "react";
import WhiteCollectEmails from "./whiteCollectEmails";
import Box from "@material-ui/core/Box";
import "../../css/FirstHeader.css";

let BigCollectEmails = props => {
  return (
    <Box className="forAbsolute">
      <Box className="bigCollectEmails" />
      <Box>
        <WhiteCollectEmails />
      </Box>
    </Box>
  );
};

export default BigCollectEmails;
