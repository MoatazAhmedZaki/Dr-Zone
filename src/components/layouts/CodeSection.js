import React, { Component } from "react";
import { Row, Container, Form, Col, Button } from "react-bootstrap";
import "../stylesheets/CodeSection.css";
import { withRouter } from "react-router-dom";

import { connect } from "react-redux";
import { changeLang } from "../../globalState/actions/langActions";
import PropTypes from "prop-types";
const text = require("../localization/lan.json");

class CodeSection extends Component {
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
  render() {
    return (
      <div className="CodeSection py-5 ">
        {/* <Form>
          <Container> */}
        {/* <Row> */}
        {/* 
<Col lg={6} md={12} sm={12}>
<Row>
<Col lg={6} md={12} sm={12}>

    <p className=" sameasbtn"><i class="fas fa-stethoscope p-1 "></i> {this.state.text.Headerbtn1}</p>
<p className="code ">{this.state.text.Code}</p> 
   </Col>
   <Col lg={6} md={12} sm={12}>

    <Form.Control type="text" className="sameasbtn2" placeholder={this.state.text.Code} />
   </Col>
   </Row>
   

</Col> */}
        {/* <Col lg={6} md={12} sm={12}>
    <Row>
<Col lg={6} md={12} sm={12}>

    <p className=" sameasbtn"><i class="fas fa-chalkboard-teacher p-1"></i>{this.state.text.Headerbtn2}</p>
<p className="code ">{this.state.text.Code}</p> 
   </Col>
   <Col lg={6} md={12} sm={12}>

    <Form.Control type="text" className="sameasbtn2" placeholder={this.state.text.Code} />
   </Col>
   </Row>
   

</Col>

</Row> */}

        {/* 
<Row><Button className="mx-auto my-3 conf" >
    {this.state.text.Confirmation}</Button></Row> */}
        {/* </Container>
        </Form> */}

        <Container className=" py-5 tabsection">
          <Row>
            <Col lg={12} md={12} sm={12} className="mx-auto px-0">
              <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li class="nav-item">
                  <a
                    class="nav-link active"
                    id="pills-home-tab"
                    data-toggle="pill"
                    href="#pills-home"
                    role="tab"
                    aria-controls="pills-home"
                    aria-selected="true"
                  >
                    <i class="fas fa-chalkboard-teacher p-1"></i>
                    {this.state.text.Headerbtn2}
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    id="pills-profile-tab"
                    data-toggle="pill"
                    href="#pills-profile"
                    role="tab"
                    aria-controls="pills-profile"
                    aria-selected="false"
                  >
                    <i class="fas fa-chalkboard-teacher p-1"></i>
                    {this.state.text.Headerbtn1}{" "}
                  </a>
                </li>
              </ul>
            </Col>
          </Row>

          <div class="tab-content" id="pills-tabContent">
            <div
              class="tab-pane fade show active"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
              <Row>
                <Col lg={6} md={12} sm={12} className="mx-auto">
                  <Row>
                  <Col lg={6} md={12} sm={12}>
                    <Row>
                      <Form.Control
                        type="text"
                        className="sameasbtn2 my-3 mx-auto"
                        placeholder={this.state.text.placeHolder}
                      />
                    </Row>
                  </Col>
                  <Col lg={6} md={12} sm={12}>
                  <Row>
                    <Button className="mx-auto my-3 conf">
                      {this.state.text.Confirmation}
                    </Button>{" "}
                  </Row>{" "}
                  
                  </Col>
                  </Row>
                </Col>
              </Row>
            </div>
            <div
              class="tab-pane fade"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
                <Row>
                <Col lg={6} md={12} sm={12} className="mx-auto">
                  <Row>
                  <Col lg={6} md={12} sm={12}>
                    <Row>
                      <Form.Control
                        type="text"
                        className="sameasbtn2 my-3 mx-auto"
                        placeholder={this.state.text.placeHolder}
                      />
                    </Row>
                  </Col>
                  <Col lg={6} md={12} sm={12}>
                  <Row>
                    <Button className="mx-auto my-3 conf">
                      {this.state.text.Confirmation}
                    </Button>{" "}
                  </Row>{" "}
                  
                  </Col>
                  </Row>
                </Col>
              </Row>
              <Row>



              </Row>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

CodeSection.propTypes = {
  changeLang: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  language: state.lang.language,
});
export default connect(mapStateToProps, { changeLang })(
  withRouter(CodeSection)
);
