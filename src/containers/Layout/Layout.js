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
// Layout will render NavigationTop, NavigationBottom,ClothesList

class Layout extends Component {
  render() {
    return (
      <Fragment>
        <NavigationTop />
        <Switch>
          <Route component={ClothesList} path="/clothing" />
          <Route component={Details} path="/details" exact />
          <Route component={Form} path="/login" exact />
          <Route component={Basket} path="/basket" exact />
          <Route component={ClothesList} path="/search/*" />
          <Route component={MainAboutPage} path="/about-us" exact />
          <Route path="/" exact>
            <FirstHeader />
            <SecondHeader />
            <BigCollectEmails />
            <PopularMarks />
            <HelpMenu />
          </Route>
        </Switch>
        <NavigationBottom />
      </Fragment>
    );
  }
}

export default Layout;
