import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    margin: theme.spacing(2, 2),
    width: "75%"
  },
  list: {
    listStyleType: "none"
  }
}));
const Basket = props => {
  const { basket } = props;
  const classes = useStyles();

  return (
    <div>
      <ul className={classes.list}>
        {basket.map(item => {
          return (
            <li>
              <Paper className={classes.root}>{item.name}</Paper>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const mapStateToProps = state => ({
  basket: state.products.basket,
  loading: state.products.loading
});

export default connect(mapStateToProps)(Basket);
