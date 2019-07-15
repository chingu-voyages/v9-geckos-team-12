import React from "react";
import PopularBrands from "./PopularBrands";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import YellowSuit from "../assets/yellowsuit.jpg";
import BrownJacket from "../assets/brownjacket.jpg";
import { typography } from "@material-ui/system";
import { connect } from "react-redux";
import { selectCategory } from '../actions/productActions'
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
    height: "75%",
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
  },
  a: {
    textDecoration: 'none',
    color: 'inherit'
  }
}));

const LandingPage = (props) => {
  const classes = useStyles();
  const handleSelectCategory = category => {
    props.selectCategory(category);
     
  };
  
  return (
    <>
      <div style={{ textAlign: "center", marginTop: 20 }}>
        <Typography variant='h5' color='textPrimary'>Welcome to Chingu Clothes Shop</Typography>
      </div>
      <div className={classes.twoPics}>
        <div className={classes.picWithInfo}>
          <img src={YellowSuit} alt='yellowsuit' className={classes.img} />

          <div className={classes.textSection}>
            <Typography variant='body1'>Trendy tracksuits</Typography>
            <Link to='/clothing' className={classes.a}>
            <Button
              variant='outlined'
              color='inherit'
              onClick={() => handleSelectCategory('tracksuit')}
              className={classes.shopNowButton}
            >
              SHOP NOW
            </Button>
            </Link>
          </div>
        </div>
        <div className={classes.picWithInfo}>
          <img src={BrownJacket} alt='brownjacket' className={classes.img} />
          <div className={classes.textSection}>
            <Typography variant='body1'>Brand new leather jackets</Typography>
            <Link to='/clothing' className={classes.a}>
            <Button
              variant='outlined'
              color='inherit'
              onClick={() => handleSelectCategory('Leather jacket')}
              className={classes.shopNowButton}
            >
              SHOP NOW
            </Button>
            </Link>
          </div>
        </div>
      </div>
      <div style={{ marginTop: "50px" }}>
        <PopularBrands />
      </div>
    </>
  );
};

const mapDispatchToProps = {
  selectCategory
};

const mapStateToProps = state => ({
  basket: state.products.basket
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingPage);

