import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { styled } from "@material-ui/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import storeSale from "../../img/store-sales.jpg";

import storeSaleJacket from "../../img/jackets.jpg";
import storeSaleTshirts from "../../img/t-shirt.jpg";
import storeSaleJeans from "../../img/jeans.jpg";
import storeSaleShoes from "../../img/dumbbells.jpg";

// USE STYLES TO GRAB IMAGES FOR SALES
//> div:nth-child(2) > div:nth-child(2) div:first-child
const useStyles = makeStyles({
  root: {
    "&  #imageOne": {
      backgroundColor: "blue !important",
      fontSize: "3rem",
      color: "white",
      backgroundImage: `url(${storeSaleJacket})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      flexGrow: "1",
      position: "relative"
    },
    "&  #imageTwo": {
      backgroundImage: `url(${storeSaleTshirts})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      flexGrow: "1",
      position: "relative"
    },
    "&  #imageThree": {
      backgroundImage: `url(${storeSaleJeans})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      flexGrow: "1",
      position: "relative"
    },
    "&  #imageFour": {
      backgroundImage: `url(${storeSaleShoes})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      flexGrow: "1",
      position: "relative"
    }
  }
});

// END OF USE STYLES TO GRAB IMAGES FOR SALES

const MyBoxSales = styled(Box)({
  display: "flex",
  fontWeight: "bold",
  flexDirection: "row",
  flexWrap: "nowrap",
  justifyContent: "space-between"
});

const SalesSmallBox = styled(Box)({
  height: "16rem",
  backgroundColor: "green",
  margin: "1rem"
});

const ShortSalesBanner = styled(Box)({
  height: "220px",
  backgroundColor: "blue",
  position: "relative",
  marginTop: "3rem",
  backgroundImage: `url(${storeSale})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center"
});

const ShortSalesBannerInner = styled(Box)({
  padding: "2rem",
  backgroundColor: "white",
  position: "absolute",
  top: "4rem",
  left: "14rem",
  color: "red",
  transition: "500ms ease-out"
});

const TypoSales = styled(Typography)({
  fontSize: "2.5rem",
  fontWeight: "300",
  fontStyle: "Italic",
  transform: "rotateZ(-10deg)"
});

// Banner with today sales

function SalesBanner() {
  const smallerText = { fontSize: "1.5rem" };
  const emptyStyle = {};
  const matches = useMediaQuery("(max-width:615px)");
  // const finalStyle = matches ? smallerText : emptyStyle;
  let finalStyle;
  let moveBox;
  if (matches) {
    finalStyle = smallerText;
    moveBox = { left: "2rem" };
  } else {
    finalStyle = emptyStyle;
    moveBox = emptyStyle;
  }
  return (
    <ShortSalesBanner>
      <ShortSalesBannerInner style={moveBox}>
        <TypoSales style={finalStyle}>Today Sales -50%</TypoSales>{" "}
      </ShortSalesBannerInner>
    </ShortSalesBanner>
  );
}

//  Text to check it occasion

const BoxOccasion = styled(Box)({
  position: "absolute",
  color: "Yellow",
  backgroundColor: "gray",
  transform: "rotate(-30deg)",
  fontWeight: "bold",
  padding: "0.5rem",
  fontSize: "1.5rem",
  top: "50%",
  left: "1rem"
});

const BoxTextOccasion = styled(Box)({
  fontWeight: "bold",
  fontSize: "2rem"
});

function CheckOcasion() {
  return (
    <BoxOccasion>
      <BoxTextOccasion>
        <Link color="inherit">Check it Now</Link>
      </BoxTextOccasion>
    </BoxOccasion>
  );
}

//FOUR BOXES BELOW

export default function SalesClothes() {
  const classes = useStyles();
  const smallerText = {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  };
  const emptyStyle = {};
  const matches = useMediaQuery("(max-width:950px)");
  //const finalStyle = matches ? smallerText : emptyStyle;
  let finalStyle;
  let maxLen;

  if (matches) {
    finalStyle = smallerText;
    maxLen = { alignSelf: "normal" };
  } else {
    finalStyle = emptyStyle;
    maxLen = emptyStyle;
  }
  return (
    <Box className={classes.root}>
      <SalesBanner />
      <MyBoxSales style={finalStyle}>
        <SalesSmallBox id="imageOne" style={maxLen}>
          <CheckOcasion />
        </SalesSmallBox>
        <SalesSmallBox id="imageTwo" style={maxLen}>
          <CheckOcasion />
        </SalesSmallBox>
        <SalesSmallBox id="imageThree" style={maxLen}>
          <CheckOcasion />
        </SalesSmallBox>
        <SalesSmallBox id="imageFour" style={maxLen}>
          <CheckOcasion />
        </SalesSmallBox>
      </MyBoxSales>
    </Box>
  );
}
