import React, { Component } from "react";
import axios from "axios";
import Card from "../ClothesList/Card/Card";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Box from '@material-ui/core/Box'

const config = {
  headers: {
    "X-RapidAPI-Key": "07ea04e210mshdcdcdfaeb0a8a2fp1b7079jsnb16592877577"
  }
};

export default class ClothesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://brianiswu-unofficial-asos-com-v1.p.rapidapi.com/product/search/v1/?q=t-shirt&lang=en-GB&currency=EUR&store=1",
        config
      )
      .then(res => this.setState({ items: res.data.products }));
  }
  render() {
    const items = this.state.items;
    console.log(items);
    return (
      <div>
        <Grid container justify='center'>
          {this.state.items.map(item => {
            return (
              <Grid item xs={3}> 
              <Box m={3}>
              <Card
                name={item.name}
                img={item.baseImageUrl}
                price={item.price.current.text}
              />
              </Box>
              
              </Grid>
            );
          })}
        </Grid>
      </div>
    );
  }
}
