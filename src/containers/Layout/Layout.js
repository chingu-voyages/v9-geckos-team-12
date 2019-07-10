import React, { Component, Fragment } from "react";
import NavigationTop from "../../components/UI/NavigationTop/NavigationTop";
import NavigationBottom from "../../components/UI/NavigationBottom/NavigationBottom";
import { Route, Switch } from "react-router-dom";
import ClothesList from "../../components/ClothesList/ClothesList";
import Details from "../../components/Details/Details";
import Form from "../Form";
import Basket from "../../components/Basket/Basket";
import { createMuiTheme,  } from '@material-ui/core/styles';
import { ThemeProvider } from "@material-ui/styles";
import { teal } from '@material-ui/core/colors';

// Layout will render NavigationTop, NavigationBottom,ClothesList

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#a4a4a4',
      main: '#757575',
      dark: '#494949',
      contrastText: '#fff',
    },
    secondary: {
      light: '#819ca9',
      main: '#546e7a',
      dark: '#29434e',
      contrastText: '#fff',
    },
  },  
  overrides: {
    MuiPaper: {
      root: {
        margin: "0 auto"
      }
    }
  }
});

class Layout extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>

      
      <Fragment>
        <NavigationTop />
        <Switch>
          <Route component={ClothesList} path='/clothing' />
          <Route component={Details} path='/details' exact />
          <Route component={Form} path='/login' exact />
          <Route component={Basket} path='/basket' exact />
          <Route component={ClothesList} path='/search/*' />
        </Switch>
        <NavigationBottom />
      </Fragment>
      </ThemeProvider>
    );
  }
}

export default Layout;
