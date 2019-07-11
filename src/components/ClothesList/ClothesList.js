import React, { Component, Fragment } from "react";
import Card from "../ClothesList/Card/Card";
import Grid from "@material-ui/core/Grid";
// import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

import { connect } from "react-redux";
import {
  fetchProducts,
  cardSelectByID,
  fetchMoreProducts,
  updateOffset
} from "../../actions/productActions";
import {
  // MuiThemeProvider,
  // createMuiTheme,
  withStyles
} from "@material-ui/core/styles";

import CircularProgress from "@material-ui/core/CircularProgress";

import { Button } from "@material-ui/core";
import SortBy from "../SortBy";

const styles = {
  gridContainer: {
    maxWidth: 1366,
    margin: "0 auto",
    padding: 12
  }
};

class ClothesList extends Component {
  //fetch for the first time
  componentDidMount() {
    this.props.dispatch(fetchProducts(this.props.category));
  }

  componentDidUpdate(prevProps) {
    if (this.props.category !== prevProps.category) {
      this.props.dispatch(fetchProducts(this.props.category));
    }
  }

  cardSelectByID = id => {
    this.props.dispatch(cardSelectByID(id));
  };

  // sortByPrice(products) {
  //   products.sort((a, b) => a.price.current.value - b.price.current.value);
  // }

  render() {
    const { classes, products, loading, error } = this.props;

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return (
        <Grid container justify='center' style={{ marginTop: "400px" }}>
          <CircularProgress className='progress' color='secondary' size={80} />{" "}
        </Grid>
      );
    }
    if (!products) {
      return <h1>oops</h1>;
    }
    return (
      <Fragment>
        {/* sorting menu below */}

        <div style={{ marginRight: "25px", marginTop: "20px" }}>
          <Grid
            className={classes.gridContainer}
            container
            justify='center'
            spacing={2}
          >
            {products.map(item => {
              if (item === undefined || null) {
                return null;
              } else {
                return (
                  <Grid item key={item.id} xs={6} sm={6} md={4} lg={3}>
                    {" "}
                    {/* sm indicates how much of the page will an individual card cover xs= exstra small etc..*/}
                    <Card
                      key={item.id}
                      id={item.id}
                      name={item.name}
                      img={item.baseImageUrl}
                      price={item.price.current.text}
                    />
                  </Grid>
                );
              }
            })}
          </Grid>

          <Grid container justify='center'>
            <Button
              autoFocus={false}
              variant='contained'
              color='primary'
              onClick={() => {
                this.props.dispatch(updateOffset(40));
                this.props.dispatch(
                  fetchMoreProducts(this.props.category, 40 + this.props.offset)
                );
              }}
              style={{ marginBottom: "50px" }}
            >
              LOAD MORE
            </Button>{" "}
          </Grid>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products.items,
  loading: state.products.loading,
  error: state.products.error,
  category: state.products.category,
  offset: state.products.offset
});

export default connect(mapStateToProps)(withStyles(styles)(ClothesList));
