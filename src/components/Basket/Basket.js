import React, { useState } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Button, Box, Container } from "@material-ui/core";
import { removeItemFromBasket } from "../../actions/productActions";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import Delivery from "./Delivery";
import "./style.css";
import { CSSTransitionGroup } from "react-transition-group";
const useStyles = makeStyles(theme => ({
  root: {
    marginLeft: "10%",
    marginRight: "10%",
    marginTop: "50px",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
      marginRight: 0
    }
  },
  list: {
    listStyleType: "none"
  },
  ul: {
    paddingLeft: 0
  },
  thumbnail: {
    width: "8%",
    minWidth: 100
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
    paddingRight: 0,
    paddingLeft: 0
  },
  summaryContent: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "flex-end",
    textAlign: "justify",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center"
    }
  }
}));
const Basket = props => {
  const [deliveryValue, setValues] = useState(8);

  const { basket } = props;
  const classes = useStyles();
  // function which counts total cost of the order
  let subTotal = basket.reduce(function(acc, currentValue) {
    return acc + currentValue.price.current.value;
  }, 0);

  let totalWithDelivery =
    Number(subTotal.toFixed(2)) + Number(deliveryValue.toFixed(2));

  return (
    <React.Fragment>
      <div className={classes.root}>
        {subTotal <= 0 ? (
          <Container fixed>
            <Box style={{ margin: "0 auto", textAlign: "center" }}>
              <Typography variant='h4'>Your shopping bag is empty</Typography>
            </Box>
          </Container>
        ) : (
          <>
            <Box style={{ paddingLeft: 10 }}>
              <Typography variant='h6'>Your shopping bag:</Typography>
            </Box>
            <Grid container direction='column'>
              {/* first grid item with basket items */}
              <Grid item>
                <Grid
                  container
                  direction='column'
                  justify='center'
                  alignItems='stretch'
                >
                  <ul className={classes.ul}>
                    <CSSTransitionGroup
                      transitionName='example'
                      transitionEnterTimeout={500}
                      transitionLeaveTimeout={1000}
                    >
                      {basket.map(item => {
                        return (
                          // returning list of basket items

                          <Paper
                            square={true}
                            style={{
                              boxShadow:
                                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
                            }}
                          >
                            <li key={item.id} className={classes.basketItem}>
                              <div className={classes.picAndInfo}>
                                <img
                                  className={classes.thumbnail}
                                  src={`https://${item.media.images[0].url}`}
                                  alt='thumbnail'
                                />
                                <div className={classes.itemInfo}>
                                  <Box
                                    style={{ marginRight: 25, minWidth: 75 }}
                                  >
                                    <Typography>{item.name}</Typography>
                                  </Box>
                                  <Typography>
                                    {item.price.current.text}
                                  </Typography>
                                </div>
                              </div>
                              <div style={{ width: 50, height: 50 }}>
                                <IconButton
                                  onClick={id =>
                                    props.dispatch(
                                      removeItemFromBasket(item.id)
                                    )
                                  }
                                >
                                  <i className='material-icons'>clear</i>
                                </IconButton>
                              </div>
                            </li>
                          </Paper>
                        );
                      })}
                    </CSSTransitionGroup>
                  </ul>
                </Grid>
              </Grid>

              <Grid item className={classes.basketSummary}>
                <div className={classes.summaryContent}>
                  <div
                    style={{
                      justifyContent: "center",
                      width: "200px",
                      padding: "10px",
                      boxShadow:
                        "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
                    }}
                  >
                    <Box>
                      <Typography variant='h5' style={{ marginTop: 0 }}>
                        Order summary:
                      </Typography>
                    </Box>
                    <Box>
                      <Typography variant='body2'>
                        Sub-total: {subTotal.toFixed(2)} EUR
                      </Typography>
                    </Box>
                    <div>
                      <Delivery
                        setValues={setValues}
                        defaultValue={props.defaultValue}
                      />
                    </div>
                    <Typography
                      variant='body1'
                      style={{ margin: "20px 0px 20px 0px" }}
                    >
                      Total: {totalWithDelivery.toFixed(2)} EUR
                    </Typography>
                    {subTotal <= 0 ? null : (
                      <Button
                        variant='contained'
                        color='primary'
                        onClick={() => alert("Redirecting to checkout")}
                        className={classes.checkoutButton}
                      >
                        PROCEED TO CHECKOUT
                      </Button>
                    )}
                    <div style={{ marginTop: "20px" }}>
                      <Typography variant='body2'>We accept:</Typography>
                      <img
                        style={{ width: "166px" }}
                        src='https://assets.asosservices.com/asos-finance/images/marketing/single.png'
                        alt='thumbnail'
                      />
                    </div>
                  </div>
                </div>
              </Grid>

              {/* second grid item with basket summary */}
            </Grid>
          </>
        )}
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  basket: state.products.basket,
  loading: state.products.loading
});

export default connect(mapStateToProps)(Basket);
