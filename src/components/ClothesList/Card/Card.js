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
  card: {
    marginTop: "20px",
    marginBottom: "20px"
  },
  itemImage: {
    height: 405
  }
});

function CardComponent({ ...props }) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <Link to='/details' style={{ textDecoration: "none", color: "black" }}>
        <CardActionArea onClick={() => props.cardSelectByID(props.id)}>
          <CardMedia className={classes.itemImage} image={props.img} />
          <CardContent>
            <Typography gutterBottom variant='caption'>
              {props.name}
            </Typography>

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
