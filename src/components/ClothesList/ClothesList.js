import React, { Component,Fragment } from "react";
import axios from "axios";
import Card from "../ClothesList/Card/Card";
import Grid from "@material-ui/core/Grid";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({ // We use createMuiTheme to create our own theme for the Card component we override the margin 0 auto
  overrides: {
    MuiPaper: {
      root: {
        margin: "0 auto"
      }
    }
  }
});

const config = {
  headers: {
    "X-RapidAPI-Key": "07ea04e210mshdcdcdfaeb0a8a2fp1b7079jsnb16592877577"
  }
};

export default class ClothesList extends Component {
  
    state = {
      items: [], 
    };
  
  //fetch for the first time
  componentDidMount() {
    let params = this.props.location.pathname.slice(1);
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
      
        axios
      .get(
        `https://brianiswu-unofficial-asos-com-v1.p.rapidapi.com/product/search/v1/?q=${params}&lang=en-GB&currency=EUR&store=1`,
        config
      )
      .then(res => {
        if(this.state.items.length === 0) {
          this.setState({
            items: res.data.products
          });
        }
     else {
      if (res.data.products[0].id !== this.state.items[0].id )  {
       
        this.setState({
          items: res.data.products
        });
      }
        }
      }).catch(err =>console.log(err));
      } 
    

  }

  fetchClothes = () => {};

  render() {
    const items = this.state.items;
    return (
    <MuiThemeProvider theme={theme}> {/* MuiThemeProvider allos us to override styles made by MaterialUi so we can edit all aspects of the default style */}
     <Fragment>
    <Grid container justify='center' alignItems='center'> 
          {this.state.items.map(item => {
            return (
              <Grid item xs={12} sm={12} md={6} lg={3}>  {/* sm indicates how much of the page will an individual card cover xs= exstra small etc..*/}
              <Card
                name={item.name}
                img={item.baseImageUrl}
                price={item.price.current.text}
              />
              </Grid>
            );
          })}
        </Grid>
        </Fragment>
        </MuiThemeProvider>

    );
  }
}
