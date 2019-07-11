import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  addItemToBasket,
  cardSelectByID
} from "../../../actions/productActions";
import { Box } from "@material-ui/core";

const useStyles = makeStyles({
  card: {},
  itemImage: {
    height: "100%",
    width: "100%"
  },
  titleBox: {
    padding: "7px 8px 0px 8px"
  },
  priceBox: {
    height: 35,
    padding: "0 8px 0 8px",
    color: "green"
  },
  titleText: {
    height: 44,
    overflow: "hidden",
    wordWrap: "break-word",
    lineHeight: "22px"
  }
});

function CardComponent({ ...props }) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <Link to='/details' style={{ textDecoration: "none", color: "black" }}>
        <CardActionArea onClick={() => props.cardSelectByID(props.id)}>
          <CardMedia>
            <img src={props.img} alt='img' className={classes.itemImage} />
          </CardMedia>
          <CardContent className={classes.titleBox}>
            <Typography gutterBottom variant='caption'>
              <Box className={classes.titleText}>{props.name}</Box>
            </Typography>
          </CardContent>
          <CardContent className={classes.priceBox}>
            <Typography>{props.price}</Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
}
const mapDispatchToProps = {
  addItemToBasket,
  cardSelectByID
};

export default connect(
  null,
  mapDispatchToProps
)(CardComponent);
