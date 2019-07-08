import React, { Component, Fragment } from "react";
import Card from "../ClothesList/Card/Card";
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";
import { fetchProducts, cardSelectByID } from "../../actions/productActions";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import CircularProgress from "@material-ui/core/CircularProgress";

const theme = createMuiTheme({
  // We use createMuiTheme to create our own theme for the Card component we override the margin 0 auto
  overrides: {
    MuiPaper: {
      root: {
        margin: "0 auto"
      }
    }
  }
});

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

  render() {
    const { products, loading, error } = this.props;
    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <CircularProgress className='progress' color='secondary' />;
    }
    return (
      <MuiThemeProvider theme={theme}>
        {" "}
        {/* MuiThemeProvider allos us to override styles made by MaterialUi so we can edit all aspects of the default style */}
        <Fragment>
          <Grid container justify='center' alignItems='center'>
            {products.map(item => {
              return (
                <Grid item key={item.id} xs={12} sm={12} md={6} lg={3}>
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
            })}
          </Grid>
        </Fragment>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products.items,
  loading: state.products.loading,
  error: state.products.error,
  category: state.products.category
});

export default connect(mapStateToProps)(ClothesList);
