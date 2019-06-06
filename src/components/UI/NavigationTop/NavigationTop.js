import React from "react";
import Box from '@material-ui/core/Box';
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  }
});

const NavigationTop = () => {
    const classes = useStyles();

  return (
    <div className={classes.root}>
      
      <AppBar position="static">
        <Toolbar>
        <Box p={2}>
          <Typography variant="button" color="inherit"   style={{ borderRight: '0.1em solid ', paddingRight: '33px' }}>
            Shirts 
          </Typography>
          </Box>
          <Box p={2}>
          <Typography variant="button" color="inherit" style={{ borderRight: '0.1em solid ', paddingRight: '33px' }}>
            Jeans 
          </Typography>
          </Box>
          <Box p={2}>
          <Typography variant="button" color="inherit">
            Shoes
          </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    
    </div>
  );
}

export default NavigationTop
