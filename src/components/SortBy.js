import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from '@material-ui/core/Typography'
import { connect } from "react-redux";
import {
  sortItemsByPriceAscending,
  sortItemsByPriceDescending,
  fetchProducts
} from "../actions/productActions";
const SortBy = props => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div>
      <Button
        aria-controls='simple-menu'
        aria-haspopup='true'
        onClick={handleClick}
        color='inherit'
      >
        <Typography variant='title'>SORT PRODUCTS</Typography>
      </Button>
      <Menu
        id='simple-menu'
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center"
        }}
        getContentAnchorEl={null}
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem
          onClick={() => {
            props.dispatch(fetchProducts(props.category));
            handleClose();
          }}
        >
          Relevance
        </MenuItem>
        <MenuItem
          onClick={() => {
            props.dispatch(sortItemsByPriceAscending());
            handleClose();
          }}
        >
          Price low to high
        </MenuItem>
        <MenuItem
          onClick={() => {
            props.dispatch(sortItemsByPriceDescending());
            handleClose();
          }}
        >
          Price high to low
        </MenuItem>
      </Menu>
    </div>
  );
};

const mapStateToProps = state => ({
  products: state.products.items,
  loading: state.products.loading,
  error: state.products.error,
  category: state.products.category
});

export default connect(mapStateToProps)(SortBy);
