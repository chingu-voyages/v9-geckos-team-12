import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
// import ClothesList from "../../ClothesList/ClothesList";
import { connect } from "react-redux";
import { selectCategory } from "../../../actions/productActions";
const useStyles = makeStyles({
  root: {
    flexGrow: 1
  }
});

//class NavigationTop extends React.Component {
function NavigationTop(props) {
  let handleSelectCategory = category => {
    props.selectCategory(category);
  };

  // render() {
  return (
    <div className={useStyles.root}>
      <AppBar position="static">
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
