import React, { Component, Fragment } from "react";
import NavigationTop from "../../components/UI/NavigationTop/NavigationTop";
import NavigationBottom from "../../components/UI/NavigationBottom/NavigationBottom";

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
        {this.props.children}
        <NavigationBottom />
      </Fragment>
    );
  }
}

export default Layout;
