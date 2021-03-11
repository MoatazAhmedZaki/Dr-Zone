// Libraries
import React, { Component } from "react";
import { Route, HashRouter } from "react-router-dom";
import PropTypes from "prop-types";

// Styling
import "./App.css";
// Components
import Home from "./components/pages/HomePage.js";

import Footer from "./components/layouts/Footer";
import Loading from "./components/pages/Loading";
import { changeLang } from "./globalState/actions/langActions";
import { connect } from "react-redux";

import AdminDashboard from "./components/pages/AdminDashboard.js";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { dir: "ltr", isLoading: true };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 4000);
  }

  render() {
    let component = this.state.isLoading ? (
      <Loading />
    ) : (
      <HashRouter basename="/">
        <div className=" App EnglishFonts ">
          <Route exact path="/" component={Home} />

          <Route exact path="/AdminDashboard" component={AdminDashboard} />
          <Footer />
        </div>
      </HashRouter>
    );

    return component;
  }
}
App.propTypes = {
  changeLang: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  language: state.lang.language,
});

export default connect(mapStateToProps, { changeLang })(App);
