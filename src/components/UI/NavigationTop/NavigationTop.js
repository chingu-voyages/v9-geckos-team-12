import React from "react";
import Box from "@material-ui/core/Box";
import ResponsiveDrawer from "../SideDrawer/SideDrawer";
import { AppBar, Toolbar, Button,Menu,MenuItem,List,ListItem,ListItemText } from "@material-ui/core";
import { Link } from "react-router-dom";
import SignIn from '../../../containers/Form/SignIn/SignIn'

import { connect } from "react-redux";
import { selectCategory } from "../../../actions/productActions";

import { makeStyles, useTheme } from "@material-ui/core/styles";

const navigationStyles = makeStyles(theme => ({
  list: {
    display: 'flex',

  }
}))

function NavigationTop(props) {
  let handleSelectCategory = category => {
    props.selectCategory(category);
  };

  const classes = navigationStyles()

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
      <AppBar position='static' >
        <Toolbar>
          <List component='nav' className={classes.list}>
            <ListItem button>
              <ListItemText>
                    Jeans
              </ListItemText>
            </ListItem>
            <ListItem button>
              <ListItemText>
                Shirts
              </ListItemText>
            </ListItem>
            <ListItem button>
              <ListItemText>
                Shoes
              </ListItemText>
            </ListItem>
          </List>
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
