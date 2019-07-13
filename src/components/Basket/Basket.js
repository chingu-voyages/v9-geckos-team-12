import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Button, Box } from "@material-ui/core";
import { removeItemFromBasket } from "../../actions/productActions";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  root: {
    marginLeft: "10%",
    marginRight: "10%",
    marginTop: "50px"
  },
  list: {
    listStyleType: "none"
  },
  ul: {
    paddingLeft: 0
  },
  thumbnail: {
    width: "8%",
    minWidth: 110
  },
  basketItem: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: theme.spacing(2)
  },
  picAndInfo: {
    display: "flex",
    width: "90%"
  },
  checkoutButton: {
    borderRadius: 0
  },
  itemInfo: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexGrow: 1,
    marginLeft: 50
  },
  basketSummary: {
    marginBottom: "100px",
    padding: 0
  },
  summaryContent: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "flex-end"
  }
}));
const Basket = props => {
  const { basket } = props;
  const classes = useStyles();
  // function which counts total cost of the order
  let totalCost = basket.reduce(function(acc, currentValue) {
    return acc + currentValue.price.current.value;
  }, 0);
  return (
    <React.Fragment>
      <div className={classes.root}>
        <Box>
          <Typography variant='h6'>Your shopping bag:</Typography>
        </Box>
        <Grid container direction='column' spacing={2}>
          {/* first grid item with basket items */}
          <Grid item>
            <Grid
              container
              direction='column'
              justify='center'
              alignItems='stretch'
              spacing={3}
            >
              <ul className={classes.ul}>
                {basket.map(item => {
                  return (
                    // returning list of basket items
                    <Paper square={true}>
                      <li key={item.id} className={classes.basketItem}>
                        <div className={classes.picAndInfo}>
                          <img
                            className={classes.thumbnail}
                            src={`https://${item.media.images[0].url}`}
                            alt='thumbnail'
                          />
                          <div className={classes.itemInfo}>
                            <p style={{ marginRight: 25, minWidth: 100 }}>
                              {item.name}
                            </p>
                            <Typography>{item.price.current.text}</Typography>
                          </div>
                        </div>
                        <div style={{ width: 50, height: 50 }}>
                          <IconButton
                            onClick={id =>
                              props.dispatch(removeItemFromBasket(item.id))
                            }
                          >
                            <i className='material-icons'>clear</i>
                          </IconButton>
                        </div>
                      </li>
                    </Paper>
                  );
                })}
              </ul>
            </Grid>
          </Grid>

          <Grid item className={classes.basketSummary}>
            <div className={classes.summaryContent}>
              <div>
                <Box>
                  <Typography variant='h5' style={{ marginTop: 0 }}>
                    Order summary:
                  </Typography>
                </Box>
                <Box>
                  <Typography variant='body1'>
                    Total cost: {totalCost.toFixed(2)} EUR
                  </Typography>
                </Box>
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
              </div>
            </div>
          </Grid>

          {/* second grid item with basket summary */}
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
