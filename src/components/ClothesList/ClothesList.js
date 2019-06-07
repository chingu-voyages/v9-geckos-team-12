import React, { Component } from "react";
import axios from "axios";
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
    return (
      <div>
        <p>ClothesList</p>
        {this.state.items.map(item => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </div>
    );
  }
}
