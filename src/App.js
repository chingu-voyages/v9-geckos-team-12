import Layout from "./containers/Layout/Layout";
import React from "react";
import axios from "axios";
import { Route, Switch } from "react-router-dom";
import Cart from "./components/Cart/Cart";

const config = {
  headers: {
    "X-RapidAPI-Key": "07ea04e210mshdcdcdfaeb0a8a2fp1b7079jsnb16592877577"
  }
};

class App extends React.Component {
  componentDidMount() {
    axios
      .get(
        "https://brianiswu-unofficial-asos-com-v1.p.rapidapi.com/product/search/v1/?q=t-shirt&lang=en-GB&currency=EUR&store=1",
        config
      )
      .then(res => console.log(res.data.products));
  }

  render() {
    return (
      <React.Fragment>
        <Layout>
          <Switch>
            children
            <Route component={Cart} path='/cart' />
          </Switch>
        </Layout>
      </React.Fragment>
    );
  }
}

export default App;
