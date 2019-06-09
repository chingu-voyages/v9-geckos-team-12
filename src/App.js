import Layout from "./containers/Layout/Layout";
import React from "react";
import { Route, Switch } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import ClothesList from "./components/ClothesList/ClothesList";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Layout>
          <Switch>
            <Route component={ClothesList} path='' exact />
           <Route component={Cart} path='/cart' />
          </Switch>
        </Layout>
      </React.Fragment>
    );
  }
}

export default App;
