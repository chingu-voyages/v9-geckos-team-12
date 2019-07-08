import React, { Component, Fragment } from "react";
import NavigationTop from "../../components/UI/NavigationTop/NavigationTop";
import NavigationBottom from "../../components/UI/NavigationBottom/NavigationBottom";
import { Route, Switch } from "react-router-dom";
import ClothesList from "../../components/ClothesList/ClothesList";
import Details from "../../components/Details/Details";
import Form from "../Form";
import Basket from "../../components/Basket/Basket";
// Layout will render NavigationTop, NavigationBottom,ClothesList

class Layout extends Component {
  render() {
    return (
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
    );
  }
}

export default Layout;
