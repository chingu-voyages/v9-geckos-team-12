import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Button } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  }
});

const NavigationTop = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <Box p={2}>
            <Button variant='contained' color='secondary'>
              Shirts
            </Button>
          </Box>
          <Box p={2}>
            <Button variant='contained' color='secondary'>
              Jeans
            </Button>
          </Box>
          <Box p={2}>
            <Button variant='contained' color='secondary'>
              Shoes
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavigationTop;
