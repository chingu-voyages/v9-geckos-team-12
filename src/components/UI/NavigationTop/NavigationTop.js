import React from "react";
import Box from "@material-ui/core/Box";
import ResponsiveDrawer from "../SideDrawer/SideDrawer";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

// import ClothesList from "../../ClothesList/ClothesList";
import { connect } from "react-redux";
import { selectCategory } from "../../../actions/productActions";


//import ClothesList from "../../ClothesList/ClothesList";
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

//class NavigationTop extends React.Component {
function NavigationTop(props) {
  let handleSelectCategory = category => {
    props.selectCategory(category);
  };


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


  // render() {
  return (
    <div >
	<ResponsiveDrawer />
      <AppBar position="static" style={finalClass}>
        <Toolbar>
          <Box p={2}>
            <Link
              to="/t-shirts"
              replace
              value="t-shirts"
              onClick={() => handleSelectCategory("t-shirts")}
            >
              <Button variant="contained" color="secondary">
                T-Shirts
              </Button>
            </Link>
          </Box>
          <Box p={2}>
            <Link to="/jeans" replace>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => handleSelectCategory("jeans")}
              >
                Jeans
              </Button>
            </Link>
          </Box>
          <Box p={2}>
            <Link to="/shoes" replace>

              <Button
                variant="contained"
                color="secondary"
                onClick={() => handleSelectCategory("shoes")}
              >
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

const mapDispatchToProps = {
  selectCategory
};

export default connect(
  null,
  mapDispatchToProps
)(NavigationTop);
