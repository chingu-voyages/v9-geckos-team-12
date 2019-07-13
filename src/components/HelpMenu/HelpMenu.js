import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { styled } from "@material-ui/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const MyMainBox = styled(Box)({
  backgroundColor: "#eceaeb",
  marginBottom: "2rem",
  paddingBottom: "2rem",
  display: "flex",
  justifyContent: "center",
  "& > div": {
    flexGrow: 1,
    textAlign: "center",
    padding: "0.5rem"
  },
  "& > div:first-child": {
    display: "flex",
    justifyContent: "space-evenly"
  },
  "& > div:first-child > div": {
    padding: "1rem",
    borderRight: "1px solid #ccc",
    flexGrow: 1
  },
  "& > div:nth-child(2)": {
    borderRight: "1px solid #ccc"
  },
  "& > div p": {
    marginBottom: "1rem"
  }
});

const MyHelpBox = styled(Box)({
  backgroundColor: "#eceaeb",
  paddingLeft: "3rem",
  paddingTop: "2rem",
  paddingBottom: "1rem"
});

export default function HelpMenu() {
  const dontDisplayFlexRow = {
    flexDirection: "column"
  };

  const removeBorder = {
    border: "none"
  };
  const emptyStyle = {};
  const matches = useMediaQuery("(max-width:900px)");

  const finalStyle = matches ? dontDisplayFlexRow : emptyStyle;
  const finalStyle2 = matches ? removeBorder : emptyStyle;

  return (
    <Box>
      <MyHelpBox>
        <Typography>Help :</Typography>
      </MyHelpBox>
      <MyMainBox style={finalStyle}>
        <Box>
          <Box style={finalStyle2}>
            <Typography color="primary">>Main Topics</Typography>
            <Typography>Delivery Time</Typography>
            <Typography>Reclamation</Typography>
          </Box>
          <Box style={finalStyle2}>
            <Typography color="primary">>Payments Methods</Typography>
            <Typography>Sizes</Typography>
            <Typography>Subscribe To Us Newsletter</Typography>
          </Box>
        </Box>
        <Box>
          <Box style={finalStyle2}>
            <Typography color="primary">>Buy Our Card</Typography>
            <Typography>Realization of Our Coupon</Typography>
            <Typography>Cards for your Friends</Typography>
          </Box>
        </Box>
        <Box>
          <Box>
            <Typography color="primary">>Other Important Links</Typography>
            <Typography>Career</Typography>
            <Typography>Press</Typography>
            <Typography>Marketing Service</Typography>
          </Box>
        </Box>
      </MyMainBox>
    </Box>
  );
}
