import React from "react";
import Box from "@material-ui/core/Box";
import ResponsiveDrawer from "../SideDrawer/SideDrawer";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import ClothesList from "../../ClothesList/ClothesList";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

{
  /* For first implementation of media queries with MakeStyles and BreakPoints*/
}
const Sstyles = makeStyles(theme => ({
  appBarMy: {
    [theme.breakpoints.down("xs")]: {
      display: "none"
    }
  }
}));

{
  /* For second implementation of media queries with useMediaQuery*/
}
const dontDisplayBigMenu = { display: "none" };
const emptyStyle = {};
/*function queryStyle() {
  
  return classes;
} */

//class NavigationTop extends React.Component {
function NavigationTop() {
  /*  handleClick = () => {
    return <ClothesList />;
  }; */

  {
    /* For first implementation of media queries with MakeStyles and BreakPoints*/
  }
  const classes = Sstyles();
  {
    /* where you need to implement style add className={classes.appBarMy} */
  }

  {
    /* For second implementation of media queries with useMediaQuery*/
  }
  const matches = useMediaQuery("(max-width:600px)");

  const finalClass = matches ? dontDisplayBigMenu : emptyStyle;
  {
    /* For second implementation , where you need to apply style use style= and finalClass*/
  }

  //  render() {
  return (
    <div>
      <ResponsiveDrawer />
      <AppBar position="static" style={finalClass}>
        <Toolbar>
          <Box p={2}>
            <Link to="/t-shirts" replace>
              <Button variant="contained" color="secondary">
                T-Shirts
              </Button>
            </Link>
          </Box>
          <Box p={2}>
            <Link to="/jeans" replace>
              <Button variant="contained" color="secondary">
                Jeans
              </Button>
            </Link>
          </Box>
          <Box p={2}>
            <Link to="/shoes" replace>
              <Button variant="contained" color="secondary">
                Shoes
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
  // }
}

export default NavigationTop;
