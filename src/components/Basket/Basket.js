import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Button } from "@material-ui/core";
import { removeItemFromBasket } from "../../actions/productActions";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  list: {
    listStyleType: "none"
  },
  thumbnail: {
    width: "8%",
    minWidth: 110
  },
  basketItem: {
    margin: theme.spacing(2),
    backgroundColor: "lightgrey"
  },
  picAndInfo: {
    display: "flex"
  },
  checkoutButton: {
    borderRadius: 0
  },
  itemInfo: {
    display: "flex",
    justifyContent: "flex-end"
  }
}));
const Basket = props => {
  const { basket } = props;
  const classes = useStyles();
  console.log(basket[0]);
  // function which counts total cost of the order
  let totalCost = basket.reduce(function(acc, currentValue) {
    return acc + currentValue.price.current.value;
  }, 0);
  return (
    <React.Fragment>
      <div className={classes.root}>
        <Grid
          container
          direction='row'
          justify='center'
          alignItems='flex-start'
          spacing={3}
        >
          {/* first grid item with basket items */}
          <Grid item md={9} lg={9} xl={9} className={classes.itemsGrid}>
            <Paper>
              <ul className={classes.list}>
                <Grid
                  container
                  direction='column'
                  justify='center'
                  alignItems='stretch'
                  spacing={3}
                >
                  {basket.map(item => {
                    return (
                      // returning list of basket items

                      <li key={item.id} className={classes.basketItem}>
                        <div className={classes.picAndInfo}>
                          <img
                            className={classes.thumbnail}
                            src={`https://${item.media.images[0].url}`}
                            alt='thumbnail'
                          />
                          <div className={classes.itemInfo}>
                            <p>{item.name}</p>
                            <p>{item.price.current.text}</p>
                            <Button>
                              <i
                                class='material-icons'
                                onClick={id =>
                                  props.dispatch(removeItemFromBasket(item.id))
                                }
                              >
                                clear
                              </i>
                            </Button>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </Grid>
              </ul>
            </Paper>
          </Grid>
          {/* second grid item with basket summary */}
          <Grid item md={3} lg={3} xl={3}>
            <div className={classes.basketSummary}>
              <Paper>
                <h1>Order summary:</h1>
                <h4>Total cost: {totalCost.toFixed(2)} EUR</h4>
                {totalCost <= 0 ? null : (
                  <Button
                    variant='contained'
                    color='primary'
                    onClick={() => alert("Redirecting to checkout")}
                    className={classes.checkoutButton}
                  >
                    PROCEED TO CHECKOUT
                  </Button>
                )}
              </Paper>
            </div>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  basket: state.products.basket,
  loading: state.products.loading
});

export default connect(mapStateToProps)(Basket);
