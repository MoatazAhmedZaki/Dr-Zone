import React, { Component } from "react";
import "../stylesheets/Navbaar.css";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import { changeLang } from "../../globalState/actions/langActions";
import PropTypes from "prop-types";
import {
  Navbar,
  Nav,

} from "react-bootstrap";
const text = require("../localization/lan.json");

class Navbaar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: text.en,
    };
  }
  checklang = () => {
    if (this.props.language === "en") {
      this.setState({ text: text.en });
    } else {
      this.setState({ text: text.ar });
    }
  };

  componentDidUpdate(previousProps, previousState) {
    if (previousProps !== this.props) {
      if (this.props.language === "ar") {
        this.setState({ text: text.ar });
      } else {
        this.setState({ text: text.en });
      }
    }
  }

  onChange = (e) => {
    return this.changeLanguage(e);
  };
  changeLanguage = (e) => {
    e.preventDefault();
    this.props.changeLang(e.target.id);
  };
  componentDidMount() {
    this.checklang();
  }

  render() {
    return (
        <Navbar expand="lg" variant="dark" className="Navbaar">
          {/* <Link className="sign-out"><i class="fas fa-sign-out-alt fa-2x"></i></Link> */}
          <Navbar.Brand href="#home">
            <img
              src={require("../imgs/logo.png")}
              alt="Dr-Zone logo"
              className="img-fluid"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              className={
                " " + (this.props.language !== "en" ? " ml-auto" : " mr-auto")
              }
            >
              <Link to="/"> {this.state.text.navbarLink1}</Link>

              <Link to="/AdminDashboard"> Dashboard</Link>
              {/* <Link>{this.state.text.navbarLink3}</Link> */}
              {/* <Link>{this.state.text.navbarLink4}</Link> */}

              {this.props.language === "en" ? (
                <Link
                  id="ar"
                  className="nav-link"
                  // onClick={this.onChange}
                >
                  
                  <i class="fas fa-exchange-alt"></i> عربي
                </Link>
              ) : (
                <Link
                  //  onClick={this.onChange}
                  id="en"
                  className="nav-link"
                >
                  
                  English <i class="fas fa-exchange-alt"></i>
                </Link>
              )}

              {/* <NavDropdown
              title={<i class="fas fa-globe"></i>}
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item  onClick={this.onChange}
              id="en"> English <i class="fas fa-exchange-alt"></i></NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item   id="ar"
              onClick={this.onChange}> <i class="fas fa-exchange-alt"></i> عربي </NavDropdown.Item>
            </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
       
    );
  }
}

Navbaar.propTypes = {
  changeLang: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  language: state.lang.language,
});

export default connect(mapStateToProps, { changeLang })(withRouter(Navbaar));
