import React, { Component } from "react";
import axios from "axios";
import Card from "../ClothesList/Card/Card";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
//test

const config = {
  headers: {
    "X-RapidAPI-Key": "07ea04e210mshdcdcdfaeb0a8a2fp1b7079jsnb16592877577"
  }
};

export default class ClothesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      params: this.props.location.pathname.slice(1)
    };
  }
  //fetch for the first time
  componentDidMount() {
    let params = this.state.params;
    axios
      .get(
        `https://brianiswu-unofficial-asos-com-v1.p.rapidapi.com/product/search/v1/?q=${params}&lang=en-GB&currency=EUR&store=1`,
        config
      )
      .then(res => this.setState({ items: res.data.products }));
  }

 

  componentDidUpdate(prevProps,prevState) {
    let params = this.props.location.pathname.slice(1);
      if(prevProps.location!== this.props.location) {
        console.log('yay') // fetch is called only if yo usee YAY in the console. Once you click on a shoes or jeans you will only see yay appear once
                          // The rest of the data that shows up is normal and is data inside this if statement
        axios
      .get(
        `https://brianiswu-unofficial-asos-com-v1.p.rapidapi.com/product/search/v1/?q=${params}&lang=en-GB&currency=EUR&store=1`,
        config
      )
      .then(res => {
          console.log(res.data.products[0].id, 'response data products[0]')
          console.log(this.state.items[0].id)
          console.log(this.state.items)
        if (res.data.products[0].id !== this.state.items[0].id)  {
          this.setState({
            items: res.data.products
          });
        }
      }).catch(err =>console.log(err));
      } 
    

  }

  fetchClothes = () => {};

  render() {
    const items = this.state.items;
    return (
      <div>
        <Grid container>
          {this.state.items.map(item => {
            return (
              <Card
                name={item.name}
                img={item.baseImageUrl}
                price={item.price.current.text}
              />
            );
          })}
        </Grid>
      </div>
    );
  }
}
