import React, { Component } from 'react'
import "../stylesheets/Dashboard4.css"
import {Row, Col} from "react-bootstrap"
export default class Dashboard4 extends Component {
    render() {
        return (
            <div className="my-4  shadow users">
        <h2 className="p-3">USERS</h2>

<Row className="p-2 shadow-sm">
        <Col lg={3} md={4} sm={4} >
          <Row>
                  <img
                    src={require("../imgs/placeholder-profile.jpg")}
                    alt="logo"
                    className="img-fluid mx-auto"
                  />
                  </Row>
                </Col>
                <Col lg={5} md={4} sm={4} className="py-3 text-center ">
                  <p>User Name</p>
                  <small>User Rol</small>
                </Col>
                <Col lg={4} md={4} sm={4} className="py-4  text-center">
                  <small>2 min ago</small>
                </Col>
                </Row>
                <Row className="p-2 shadow-sm">
        <Col lg={3} md={4} sm={4} >
          <Row>
                  <img
                    src={require("../imgs/placeholder-profile.jpg")}
                    alt="logo"
                    className="img-fluid mx-auto"
                  />
                  </Row>
                </Col>
                <Col lg={5} md={4} sm={4} className="py-3 text-center ">
                  <p>User Name</p>
                  <small>User Rol</small>
                </Col>
                <Col lg={4} md={4} sm={4} className="py-4  text-center">
                  <small>2 min ago</small>
                </Col>
                </Row>
                <Row className="p-2 shadow-sm">
        <Col lg={3} md={4} sm={4} >
          <Row>
                  <img
                    src={require("../imgs/placeholder-profile.jpg")}
                    alt="logo"
                    className="img-fluid mx-auto"
                  />
                  </Row>
                </Col>
                <Col lg={5} md={4} sm={4} className="py-3 text-center ">
                  <p>User Name</p>
                  <small>User Rol</small>
                </Col>
                <Col lg={4} md={4} sm={4} className="py-4  text-center">
                  <small>2 min ago</small>
                </Col>
                </Row>
                <Row className="p-2 shadow-sm">
        <Col lg={3} md={4} sm={4} >
          <Row>
                  <img
                    src={require("../imgs/placeholder-profile.jpg")}
                    alt="logo"
                    className="img-fluid mx-auto"
                  />
                  </Row>
                </Col>
                <Col lg={5} md={4} sm={4} className="py-3 text-center ">
                  <p>User Name</p>
                  <small>User Rol</small>
                </Col>
                <Col lg={4} md={4} sm={4} className="py-4  text-center">
                  <small>2 min ago</small>
                </Col>
                </Row>
                
            </div>
        )
    }
}
