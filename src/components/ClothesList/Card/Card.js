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
    maxWidth: 345,
    marginTop: "20px",
    marginBottom: "20px"
  },
  media: {
    height: 420
  }
});

function CardComponent({ ...props }) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <Link to='/details'>
        <CardActionArea onClick={() => props.cardSelectByID(props.id)}>
          <CardMedia className={classes.media} image={props.img} />
          <CardContent>
            <Typography gutterBottom variant='caption' component='h2'>
              {props.name}
            </Typography>
            <Typography variant='body2' color='textSecondary' component='p'>
              Price: {props.price}
            </Typography>
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
