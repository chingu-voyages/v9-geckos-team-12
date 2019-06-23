import React, { Component } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Slide } from "react-slideshow-image";

import { fetchProductByID } from "../../actions/productActions";
import { connect } from "react-redux";

const properties = {
  duration: 5000,
  transitionDuration: 400,
  infinite: true,
  indicators: true,
  arrows: true
};

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
        <h1>{item.name}</h1>

        {item.brand.name}
        <div className='slideshow'>
          <Slide {...properties} style={{ width: "314px", margin: "0 auto" }}>
            <div className='each-slide'>
              <div
                style={{
                  backgroundImage: `url('https://${item.media.images[0].url}')`,
                  height: "400px",
                  width: "314px",
                  margin: "0 auto"
                }}
              />
            </div>
            <div className='each-slide'>
              <div
                style={{
                  backgroundImage: `url('https://${item.media.images[1].url}')`,
                  height: "400px",
                  width: "314px",
                  margin: "0 auto"
                }}
              />
            </div>
            <div className='each-slide'>
              <div
                style={{
                  backgroundImage: `url('https://${item.media.images[2].url}')`,
                  height: "400px",
                  width: "314px",
                  margin: "0 auto"
                }}
              />
            </div>
          </Slide>
        </div>
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
