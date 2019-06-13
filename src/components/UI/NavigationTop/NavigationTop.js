import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Button } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  }
});

class NavigationTop extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentTerm: "t-shirts" };
  }

  render() {
    return (
      <div className={useStyles.root}>
        <AppBar position='static'>
          <Toolbar>
            <Box p={2}>
              <Button
                variant='contained'
                color='secondary'
                onClick={() => this.setState({ currentTerm: "t-shirts" })}
              >
                T-Shirts
              </Button>
            </Box>
            <Box p={2}>
              <Button
                variant='contained'
                color='secondary'
                onClick={() => this.setState({ currentTerm: "jeans" })}
              >
                Jeans
              </Button>
            </Box>
            <Box p={2}>
              <Button
                variant='contained'
                color='secondary'
                onClick={() => this.setState({ currentTerm: "shoes" })}
              >
                Shoes
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default NavigationTop;
