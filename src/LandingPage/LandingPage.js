import React from "react";
import PopularBrands from "./PopularBrands";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box, Button } from "@material-ui/core";

import YellowSuit from "../assets/yellowsuit.jpg";
import BrownJacket from "../assets/brownjacket.jpg";
import { typography } from "@material-ui/system";
const useStyles = makeStyles(theme => ({
  twoPics: {
    display: "flex",
    justify: "center",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
    margin: "20px auto 5px 5px",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    }
  },
  img: {
    width: "25vw",
    height: "100%",
    margin: "0 auto",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }
  },
  textSection: {
    textAlign: "center",
    marginTop: "20px",
    marginBottm: "40px"
  },
  shopNowButton: {
    borderRadius: 0,
    marginTop: 20,
    marginBottom: 50,
    border: "2px solid black"
  }
}));

const LandingPage = () => {
  const classes = useStyles();
  return (
    <>
      <div style={{ textAlign: "center", marginTop: 20 }}>
        <Typography variant='h5'>Welcome to Chingu Clothes Shop</Typography>
      </div>
      <div className={classes.twoPics}>
        <div className={classes.picWithInfo}>
          <img src={YellowSuit} alt='yellowsuit' className={classes.img} />

          <div className={classes.textSection}>
            <Typography variant='body1'>Trendy tracksuits</Typography>
            <Button
              variant='outlined'
              color='inherit'
              onClick={() => alert("shop")}
              className={classes.shopNowButton}
            >
              SHOP NOW
            </Button>
          </div>
        </div>
        <div className={classes.picWithInfo}>
          <img src={BrownJacket} alt='brownjacket' className={classes.img} />
          <div className={classes.textSection}>
            <Typography variant='body1'>Brand new leather jackets</Typography>
            <Button
              variant='outlined'
              color='inherit'
              onClick={() => alert("shop")}
              className={classes.shopNowButton}
            >
              SHOP NOW
            </Button>
          </div>
        </div>
      </div>
      <div style={{ marginTop: "50px" }}>
        <PopularBrands />
      </div>
    </>
  );
};

export default LandingPage;
