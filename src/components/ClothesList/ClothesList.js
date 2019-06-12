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
