import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { selectCategory } from "../../../actions/productActions";
const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
      display: "none"
    }
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      display: "none"
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    height: "2.5rem"
  },
  disMain: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  }
}));

function ResponsiveDrawer(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }

  let handleSelectCategory = category => {
    props.selectCategory(category);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <Link to="/t-shirts" replace>
          <ListItem
            button
            key="Inbox"
            onClick={() => handleSelectCategory("t-shirts")}
          >
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={"T-Shirts"} />
          </ListItem>
        </Link>
        <Link to="/jeans" replace>
          <ListItem
            button
            key="Inbox"
            onClick={() => handleSelectCategory("jeans")}
          >
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={"Jeans"} />
          </ListItem>
        </Link>
        <Link to="/shoes" replace>
          <ListItem
            button
            key="Inbox"
            onClick={() => handleSelectCategory("shoes")}
          >
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={"Shoes"} />
          </ListItem>
        </Link>
      </List>
      <Divider />
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Menu
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="Mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.disMain}>
        <p className={classes.content} />
      </main>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  // Injected by the documentation to work in an iframe.
  // You won't need it on your project.
  container: PropTypes.object
};

const mapDispatchToProps = {
  selectCategory
};

export default connect(
  null,
  mapDispatchToProps
)(ResponsiveDrawer);
