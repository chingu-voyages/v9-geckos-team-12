import React, { Component, Fragment } from "react";
import NavigationTop from "../../components/UI/NavigationTop/NavigationTop";
import NavigationBottom from "../../components/UI/NavigationBottom/NavigationBottom";
import BigCollectEmails from "../../components/CollectEmails/BigCollectEmails";
import FirstHeader from "../../components/TwoBanners/FirstHeader";
import SecondHeader from "../../components/TwoBanners/SecondHeader";

class Layout extends Component {
  render() {
    return (
      /* <Fragment>
        <NavigationTop />
        {this.props.children}
        <NavigationBottom />
      </Fragment> */
      <Fragment>
        <Fragment>
          <NavigationTop />
        </Fragment>
        <Fragment>
          <FirstHeader />
        </Fragment>

        <Fragment>{this.props.children}</Fragment>
        <Fragment>
          <SecondHeader />
        </Fragment>
        <Fragment>
          <BigCollectEmails />
        </Fragment>
        <Fragment>
          <NavigationBottom />
        </Fragment>
      </Fragment>
    );
  }
}

export default Layout;
