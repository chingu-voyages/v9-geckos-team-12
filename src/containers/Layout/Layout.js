import React, { Component, Fragment } from "react";
import NavigationTop from "../../components/UI/NavigationTop/NavigationTop";
import NavigationBottom from "../../components/UI/NavigationBottom/NavigationBottom";
import { Route, Switch } from "react-router-dom";
import ClothesList from "../../components/ClothesList/ClothesList";
import Details from "../../components/Details/Details";
import Form from "../Form";
import Basket from "../../components/Basket/Basket";

import MainAboutPage from "../../components/AboutPage/MainAboutPageApp";
import BigCollectEmails from "../../components/CollectEmails/BigCollectEmails";
import FirstHeader from "../../components/TwoBanners/FirstHeader";
import SecondHeader from "../../components/TwoBanners/SecondHeader";
import PopularMarks from "../../components/PopularMarks/PopularMarks";
import HelpMenu from "../../components/HelpMenu/HelpMenu";

import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { teal } from "@material-ui/core/colors";

// Layout will render NavigationTop, NavigationBottom,ClothesList

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#a4a4a4",
      main: "#757575",
      dark: "#494949",
      contrastText: "#fff"
    },
    secondary: {
      light: "#819ca9",
      main: "#546e7a",
      dark: "#29434e",
      contrastText: "#fff"
    }
  },
  overrides: {
    MuiPaper: {
      root: {
        margin: "0 auto"
      }
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 1024,
      xl: 1920
    }
  }
});

class Layout extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div style={{paddingBottom: '2.5rem'}}>
          <NavigationTop />
          <Switch>
            <Route component={ClothesList} path='/clothing' />
            <Route component={Details} path='/details' exact />
            <Route component={Form} path='/login' exact />
            <Route component={Basket} path='/basket' exact />
            <Route component={ClothesList} path='/search/*' />
            <Route component={MainAboutPage} path='/about-us' exact />
            <Route path='/' exact>
              <FirstHeader />
              <SecondHeader />
              <BigCollectEmails />
              <PopularMarks />
              <HelpMenu />
            </Route>
          </Switch>
          <NavigationBottom />
        </div>
      </ThemeProvider>
    );
  }
}

export default Layout;
