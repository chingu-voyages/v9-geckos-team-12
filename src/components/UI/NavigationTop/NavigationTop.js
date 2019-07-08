import React from "react";
import { Fragment } from "react";
import Box from "@material-ui/core/Box";
import ResponsiveDrawer from "../SideDrawer/SideDrawer";
import hoc from "../../../hoc";
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
import {
  openMenuAction,
  openMenuItemAction,
  menuCloseAction,
  toggleSideDrawerAction,
  goBackAction
} from "../../../actions/navigationActions";

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
    marginTop: 50,
    minWidth: 250
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
    display: 'flex',
    flexDirection: 'column'
  }
}));

function NavigationTop(props) {
  let handleSelectCategory = category => {
    props.selectCategory(category);
  };

  const classes = navigationStyles();

  /*  <Box p={2}>
            <Link
              to='/t-shirts'
              replace
              value='t-shirts'
              onClick={() => handleSelectCategory("t-shirts")}
            >
              <Button variant='contained' color='secondary'>
                T-Shirts
              </Button>
            </Link>
          </Box> 
          
    */

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            className={classes.menuIcon}
            onClick={() => props.toggleSideDrawerAction(true)}
          >
            <MenuIcon />
          </IconButton>
          <div className={classes.sideDrawer}>
            <SwipeableDrawer
              open={props.sideDrawer}
              onClose={() => props.toggleSideDrawerAction(false)}
            >
              <List className={classes.sideDrawerList}>
                {props.activewear || props.shoes || props.clothing ? (
                  <IconButton onClick={() => props.goBackAction()}>
                    {" "}
                    <ArrowBack />{" "}
                  </IconButton>
                ) : null}{" "}
                {/* Make sure go back doesn't show unless we're inside of a menu */}
                {props.items ? (
                  props.items.map((option, index) => (
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
                      onClick={(e, clothingType) =>
                        props.openMenuAction(null, "clothing")
                      }
                    >
                      Clothing
                    </Button>

                    <Button
                      variant="button"
                      onClick={(e, clothingType) =>
                        props.openMenuAction(null, "footwear")
                      }
                    >
                      Footwear
                    </Button>

                    <Link to="/clothing">
                      <Button
                        variant="button"
                        onClick={(e, clothingType) =>
                          props.openMenuAction(null, "activewear")
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

          <List component="nav" className={classes.list}>
            <ListItem
              button
              className={classes.listItem}
              onMouseEnter={(e, clothingType) =>
                props.openMenuAction(e.target, "clothing")
              }
            >
              <ListItemText>Clothing</ListItemText>
            </ListItem>
            <ListItem
              button
              className={classes.listItem}
              onMouseEnter={(e, clothingType) =>
                props.openMenuAction(e.target, "footwear")
              }
            >
              <ListItemText>Footwear</ListItemText>
            </ListItem>
            <ListItem
              button
              className={classes.listItem}
              onMouseEnter={(e, clothingType) =>
                props.openMenuAction(e.target, "activewear")
              }
            >
              <ListItemText>Activewear</ListItemText>
            </ListItem>
            <ListItem>
              <SearchBar />
            </ListItem>
            <ListItem button>
            <Link to='/basket' replace>
              <ListItemText>
                  <Typography>  Items in basket: {props.basket.length}
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
          
          </List>
          {props.sideDrawer ? null : (
            <Menu
              BackdropComponent={hoc}
              open={props.clothing || props.shoes || props.activewear || false}
              anchorEl={
                props.anchorClothing ||
                props.anchorShoes ||
                props.anchorActivewear
              }
              elevation={0}
              className={classes.paper}
            >
              {props.items /* Using ternary operator to make sure items are available otherwise we get an error because items are initially null */
                ? props.items.map((option, index) => (
                    <Link to="/clothing">
                      {console.log(props)}
                      <MenuItem
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
  selectCategory,
  openMenuAction,
  openMenuItemAction,
  menuCloseAction,
  toggleSideDrawerAction,
  goBackAction
};

const mapStateToProps = state => ({
  basket: state.products.basket,
  menuOpen: state.navigation.menuOpen,
  menuItemOpen: state.navigation.menuItemOpen,
  anchorEl: state.navigation.anchorEl,
  anchorItemEl: state.navigation.anchorItemEl,
  clothingItems: state.navigation.clothingItems,
  shoesItems: state.navigation.shoesItems,
  activewearItems: state.navigation.activewearItems,
  clothing: state.navigation.clothing,
  shoes: state.navigation.shoes,
  activewear: state.navigation.activewear,
  items: state.navigation.items,
  anchorClothing: state.navigation.anchorClothing,
  anchorShoes: state.navigation.anchorShoes,
  anchorActivewear: state.navigation.anchorActivewear,
  sideDrawer: state.navigation.sideDrawer
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavigationTop);
