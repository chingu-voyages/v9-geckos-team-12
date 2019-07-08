import React from "react";

import Box from "@material-ui/core/Box";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import "../../css/myStyles.css";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles({
  root: {
    padding: 16,
    color: "red",
    "& p:nth-child(2)": {
      color: "green",
      "& span": {
        color: "blue"
      }
    },
    "& > div > div:first-child ": {
      display: "flex",
      justifyContent: "center"
    },
    "& > div > div:nth-child(2) ": {
      display: "flex",
      justifyContent: "center"
    },
    "&  > div > div:first-child > div ": {
      flexGrow: 1,

      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      height: "30rem"
    },

    "&  > div > div:nth-child(2) div ": {
      flexGrow: 1,

      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      height: "20rem"
    },
    "&  > div > div:first-child > div:first-child ": {
      flexGrow: 2,

      backgroundPosition: "center",
      height: "30rem"
    }
  }
});

export default function OurPeople() {
  const classes = useStyles();
  const dontDisplayFlexRow = { flexDirection: "column" };
  const emptyStyle = {};
  const matches = useMediaQuery("(max-width:900px)");

  const finalStyle = matches ? dontDisplayFlexRow : emptyStyle;
  return (
    <Paper className={classes.root}>
      <Box>
        <Box style={finalStyle}>
          <Box className='imageOne' position='relative'>
            <Box className='whiteBoxAbout'>
              <p>Meet Our Values</p>
              <p>
                SOUVENIR <br />
                FOR EVERY ORDER
              </p>
            </Box>
            <Box className='blackBox'>
              <p>MEET FOUNDERS:</p>
            </Box>
          </Box>
        </Box>
        <Box style={finalStyle}>
          <Box className='imageFour' position='relative'>
            <p className='findMike'>AND OF COURSE MIKE ;)</p>
            <p className='teamMike' />
          </Box>
          <Box className='imageFive' position='relative'>
            <p className='toRemember'>
              Remember <br /> We Are Your
            </p>
          </Box>
          <Box className='imageSix' position='relative'>
            <p className='weCreate'>
              Our People <br /> Do the best Clothes <br />
              For YOU
            </p>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
}
