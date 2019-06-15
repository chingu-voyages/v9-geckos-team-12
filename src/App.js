import Layout from "./containers/Layout/Layout";
import React from "react";
import { Route, Switch } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import ClothesList from "./components/ClothesList/ClothesList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTerm: "flip"
    };
  }
  render() {
    return (
      <React.Fragment>
        <Layout currentTerm='sandals'>
          <Switch>
            <Route component={ClothesList} path='/' />
            <Route component={Cart} path='/cart' />
          </Switch>
        </Layout>
        s
      </React.Fragment>
    );
  }
}

export default App;
