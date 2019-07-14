import React from "react";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { styled } from "@material-ui/styles";
import PeopleProject from "./PeopleProject";
//list item
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import StarIcon from "@material-ui/icons/Star";
import { makeStyles } from "@material-ui/core/styles";
// End of list item

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",

    backgroundColor: theme.palette.background.paper
  }
}));

const MyTypoGraphy1 = styled(Typography)({
  border: "1px solid red",
  borderRadius: 3,
  fontWeight: "bold",
  padding: "1rem",
  marginBottom: "1rem",
  marginTop: "1rem",
  maxWidth: "50rem;",
  textAlign: "center",
  margin: "auto"
});

const MyTypoGraphyTitle = styled(Typography)({
  fontFamily: "Roboto",
  fontWeight: "200",
  textAlign: "center",
  fontSize: "2.5rem",
  padding: "1rem",
  marginTop: "3rem",
  marginBottom: "3rem",
  color: "#80847d",
  backgroundColor: "#fefad7"
});

const MyMainPaper = styled(Paper)({
  paddingBottom: "1rem",
  marginBottom: "4rem"
});

const HeaderAboutUs = () => {
  const classes = useStyles();
  return (
    <MyMainPaper>
      <Box>
        <MyTypoGraphyTitle>Who We Are </MyTypoGraphyTitle>
        <MyTypoGraphy1>
          <Typography variant="h4"> Team 12 - Chingu Voyage 9 </Typography>
          <hr />
          <br />
          <Typography variant="h5" style={{ textAlign: "left" }} />
          We are just a small team of 3 new developers, gathered together to
          build some great project to show off our skills !!!. We decided to
          choose e-commorce shop as the best one.
          <br />
          <br />
          In our opinion, this task is very demanding, where many different
          problems needs to be solved, including management redux states,
          fetching data from API, filtering and sorting data. It is not only
          programming but also styling many components and preparing the final
          color scheme for our shop. <br />
          <br />
          <Typography variant="h5" color="primary">
            Basic Specification of Project:
          </Typography>
          <List className={classes.root} aria-label="Specification">
            <ListItem>
              <ListItemIcon>
                <StarIcon />
              </ListItemIcon>
              <ListItemText primary="Build with React," />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <StarIcon />
              </ListItemIcon>
              <ListItemText primary="Used Redux for state management," />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <StarIcon />
              </ListItemIcon>
              <ListItemText primary="Data comes from outer API (here ASOS API)," />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <StarIcon />
              </ListItemIcon>
              <ListItemText primary="We decided to use Material-UI to build UI of application" />
            </ListItem>
          </List>
        </MyTypoGraphy1>
        <Box />
      </Box>
      <PeopleProject />
    </MyMainPaper>
  );
};

export default HeaderAboutUs;
