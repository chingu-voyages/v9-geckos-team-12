import React from 'react'
import Box from '@material-ui/core/Box';
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, useScrollTrigger } from "@material-ui/core";
import Slide from '@material-ui/core/Slide';
import {Link} from 'react-router-dom'

const useStyles = makeStyles({
    root: {
      flexGrow: 1
    },
    appBar: {
        top: 'auto',
        bottom: 0,
      },
      a: {
        textDecoration: "none",
        color: "inherit"
      },
  });

const NavigationBottom = () => {

    const trigger = useScrollTrigger({target: window})

    const classes = useStyles();
    return (
        <div>
        
             <AppBar position="fixed" color="primary" className={classes.appBar}>
                 <Toolbar style={{alignSelf: 'center'}}>
                    <Box p={2}>
                        <Typography variant="button" color="inherit"   style={{  paddingRight: '33px' }}>
                            Catalog
                        </Typography>
                        </Box>
                       
                            
                        <Typography variant="button" color="inherit" style={{  paddingRight: '33px' }}>
                              Careers
                        </Typography>
                    
                       
                         
                        <Box p={2}>
                        <Typography variant="button" color="inherit">
                             Privacy
                        </Typography>
                        </Box>
                    </Toolbar>
             </AppBar>
                
        </div>
    )
}

export default NavigationBottom
