import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import ClothesList from "../../ClothesList/ClothesList";
import { connect } from "react-redux";
// import { alertjeans } from "../../../actions";
const useStyles = makeStyles({
  root: {
    flexGrow: 1
  }
});

class NavigationTop extends React.Component {
  handleClick = () => {
    return <ClothesList />;
  };

  alertJeans = () => {
    this.props.alertjeans();
  };

  render() {
    return (
      <div className={useStyles.root}>
        <AppBar position='static'>
          <Toolbar>
            <Box p={2}>
              <Link to='/t-shirts' replace onClick={this.alertJeans}>
                <Button variant='contained' color='secondary'>
                  T-Shirts
                </Button>
              </Link>
            </Box>
            <Box p={2}>
              <Link to='/jeans' replace>
                <Button variant='contained' color='secondary'>
                  Jeans
                </Button>
              </Link>
            </Box>
            <Box p={2}>
              <Link to='/shoes' replace>
                <Button variant='contained' color='secondary'>
                  Shoes
                </Button>
              </Link>
            </Box>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     jeans: state.jeans
//   };
// };

// const mapDispatchToProps = {
//   alertjeans
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(NavigationTop);
export default NavigationTop;
