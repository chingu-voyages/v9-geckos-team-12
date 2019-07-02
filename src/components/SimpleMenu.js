import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { connect } from "react-redux";
import {
  sortItemsByPriceAscending,
  sortItemsByPriceDescending
} from "../actions/productActions";
function SimpleMenu(props) {
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
        variant='contained'
        aria-controls='simple-menu'
        aria-haspopup='true'
        onClick={handleClick}
      >
        SORT PRODUCTS
      </Button>
      <Menu
        id='simple-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem
          onClick={() => {
            props.dispatch(sortItemsByPriceAscending());
            handleClose();
          }}
        >
          PRICE ASCENDING
        </MenuItem>
        <MenuItem
          onClick={() => {
            props.dispatch(sortItemsByPriceDescending());
            handleClose();
          }}
        >
          PRICE DESCENDING
        </MenuItem>
      </Menu>
    </div>
  );
}

const mapStateToProps = state => ({
  products: state.products.items,
  loading: state.products.loading,
  error: state.products.error,
  category: state.products.category
});

export default connect(mapStateToProps)(SimpleMenu);
