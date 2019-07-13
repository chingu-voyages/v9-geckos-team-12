import React, { useState } from "react";
import { connect } from "react-redux";
import { fetchProducts, selectCategory } from "../../actions/productActions";
import { withRouter } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    padding: "1px 2px",
    display: "flex",
    alignItems: "center",
    width: "100%"
  },
  input: {
    marginLeft: 10,
    marginRight: 10,
    flex: 1,
    width: '30%',
  },
  iconButton: {
    padding: 10
  }
});

const SearchBar = props => {
  const [searchBarInput, setSearchBarInput] = useState();

  const handleSubmit = e => {
    e.preventDefault();
    props.history.push(`/search/${searchBarInput}`);
    props.dispatch(selectCategory(searchBarInput));
    props.dispatch(fetchProducts(searchBarInput));
    setSearchBarInput("");
  };

  const classes = useStyles();

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <Paper className={classes.root}>
        <InputBase
          className={classes.input}
          placeholder='Search for items'
          inputProps={{ "aria-label": "search for items" }}
          onChange={e => setSearchBarInput(e.target.value)}
          value={searchBarInput}
        />
        <IconButton
          type='submit'
          onClick={handleSubmit}
          className={classes.iconButton}
          aria-label='Search'
        >
          <SearchIcon />
        </IconButton>
      </Paper>
    </form>
  );
};

export default withRouter(connect(null)(SearchBar));
