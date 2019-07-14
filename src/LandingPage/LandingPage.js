import React from "react";
import PopularBrands from "./PopularBrands";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box } from "@material-ui/core";

import YellowSuit from "../assets/yellowsuit.jpg";
import BrownJacket from "../assets/brownjacket.jpg";
const useStyles = makeStyles(theme => ({
  twoPics: {
    display: "flex",
    justifyContent: "space-around",
    alignContent: "stretch",
    margin: "25px 0px 50px 0px",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    }
  },
  img: {
    width: "30vw",
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
      display: "flex"
    },
    boxShadow: "0px 0px 36px 6px rgba(0,0,0,0.24)"
  },
  textSection: {
    textAlign: "center",
    marginTop: "20px"
  },
  picWithInfo: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around"
  }
}));

const LandingPage = () => {
  const classes = useStyles();
  return (
    <>
      <div>
        <div className={classes.twoPics}>
          <div className={classes.picWithInfo}>
            <img src={YellowSuit} alt='yellowsuit' className={classes.img} />
            <Box className={classes.textSection}>
              <Typography variant='body1'>Trendy tracksuits</Typography>
            </Box>
          </div>
          <div className={classes.picWithInfo}>
            <img src={BrownJacket} alt='brownjacket' className={classes.img} />
            <Box className={classes.textSection}>
              <Typography variant='body1'>Brand new leather jackets</Typography>
            </Box>
          </div>
        </div>

        <PopularBrands />
      </div>
    </>
  );
};

export default LandingPage;
