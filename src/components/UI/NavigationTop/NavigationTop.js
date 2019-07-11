import React, { useState } from "react";
import { Fragment } from "react";
import Box from "@material-ui/core/Box";
import ResponsiveDrawer from "../SideDrawer/SideDrawer";

import {
  AppBar,
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
  Divider
} from "@material-ui/core";
import { Link } from "react-router-dom";
import SignIn from "../../../containers/Form/SignIn/SignIn";
import SearchBar from "../SearchBar";
import { connect } from "react-redux";
import { selectCategory } from "../../../actions/productActions";

import MenuIcon from "@material-ui/icons/Menu";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ArrowBack from "@material-ui/icons/ArrowBack";

import { makeStyles, useTheme } from "@material-ui/core/styles";

const navigationStyles = makeStyles(theme => ({
  list: {
    display: "flex",
    [theme.breakpoints.down("xs")]: {
      display: "none"
    }
  },
  listItem: {
    marginRight: theme.spacing(6)
  },
  paper: {
    boxShadow: "none !important",
    [theme.breakpoints.down("xs")]: {
      display: "none"
    }
  },

  menuIcon: {
    display: "none",
    [theme.breakpoints.down("xs")]: {
      display: "inline-block"
    }
  },
  sideDrawer: {
    display: "none",
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      width: 450
    }
  },
  sideDrawerList: {
    display: "flex",
    flexDirection: "column"
  }
}));

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

  const sideDrawerToggle = () => {
    setToggleSideDrawer(!toggleSideDrawer);
  };

  const goBack = () => {
    setMenuOption(null);
  };

  const handleSelectCategory = category => {
    props.selectCategory(category);
  };

  const classes = navigationStyles();

  return (
    <div>
      <AppBar position="static" onMouseEnter={e => handleClose()}>
        <Toolbar>
          {/* SIDE DRAWER START */}
          <IconButton className={classes.menuIcon} onClick={sideDrawerToggle}>
            <MenuIcon />
          </IconButton>
          <div className={classes.sideDrawer}>
            <SwipeableDrawer open={toggleSideDrawer} onClose={sideDrawerToggle}>
              <List className={classes.sideDrawerList}>
                {menuOption === "activewear" ||
                menuOption === "footwear" ||
                menuOption === "clothing" ? (
                  <IconButton onClick={goBack}>
                    {" "}
                    <ArrowBack />{" "}
                  </IconButton>
                ) : null}{" "}
                {/* Make sure go back doesn't show unless we're inside of a menu */}
                {options[menuOption] ? (
                  options[menuOption].map((option, index) => (
                    <Link to="/clothing">
                      <ListItem
                        button
                        onClick={e =>
                          handleSelectCategory(
                            `${props.activewear ? "activewear " : null} ${
                              e.target.id
                            }`
                          )
                        }
                        id={option}
                        key={index}
                        style={{ minHeight: "3px" }}
                      >
                        <ListItemText style={{ pointerEvents: "none" }}>
                          {" "}
                          {option}
                        </ListItemText>
                      </ListItem>
                    </Link>
                  ))
                ) : (
                  <Fragment>
                    <Button
                      variant="button"
                      onClick={(e, menuOption) => handleClick(e, "clothing")}
                    >
                      Clothing
                    </Button>

                    <Button
                      variant="button"
                      onClick={(e, menuOption) => handleClick(e, "footwear")}
                    >
                      Footwear
                    </Button>

                    <Link to="/clothing">
                      <Button
                        variant="button"
                        onClick={(e, menuOption) =>
                          handleClick(e, "activewear")
                        }
                      >
                        Activewear
                      </Button>
                    </Link>
                  </Fragment>
                )}
              </List>
            </SwipeableDrawer>
          </div>
          {/* SIDE DRAWER END */}
          <List component="nav" className={classes.list}>
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
            <ListItem button>
              <Link to="/basket" replace>
                <ListItemText>
                  <Typography>
                    {" "}
                    Items in basket: {props.basket.length}
                    {/* implement displaying the value from the counter */}
                  </Typography>
                </ListItemText>
              </Link>
            </ListItem>
            <ListItem button>
              <Link to={"/login"}>
                <ListItemText>
                  <Typography>Login</Typography>
                </ListItemText>
              </Link>
            </ListItem>
            <ListItem button>
              <Link to={"/about-us"}>
                <ListItemText>
                  <Typography>About Us</Typography>
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
                    <Link to="/clothing">
                      <MenuItem
                        onClick={e => {
                          handleSelectCategory(
                            `${props.activewear ? "activewear " : null} ${
                              e.target.id
                            }`
                          );
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
