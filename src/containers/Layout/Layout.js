import React, { Component, Fragment } from "react";
import NavigationTop from "../../components/UI/NavigationTop/NavigationTop";
import NavigationBottom from "../../components/UI/NavigationBottom/NavigationBottom";
import { Route, Switch } from "react-router-dom";
import ClothesList from "../../components/ClothesList/ClothesList";
import Details from "../../components/Details/Details";
import Cart from "../../components/Cart/Cart";
// Layout will render NavigationTop, NavigationBottom,ClothesList

class Layout extends Component {
  render() {
    return (
      <Fragment>
        <NavigationTop />
        <Switch>
          <Route component={ClothesList} path='/jeans' />
          <Route component={ClothesList} path='/t-shirts' />
          <Route component={ClothesList} path='/shoes' />

          <Route component={Details} path='/details' exact />
          <Route component={Cart} path='/cart' />
        </Switch>
        <NavigationBottom />
      </Fragment>
    );
  }
}

export default Layout;
