import React, { Component } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

import { fetchProductByID } from "../../actions/productActions";
import { connect } from "react-redux";
class Details extends Component {
  componentDidMount() {
    this.props.dispatch(fetchProductByID(this.props.id));
  }

  render() {
    const { loading, error, item } = this.props;
    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <CircularProgress className='progress' color='secondary' />;
    }

    return (
      <div>
        <h1>Welcome To Details</h1>
        {item.name}
        {item.productCode}
        {item.brand.name}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products.items,
  loading: state.products.loading,
  error: state.products.error,
  item: state.products.item,
  id: state.products.id
});

export default connect(mapStateToProps)(Details);
