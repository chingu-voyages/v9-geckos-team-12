import React, { Component, Fragment } from "react";
import NavigationTop from "../../components/UI/NavigationTop/NavigationTop";
import NavigationBottom from "../../components/UI/NavigationBottom/NavigationBottom";
import { Route, Switch } from "react-router-dom";
import ClothesList from '../../components/ClothesList/ClothesList'
// Layout will render NavigationTop, NavigationBottom,ClothesList

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTerm: "sandals"
    };
  }

  render() {
    return (
      <Fragment>
        <NavigationTop />
        <Switch>
            <Route component={ClothesList} path='/shoes'  />
          </Switch>
        <NavigationBottom />
      </Fragment>
    );
  }
}

export default Layout;
