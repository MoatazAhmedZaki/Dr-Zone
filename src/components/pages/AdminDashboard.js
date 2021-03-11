import React, { Component } from "react";
import Navbaar from "../layouts/Navbaar";
import { Container, Row, Col, Form, FormControl } from "react-bootstrap";
import DashboardHome from "../layouts/DashboardHome";

import "../stylesheets/AdminDashboard.css";
export default class AdminDashboard extends Component {
  render() {
    return (
      <div>
        <div className="DrSearch">
          <Navbaar />
        </div>

        <Container fluid className="dashboard">
          <Row>
            <Col lg={2} md={12} sm={12} className="MainNav shadow">
              <Row className=" admininfo p-3">
                <Col lg={5} md={5} sm={5}>
                  <img
                    src={require("../imgs/placeholder-profile.jpg")}
                    alt="logo"
                    className="img-fluid"
                  />
                </Col>
                <Col lg={7} md={7} sm={7} className="py-3 text-center ">
                  <p>Admin Name</p>
                  <small>Admin Rol</small>
                </Col>
              </Row>

              <ul class="nav nav-tabs my-5 " id="MainUl" role="tablist">
                <li class="nav-item">
                  <a
                    class="nav-link active"
                    id="home-tab"
                    data-toggle="tab"
                    href="#DoctorInformation"
                    role="tab"
                    aria-controls="DoctorInformation"
                    aria-selected="true"
                  >
                    {" "}
                    <i class="fas fa-user-md  px-2"></i> DASHBORAD HOME
                  </a>
                </li>
              </ul>
            </Col>

            <Col lg={10} md={12} sm={12} className=" px-0 mx-0">
              <Container fluid className="py-3 shadow px-3 ">
                <Row>
                  <Col lg={10} md={10} sm={10}>
                    <Form inline>
                      <FormControl
                        type="text"
                        placeholder="Search"
                        className="w-100"
                      />
                    </Form>
                  </Col>

                  <Col lg={2} md={2} sm={2} className="py-2 text-center">
                    <i class="fas fa-user-friends fa-2x px-2"></i>
                    <i class="far fa-bell fa-2x px-2"></i>{" "}
                  </Col>
                </Row>
              </Container>

              <div class="tab-content" id="myTabContent">
                <div
                  class="tab-pane fade show active"
                  id="DoctorInformation"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <DashboardHome />
                </div>
             

              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
