import React, { Fragment } from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { styled } from "@material-ui/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { selectCategory } from "../actions/productActions";

const MyStyledList = styled(List)({
  /*   -webkit-column-count: 3; /* Chrome, Safari, Opera */
  /* -moz-column-count: 3; /* Firefox */

  columnCount: 4,
  marginBottom: "2rem"
});

const MyListItemText = styled(ListItemText)({
  /*   -webkit-column-count: 3; /* Chrome, Safari, Opera */
  /* -moz-column-count: 3; /* Firefox */
  fontSize: "10",
  textAlign: "center"
});

const styles = {
  a: {
    textDecoration: "none",
    color: "inherit"
  }
};

const brands = [
  "Adidas",
  "Clarks",
  "Dr. Martens",
  "Guess",
  "Michael Kors",
  "Ray Ban",
  "Timberland",
  "Wrangler",
  "ASICS",
  "Converse",
  "Ecco",
  "Jack Wolfskim",
  "New Balance",
  "Reebok",
  "Tommy Hilfiger",
  "Benetton",
  "Esprit",
  "Lacoste",
  "New Look",
  "River Island",
  "Topshop",
  "Crocs",
  "Calvin Klein",
  "Desigual",
  "GAP",
  "Lee",
  "Nike",
  "Tamaris",
  "Triumph",
  "Chi Chi London",
  "Dorothy Perkins",
  "Geox",
  "Levi's",
  "Pepe Jeans",
  "The North Face",
  "Vans"
];
function PopularBrands(props) {
  const handleSelectCategory = category => {
    props.selectCategory(category);
  };
  return (
    <div style={{ marginTop: 50 }}>
      <Box>
        <Typography variant="h5" gutterBottom align="center" color="primary">
          Our Popular Brands
        </Typography>
        <Box>
          <MyStyledList component="nav" aria-label="Our Popular Marks">
            {brands.map((brand, i) => {
              return (
                <Fragment key={brand + i}>
                  <Link to="/clothing"  style={{textDecoration: 'none', color: 'inherit'}}>
                    <ListItem button  onClick={() => handleSelectCategory(brand)}>
                      <MyListItemText primary={brand} />
                    </ListItem>
                  </Link>
                </Fragment>
              );
            })}
          </MyStyledList>
        </Box>
      </Box>
    </div>
  );
}

const mapDispatchToProps = {
  selectCategory
};

const mapStateToProps = state => ({
  basket: state.products.basket
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PopularBrands);
