import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  }
});

class NavigationTop extends React.Component {
  render() {
    return (
      <div className={useStyles.root}>
        <AppBar position='static'>
          <Toolbar>
            <Box p={2}>
              <Link to="/t-shirts" replace>
                <Button variant='contained' color='secondary'>
                  T-Shirts
                </Button>
              </Link>
            </Box>
            <Box p={2}>
              <Link  to="v9-geckos-team-12/jeans" replace>
                <Button variant='contained' color='secondary'>
                  Jeans
                </Button>
              </Link>
            </Box>
            <Box p={2}>
              <Link  to="v9-geckos-team-12/shoes" replace>
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

export default NavigationTop;
