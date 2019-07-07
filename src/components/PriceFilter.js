import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import { filterPrice } from "../actions/productActions";
import { connect } from "react-redux";
const useStyles = makeStyles({
  root: {
    width: 300,
    margin: "0 auto"
  }
});

const PriceFilter = props => {
  const classes = useStyles();
  const prices = [];
  props.productsList.map(item => {
    return prices.push(item.price.current.value);
  });

  let maxPrice = Math.max(...prices);
  let minPrice = Math.min(...prices);

  const [value, setValue] = React.useState([minPrice, maxPrice]);

  const handleChange = (event, value) => {
    setValue(value);
  };

  return (
    <div className={classes.root}>
      <Typography id='range-slider' gutterBottom>
        Price range
      </Typography>
      <Slider
        value={value}
        onChange={handleChange}
        onChangeCommitted={() => props.dispatch(filterPrice(value))}
        valueLabelDisplay='auto'
        aria-labelledby='range-slider'
        min={minPrice}
        max={maxPrice}
      />
    </div>
  );
};

const mapStateToProps = state => ({
  products: state.products.items
});

export default connect(mapStateToProps)(PriceFilter);
