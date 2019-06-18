import React, { Component } from "react";
import { fetchProductByID } from "../../actions/productActions";
import { connect } from "react-redux";
class Details extends Component {
  componentDidMount() {
    this.props.dispatch(fetchProductByID(this.props.id));
  }

  render() {
    return (
      <div>
        <h1>Welcome To Details</h1>
        <p>{this.props.item.name}</p>
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
