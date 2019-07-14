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
import Modal from "@material-ui/core/Modal";
import Input from "@material-ui/core/Input";

const useStyles = makeStyles(theme => ({
  root: {
    padding: "1px 2px",
    display: "flex",
    alignItems: "center",
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      display: "none"
    }
  },
  input: {
    marginLeft: 10,
    marginRight: 10,
    flex: 1,
    width: "30vw",
    [theme.breakpoints.down("md")]: {
      width: "30vw",
      marginLeft: theme.spacing(5)
    },
    [theme.breakpoints.down("sm")]: {
      width: "20vw",
      marginLeft: theme.spacing(5)
    }
  },
  iconButton: {
    padding: 10
  },

  smallScreen: {
    display: "none",
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      alignItems: "center",
      backgroundColor: "transparent",
      boxShadow: "none"
    }
  },

  smallInput: {
    width: '77vw'
  },
  smallIcon: {
    border: "none"
  },

  modal: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4),
    outline: "none"
  }
}));

const SearchBar = props => {
  const [searchBarInput, setSearchBarInput] = useState();
  const [toggleModal, setToggleModal] = useState(false);
  const handleSubmit = e => {
    e.preventDefault();
    setToggleModal(false)
    props.history.push(`/search/${searchBarInput}`);
    props.dispatch(selectCategory(searchBarInput));
    props.dispatch(fetchProducts(searchBarInput));
    setSearchBarInput("");
  };

  const toggleModalHandler = () => {
    setToggleModal(!toggleModal);
  };
  const closeModal = () => {
    setToggleModal(false);
  };
  const classes = useStyles();

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <Paper className={classes.root}>
        <InputBase
          className={classes.input}
          placeholder="Search for items"
          inputProps={{ "aria-label": "search for items" }}
          onChange={e => setSearchBarInput(e.target.value)}
          value={searchBarInput}
        />


        <IconButton
          type="submit"
          onSubmit={handleSubmit}
          className={classes.iconButton}
          aria-label="Search"
        >
          <SearchIcon />
          <Modal open={toggleModal} onClose={closeModal}>
            <Paper className={classes.modal}>
              <Input
                color="secondary"
                placeholder="Search for items"
                inputProps={{ "aria-label": "search for items" }}
                onChange={e => setSearchBarInput(e.target.value)}
                value={searchBarInput}
                className={classes.smallInput}
              >
    
              </Input>
              <IconButton onClick={handleSubmit} type='submit' onSubmit={handleSubmit}>
              <SearchIcon />
              </IconButton>
           
            </Paper>
          </Modal>
        </IconButton>
      </Paper>
      <Paper className={classes.smallScreen}>
        <IconButton onClick={toggleModalHandler} className={classes.smallIcon}>
          <SearchIcon />
        </IconButton>
      </Paper>
    </form>
  );
};

export default withRouter(connect(null)(SearchBar));
