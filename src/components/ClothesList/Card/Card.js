import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    maxWidth: 345
  },
  media: {
    height: 420
  }
});

export default function CardComponent({ ...props }) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
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
      <CardActions>
        <Button size='small' color='primary'>
          ADD TO BASKET
        </Button>
      </CardActions>
    </Card>
  );
}
