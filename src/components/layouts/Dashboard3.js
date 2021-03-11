import React, { Component } from "react";
import "../stylesheets/Dashboard3.css";
import { Row, Col } from "react-bootstrap";
export default class Dashboard3 extends Component {
  render() {
    return (
      <div className="my-4  shadow events">
        <h2 className="p-3">UPCOMING EVENTS</h2>

        <div class="shadow-sm p-3 mb-2 ">
          <Row>
            <Col lg={6} md={6} sm={6} className="card-subTitle">
              <p>Sub Title</p>
            </Col>
            <Col lg={6} md={6} sm={6} className="card-date">
              <i class="fas fa-calendar-alt "></i>
              <p className="px-2">00/00/2020</p>
            </Col>
          </Row>
          <div className="event-info">
            <p>
              Chapter <span> - salem</span>
            </p>
          </div>
          
        </div>
        <div class="shadow-sm p-3 mb-2 ">
          <Row>
            <Col lg={6} md={6} sm={6} className="card-subTitle">
              <p>Sub Title</p>
            </Col>
            <Col lg={6} md={6} sm={6} className="card-date">
              <i class="fas fa-calendar-alt "></i>
              <p className="px-2">00/00/2020</p>
            </Col>
          </Row>
          <div className="event-info">
            <p>
              Chapter <span> - salem</span>
            </p>
          </div>
          
        </div>
        <div class="shadow-sm p-3 mb-2 ">
          <Row>
            <Col lg={6} md={6} sm={6} className="card-subTitle">
              <p>Sub Title</p>
            </Col>
            <Col lg={6} md={6} sm={6} className="card-date">
              <i class="fas fa-calendar-alt "></i>
              <p className="px-2">00/00/2020</p>
            </Col>
          </Row>
          <div className="event-info">
            <p>
              Chapter <span> - salem</span>
            </p>
          </div>
          
        </div>
      </div>
    );
  }
}
