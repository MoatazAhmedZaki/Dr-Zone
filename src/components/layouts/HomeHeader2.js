import React, { Component } from "react";
import "../stylesheets/HomeHeader2.css";
import "../stylesheets/SearchForm.css";

import { Form, Col, Row, Carousel, Container } from "react-bootstrap";

export default class HomeHeader2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show1: true,
      show2: true,
      show3: true,
      Type: null,
      Speciality: "Speciality",
      City: "City",
      Area: "Area",
    };
  }

  toggleSelect1 = () => {
    this.setState({
      show1: !this.state.show1,
      show2: true,
      show3: true,
    });
  };

  toggleSelect2 = () => {
    this.setState({
      show1: true,
      show2: !this.state.show2,
      show3: true,
    });
  };

  toggleSelect3 = () => {
    this.setState({
      show1: true,
      show2: true,
      show3: !this.state.show3,
    });
  };

  SelectSpeciality = (e) => {
    e.preventDefault();
    console.log(e.target.id);
    this.setState({ Speciality: e.target.id, show1: true });
  };
  SelectCity = (e) => {
    e.preventDefault();
    console.log(e.target.id);

    this.setState({ City: e.target.id, show2: true });
  };

  SelectArea = (e) => {
    e.preventDefault();
    console.log(e.target.id);

    this.setState({ Area: e.target.id, show3: true });
  };

  SelectName = (e) => {
    console.log(e.target.value);

    this.setState({ name: e.target.value });
  };

  render() {
    return (
      <div className="HomeHeader2 d-flex justify-content-center align-items-end pb-5">
        <div className="w-100 ">
          <Container>
            <h3 className="text-center py-3 white"> Reservation Type : </h3>

            <div className=" d-flex justify-content-center">
              <div class="select">
                <select name="slct" id="slct">
                  <option selected disabled>
                    Choose type
                  </option>
                  <option value="1">Clinic Reservation</option>
                  <option value="2">Online Reservation</option>
                  <option value="3">Home Reservation</option>
                </select>
              </div>
            </div>

            <div className=" d-lg-flex justify-content-center  d-sm-block py-3">
              <div className="holder ">
                <div onClick={this.toggleSelect1} className="muybtnn">
                  <p>
                    <i class="fas fa-stethoscope px-2"> </i>
                    {this.state.Speciality}
                    {this.state.show1 ? (
                      <i class="fas fa-chevron-down mychevron"></i>
                    ) : (
                      <i class="fas fa-chevron-up mychevron"></i>
                    )}
                  </p>
                </div>
                <div
                  className={
                    "myform store " + (this.state.show1 ? "hidden" : "viewfull")
                  }
                >
                  <Carousel indicators={false} interval={null}>
                    <Carousel.Item>
                      <Row>
                        <Col lg={6} sm={12}>
                          {/* <h6>list type</h6> */}

                          <ul>
                            <li
                              onClick={this.SelectSpeciality}
                              id="Cardiologists"
                            >
                              Cardiologists
                            </li>
                            <li
                              onClick={this.SelectSpeciality}
                              id="Dermatology2"
                            >
                              Dermatology
                            </li>
                            <li
                              onClick={this.SelectSpeciality}
                              id="Anesthesiologists"
                            >
                              Anesthesiologists
                            </li>
                          </ul>
                        </Col>
                        <Col lg={6} sm={12}>
                          {/* <h6>list type</h6> */}

                          <ul>
                            <li
                              onClick={this.SelectSpeciality}
                              id="Endocrinologists"
                            >
                              Endocrinologists
                            </li>
                            <li onClick={this.SelectSpeciality} id="Osteopaths">
                              Osteopaths
                            </li>
                            <li
                              onClick={this.SelectSpeciality}
                              id="Hematologists"
                            >
                              Hematologists
                            </li>
                          </ul>
                        </Col>
                      </Row>
                      <h6>Page 1 of 2</h6>
                    </Carousel.Item>
                    <Carousel.Item>
                      <Row>
                        <Col lg={6} sm={12}>
                          {/* <h6>list type</h6> */}

                          <ul>
                            <li onClick={this.SelectSpeciality} id="Internists">
                              Internists
                            </li>
                            <li
                              onClick={this.SelectSpeciality}
                              id="Nephrologists"
                            >
                              Nephrologists
                            </li>
                            <li
                              onClick={this.SelectSpeciality}
                              id="Neurologists"
                            >
                              Neurologists
                            </li>
                          </ul>
                        </Col>
                      </Row>
                      <h6>Page 2 of 2</h6>
                    </Carousel.Item>
                  </Carousel>
                </div>
              </div>

              <div className="holder">
                <div onClick={this.toggleSelect2} className="muybtnn ">
                  <p>
                    <i class="fas fa-map-marker-alt px-2"></i>
                    {this.state.City}
                    {this.state.show2 ? (
                      <i class="fas fa-chevron-down mychevron"></i>
                    ) : (
                      <i class="fas fa-chevron-up mychevron"></i>
                    )}
                  </p>
                </div>
                <div
                  className={
                    "myform store " + (this.state.show2 ? "hidden" : "viewfull")
                  }
                >
                  <Carousel indicators={false} interval={null}>
                    <Carousel.Item>
                      <Row>
                        <Col lg={6} sm={12} className="mx-auto">
                          {/* <h6>list type</h6> */}

                          <ul>
                            <li onClick={this.SelectCity} id="Cairo">
                              Cairo
                            </li>
                            <li onClick={this.SelectCity} id="Giza">
                              Giza
                            </li>
                            <li onClick={this.SelectCity} id="Alexandria">
                              Alexandria
                            </li>
                          </ul>
                        </Col>
                        <Col lg={6} sm={12}>
                          {/* <h6>list type</h6> */}

                          <ul>
                            <li onClick={this.SelectCity} id="Aswan">
                              Aswan
                            </li>
                          </ul>
                        </Col>
                      </Row>
                      <h6>Page 1 of 1</h6>
                    </Carousel.Item>
                  </Carousel>
                </div>
              </div>
              <div className="holder">
                <div onClick={this.toggleSelect3} className="muybtnn">
                  <p>
                    <i class="fas fa-map-marked-alt px-2"></i>
                    {this.state.Area}
                    {this.state.show3 ? (
                      <i class="fas fa-chevron-down mychevron"></i>
                    ) : (
                      <i class="fas fa-chevron-up mychevron"></i>
                    )}
                  </p>
                </div>
                <div
                  className={
                    "myform store " + (this.state.show3 ? "hidden" : "viewfull")
                  }
                >
                  <Carousel indicators={false} interval={null}>
                    <Carousel.Item>
                      <Row>
                        <Col lg={6} sm={12}>
                          {/* <h6>list type</h6> */}

                          <ul>
                            <li onClick={this.SelectArea} id="Maadi">
                              Maadi
                            </li>
                            <li onClick={this.SelectArea} id="Zamalek">
                              Zamalek
                            </li>
                            <li onClick={this.SelectArea} id="Downtown">
                              Downtown
                            </li>
                          </ul>
                        </Col>
                        <Col lg={6} sm={12}>
                          {/* <h6>list type</h6> */}

                          <ul>
                            <li onClick={this.SelectArea} id="Heliopolis">
                              Heliopolis
                            </li>
                          </ul>
                        </Col>
                      </Row>
                      <h6>Page 1 of 1</h6>
                    </Carousel.Item>
                  </Carousel>
                </div>
              </div>

              {/*             
           
            <i class="fas fa-user-md px-3 "></i>
    <Form.Control  className="" type="text" placeholder="Dr Name"></Form.Control>
   
             */}
            </div>

            <div>
              <div className="d-flex justify-content-center align-items-center px-3 dr-name-input mb-3">
                <i class="fas fa-user-md px-3 "></i>
                <Form.Control
                  className=" h-100 w-100 "
                  type="text"
                  placeholder="Dr Name"
                  style={{ border: "none" }}
                ></Form.Control>
              </div>
              <button
                onClick={this.search}
                className="muybtnn searchbtn d-flex justify-content-center align-items-center my-0"
              >
                Search
              </button>
            </div>
          </Container>
        </div>
      </div>
    );
  }
}
