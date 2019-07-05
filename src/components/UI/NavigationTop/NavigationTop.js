import React from "react";
import Box from "@material-ui/core/Box";
import ResponsiveDrawer from "../SideDrawer/SideDrawer";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";
import { Link } from "react-router-dom";
import SignIn from "../../../containers/Form/SignIn/SignIn";

import { connect } from "react-redux";
import { selectCategory } from "../../../actions/productActions";
import {
  openMenuAction,
  openMenuItemAction,
  menuCloseAction
} from "../../../actions/navigationActions";

import { makeStyles, useTheme } from "@material-ui/core/styles";

const navigationStyles = makeStyles(theme => ({
  list: {
    display: "flex"
  },
  paper: {
    boxShadow: "none !important",
    marginTop: 50,
    minWidth: 250
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
          <List component="nav" className={classes.list}>
            <ListItem button>
              <ListItemText
                onClick={(e, clothingType) =>
                  props.openMenuAction(e.target, "clothing")
                }
              >
                Clothing
              </ListItemText>
            </ListItem>

            <ListItem
              button
              onClick={(e, clothingType) =>
                props.openMenuAction(e.target, "shoes")
              }
            >
              <ListItemText>Shoes</ListItemText>
            </ListItem>
            <ListItem
              button
              onClick={(e, clothingType) =>
                props.openMenuAction(e.target, "activewear")
              }
            >
              <ListItemText>Activewear</ListItemText>
            </ListItem>
          </List>
          <Menu
            BackdropComponent='none'
            open={props.clothing || props.shoes || props.activewear || false}
            anchorEl={props.anchorClothing || props.anchorShoes || props.anchorActivewear}
            elevation={0}
            className={classes.paper}
          >
            {props.items /* Using ternary operator to make sure items are available otherwise we get an error because items are initially null */
              ? props.items.map((option, index) => (
                  <MenuItem
                    key={index}
                    onClick={e => props.openMenuItemAction(e.currentTarget)}
                    style={{ minHeight: "3px" }}
                  >
                    <Typography variant="caption"> {option}</Typography>
                  </MenuItem>
                ))
              : null}
          </Menu>
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
  menuCloseAction
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
  anchorClothing:state.navigation.anchorClothing,
  anchorShoes:state.navigation.anchorShoes,
  anchorActivewear:state.navigation.anchorActivewear,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavigationTop);
