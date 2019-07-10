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

const useStyles = makeStyles({
  card: {},
  itemImage: {
    height: "100%",
    width: "100%"
  },
  titleBox: {
    height: 44,
    padding: "16px 16px 0 16px"
  },
  priceBox: {
    height: 35,
    padding: "0 16px 0 16px",
    color: "green"
  }
});

function CardComponent({ ...props }) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <Link to='/details' style={{ textDecoration: "none", color: "black" }}>
        <CardActionArea onClick={() => props.cardSelectByID(props.id)}>
          {/* <CardMedia
            component='div'
            className={classes.itemImage}
            image={props.img}
          /> */}
          <img src={props.img} alt='img' className={classes.itemImage} />
          <CardContent className={classes.titleBox}>
            <Typography gutterBottom variant='caption'>
              {props.name}
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
