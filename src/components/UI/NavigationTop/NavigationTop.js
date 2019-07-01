import React from "react";
import Box from "@material-ui/core/Box";
import ResponsiveDrawer from "../SideDrawer/SideDrawer";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import ClothesList from "../../ClothesList/ClothesList";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Popover from "@material-ui/core/Popover";
import ArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import Divider from "@material-ui/core/Divider";
import { exportDefaultSpecifier } from "@babel/types";

// COMPONENT LIST ITEM LINK
/*
function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
} */

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

  // POP UP MENU SETTINGS
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const [anchorEl3, setAnchorEl3] = React.useState(null);

  function handleClick(event, two) {
    console.log("handle click o", event, two);
    if ("2" === two) {
      console.log("handle click 2");

      setAnchorEl2(event.currentTarget);
    } else if ("3" === two) {
      setAnchorEl3(event.currentTarget);
    } else {
      console.log("handle click something else");

      setAnchorEl(event.currentTarget);
    }
  }

  function handleClose(two) {
    if (2 === two) {
      setAnchorEl2(null);
    } else if (3 === two) {
      setAnchorEl3(null);
    } else {
      setAnchorEl(null);
    }
  }

  const open = Boolean(anchorEl);
  const open2 = Boolean(anchorEl2);
  const open3 = Boolean(anchorEl3);
  const id = open ? "simple-popover" : undefined;
  const id2 = open2 ? "simple-popover2" : undefined;
  const id3 = open3 ? "simple-popover3" : undefined;
  //END OF POPUP MENU SETTINGS

  return (
    <div>
      <ResponsiveDrawer />
      <AppBar position="static" style={finalClass}>
        <Toolbar>
          <Box p={2}>
            <Link>
              <Button
                variant="contained"
                color="secondary"
                onClick={event => handleClick(event, "4")}
              >
                T-Shirts
              </Button>
            </Link>
            <Popover
              key={id}
              open={open}
              anchorEl={anchorEl}
              onClose={() => handleClose("4")}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left"
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left"
              }}
            >
              <List component="nav" aria-label="Secondary mailbox folders">
                <ListItem button>
                  <ListItemText primary="Something 1" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Something 2" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Something 3" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Something 4" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Something 5" />
                </ListItem>
              </List>
            </Popover>
          </Box>

          <Box p={2}>
            <Link>
              <Button
                variant="contained"
                color="secondary"
                onClick={event => handleClick(event, "2")}
              >
                Jeans
              </Button>
            </Link>
            <Popover
              key={id2}
              open={open2}
              anchorEl={anchorEl2}
              onClose={() => handleClose(2)}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left"
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left"
              }}
            >
              <List component="nav" aria-label="Secondary mailbox folders">
                <ListItem button>
                  <ListItemText primary="Something 1" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Something 2" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Something 3" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Something 4" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Something 5" />
                </ListItem>
              </List>
            </Popover>
          </Box>

          <Box p={2}>
            <Link>
              <Button
                variant="contained"
                color="secondary"
                onClick={event => handleClick(event, "3")}
              >
                Shoes
              </Button>
            </Link>
            <Popover
              key={id3}
              open={open3}
              anchorEl={anchorEl3}
              onClose={() => handleClose(3)}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left"
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left"
              }}
            >
              <List component="nav" aria-label="Secondary mailbox folders">
                <ListItem button>
                  <ListItemText primary="Something 1" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Something 2" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Something 3" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Something 4" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Something 5" />
                </ListItem>
              </List>
            </Popover>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
  // }
}

export default NavigationTop;
