import React, { useState } from "react";
import { Fragment } from "react";
import Box from "@material-ui/core/Box";
import ResponsiveDrawer from "../SideDrawer/SideDrawer";

import {
  AppBar,
  Badge,
  Toolbar,
  Typography,
  Button,
  Paper,
  Menu,
  MenuItem,
  List,
  ListItem,
  ListItemText,
  IconButton,
  SwipeableDrawer,
  Divider,
  Slide
} from "@material-ui/core";
import { Link } from "react-router-dom";
import SignIn from "../../../containers/Form/SignIn/SignIn";
import SearchBar from "../SearchBar";
import { connect } from "react-redux";
import { selectCategory } from "../../../actions/productActions";

import MenuIcon from "@material-ui/icons/Menu";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import HomeIcon from "@material-ui/icons/Home";
import ArrowBack from "@material-ui/icons/ArrowBack";

import { makeStyles, useTheme } from "@material-ui/core/styles";

const navigationStyles = makeStyles(theme => ({
  list: {
    display: "flex"
  },
  listItem: {
    marginRight: theme.spacing(8),
    [theme.breakpoints.down("lg")]: {
      marginRight: theme.spacing(3)
    },
    [theme.breakpoints.up('md')]: {
      marginRight: 0
    },
    [theme.breakpoints.down("md")]: {
      marginRight: 0
    },
    [theme.breakpoints.down("md")]: {
      display: "none"
    }
  },

  navToRight: {
    display: "flex",
    marginLeft: "auto"
  },

  menuIcon: {
    display: "none",
    [theme.breakpoints.down("md")]: {
      display: "inline-block"
    }
  },
  sideDrawer: {
    display: "none",
    [theme.breakpoints.down("md")]: {
      display: "flex"
    }
  },
  sideDrawerList: {
    display: "flex",
    flexDirection: "column",
    minWidth: "50vw"
  },

  menu: {
    [theme.breakpoints.down("md")]: {
      display: "none"
    }
  },
  a: {
    textDecoration: "none",
    color: "inherit"
  },

  menuItem: {
    minWidth: "150px",
    backgroundColor: theme.palette.secondary
  },
  label: {
    justifyContent: "flex-start"
  },

  root: {
    "&:hover": {
      backgroundColor: "transparent"
    }
  },

  homeButton: {
    
      "&:hover": {
        color: 'black'
      }
    
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
function NavigationTop(props) {
  const [toggleSideDrawer, setToggleSideDrawer] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(false);
  const [menuOption, setMenuOption] = React.useState(null);

  const options = {
    clothing: [
      `Hoodies & Sweatshits`,
      `Jackets & Coats`,
      "Jeans",
      "Shirts",
      "Shorts",
      "Loungewear",
      "Suits",
      "Socks",
      "Swimwear",
      "Vests",
      "Trousers",
      "Underwear"
    ],
    footwear: ["Loafers", "Heels", "Trainers", "Sperrys", "Plimsoll"],
    activewear: ["View All", "Footwear", "Shorts", "Swim", "Tops", "Tights"]
  };

  const handleClick = (e, menuOption) => {
    if (anchorEl !== e.currentTarget) {
      setAnchorEl(e.currentTarget);
      setMenuOption(menuOption);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const sideDrawerToggle = toggle => {
    setToggleSideDrawer(toggle);
    setAnchorEl(null);
  };

  const goBack = () => {
    setMenuOption(null);
  };

  const handleSelectCategory = category => {
    sideDrawerToggle(false);
    props.selectCategory(category);
  };

  const classes = navigationStyles();

  return (
    <div>
      <AppBar
        position="static"
        onMouseEnter={e => handleClose()}
        color="primary"
      >
        <Toolbar>
          {/* SIDE DRAWER START */}
          <IconButton
            className={classes.menuIcon}
            onClick={() => sideDrawerToggle(true)}
          >
            <MenuIcon />
          </IconButton>
          <div className={classes.sideDrawer}>
            <SwipeableDrawer
              open={toggleSideDrawer}
              onClose={() => sideDrawerToggle(false)}
              onOpen={() => null}
            >
              <List className={classes.sideDrawerList}>
                {menuOption === "activewear" ||
                menuOption === "footwear" ||
                menuOption === "clothing" ? (
                  <IconButton
                    onClick={goBack}
                    classes={{ label: classes.label, root: classes.root }}
                    disableRipple={true}
                    disableFocusRipple={true}
                  >
                    {" "}
                    <ArrowBack />{" "}
                  </IconButton>
                ) : null}{" "}
                {/* Make sure go back doesn't show unless we're inside of a menu */}
                {options[menuOption] ? (
                  options[menuOption].map((option, index) => (
                    <Slide
                      in={menuOption === null ? false : true}
                      key={`${option}${index}`}
                      direction="right"
                      mountOnEnter
                      unmountOnExit
                      timeout={260 * index}
                    >
                      <Link to="/clothing" className={classes.a}>
                        <ListItem
                          button
                          onClick={e => handleSelectCategory(e.target.id)}
                          id={option}
                          key={index}
                          style={{ minHeight: "3px" }}
                        >
                          <ListItemText style={{ pointerEvents: "none" }}>
                            {" "}
                            {option}
                          </ListItemText>
                        </ListItem>
                        <Divider />
                      </Link>
                    </Slide>
                  ))
                ) : (
                  <Fragment>
                    <Link to="/" className={classes.a} onClick={() => sideDrawerToggle(false)} >
                    <IconButton>
                      <HomeIcon />
                    </IconButton>
                    </Link>
                    <Button
                      onClick={(e, menuOption) => handleClick(e, "clothing")}
                    >
                      Clothing
                    </Button>

                    <Divider />
                    <Button
                      onClick={(e, menuOption) => handleClick(e, "footwear")}
                    >
                      Footwear
                    </Button>
                    <Divider />

                    <Button
                      onClick={(e, menuOption) => handleClick(e, "activewear")}
                    >
                      Activewear
                    </Button>
                  </Fragment>
                )}
              </List>
            </SwipeableDrawer>
          </div>
          {/* SIDE DRAWER END */}
          <List component="nav" className={classes.list}>
            <ListItem   className={classes.listItem} >
              <ListItemText>
              <Link to="/" replace className={classes.a}>
                <IconButton color='inherit' size='small' className={classes.homeButton}>
               <HomeIcon /> Home 
                </IconButton>
                </Link>
              
              </ListItemText>
            </ListItem>
            <ListItem
              autoFocus={Boolean(anchorEl)}
              button
              className={classes.listItem}
              onClick={(e, menuOption) => handleClick(e, "clothing")}
              onMouseOver={(e, menuOption) => handleClick(e, "clothing")}
            >
              <ListItemText>Clothing</ListItemText>
            </ListItem>
            <ListItem
              autoFocus={Boolean(anchorEl)}
              button
              className={classes.listItem}
              onClick={(e, menuOption) => handleClick(e, "footwear")}
              onMouseOver={(e, menuOption) => handleClick(e, "footwear")}
            >
              <ListItemText>Footwear</ListItemText>
            </ListItem>
            <ListItem
              button
              className={classes.listItem}
              autoFocus={Boolean(anchorEl)}
              /*onMouseEnter={(e, clothingType) =>
                props.openMenuAction(e.target, "activewear")
              }
              */
              onClick={(e, menuOption) => handleClick(e, "activewear")}
              onMouseOver={(e, menuOption) => handleClick(e, "activewear")}
            >
              <ListItemText>Activewear</ListItemText>
            </ListItem>
            <ListItem>
              <SearchBar />
            </ListItem>
          </List>
          <List className={classes.list} style={{ marginLeft: "auto" }}>
            {" "}
            {/* Using margin auto left inline to make sure the login button and cart stay on right*/}
            <ListItem button>
              <Link to="/basket" replace className={classes.a}>
                <IconButton aria-label="Show 4 new mails" color="inherit">
                  <Badge badgeContent={props.basket.length} color="secondary">
                    <ShoppingCart />
                  </Badge>
                </IconButton>
              </Link>
            </ListItem>
            <ListItem button>
              <Link to={"/login"} className={classes.a}>
                <ListItemText>
                  <Typography>Login</Typography>
                </ListItemText>
              </Link>
            </ListItem>
          </List>
          {toggleSideDrawer || anchorEl === false ? null : (
            <Menu
              autoFocus={Boolean(anchorEl)}
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              MenuListProps={{ onMouseLeave: handleClose }}
              elevation={0}
              className={classes.paper}
            >
              {options[
                menuOption
              ] /* Using ternary operator to make sure items are available otherwise we get an error because items are initially null */
                ? options[menuOption].map((option, index) => (
                    <Link
                      to="/clothing"
                      className={classes.a}
                      key={`${option}${index}`}
                    >
                      <MenuItem
                        className={classes.menuItem}
                        onClick={e => {
                          handleSelectCategory(e.target.id);
                          handleClose();
                        }}
                        id={option}
                        key={index}
                        style={{ minHeight: "3px" }}
                      >
                        <Typography
                          variant="caption"
                          style={{ pointerEvents: "none" }}
                        >
                          {" "}
                          {option}
                        </Typography>
                      </MenuItem>
                    </Link>
                  ))
                : null}
            </Menu>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
  // }
}

const mapDispatchToProps = {
  selectCategory
};

const mapStateToProps = state => ({
  basket: state.products.basket
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavigationTop);
