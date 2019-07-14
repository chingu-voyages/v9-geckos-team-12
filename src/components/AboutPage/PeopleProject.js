//Swipe
import React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
//End Of Swipe

//To check

import imageFile from "../../img/human.jpg";

//end to check

// LINK
import Link from "@material-ui/core/Link";
//END OF LINK

// card declaration

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";

const useStyless = makeStyles({
  card: {
    maxWidth: 345
  },
  media: {
    height: 240
  },
  link: {}
});

function ImgMediaCard(props) {
  const classes = useStyless();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          src={props.dorim}
          height="240"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.jobTitle}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.dortext}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <Link href={props.dorlinkGithub} className={classes.link}>
            Github
          </Link>
        </Button>
        <Button size="small" color="primary">
          <Link href={props.dorlinkWebsite} className={classes.link}>
            Portfolio
          </Link>
        </Button>
      </CardActions>
    </Card>
  );
}

//end of card declaration

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired
};

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
    margin: "auto",
    marginTop: "3rem",
    textAlign: "center"
  }
}));

export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  function handleChangeIndex(index) {
    setValue(index);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
        >
          <Tab label="Dorian" />
          <Tab label="Kuba" />
          <Tab label="Radek" />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabContainer dir={theme.direction}>
          <ImgMediaCard
            dorim={imageFile}
            dortext="The role is responsible for designing, coding and modifying websites, from layout to function and according to a client's specifications. Strive to create visually appealing sites that feature user-friendly design and clear navigation."
            dorlinkGithub="https://github.com/Dorijan"
            dorlinkWebsite="https://Dorian-website.co"
            jobTitle="Full Stack Web Developer"
          />
        </TabContainer>
        <TabContainer dir={theme.direction}>
          <ImgMediaCard
            dorim={imageFile}
            dortext="The role is responsible for designing, coding and modifying websites, from layout to function and according to a client's specifications. Strive to create visually appealing sites that feature user-friendly design and clear navigation."
            dorlinkGithub="https://github.com/axon7"
            dorlinkWebsite="https://kubazajac.pl/"
            jobTitle="Full Stack Web Developer2"
          />
        </TabContainer>
        <TabContainer dir={theme.direction}>
          {" "}
          <ImgMediaCard
            dorim={imageFile}
            dortext="The role is responsible for designing, coding and modifying websites, from layout to function and according to a client's specifications. Strive to create visually appealing sites that feature user-friendly design and clear navigation."
            dorlinkGithub="https://github.com/LightingSpace"
            dorlinkWebsite="#"
            jobTitle="Full Stack Web Developer3"
          />
        </TabContainer>
      </SwipeableViews>
    </div>
  );
}
