import React, { Component } from 'react'
import "../stylesheets/Dashboard2.css"
import {Accordion ,Card ,Button} from "react-bootstrap"
export default class Dashboard2 extends Component {
    render() {
        return (
            <div className="my-4 p-2 shadow Chapters">
                <h2 className="p-3">CHAPTERS</h2>
            
  <Accordion defaultActiveKey="0" >
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button}  eventKey="0">
      Tilte
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>
      <div class="shadow-sm p-3 mb-1 ">Small Card</div>
      <div class="shadow-sm p-3 mb-1 ">Small Card</div>
      <div class="shadow-sm p-3 mb-1 ">Small Card</div>
                        </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button}  eventKey="1">
      Tilte
     </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body> <div class="shadow-sm p-3 mb-1 ">Small Card</div>
      <div class="shadow-sm p-3 mb-1 ">Small Card</div>
      <div class="shadow-sm p-3 mb-1 ">Small Card</div>

                        </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button}  eventKey="2">
      Tilte
     </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="2">
      <Card.Body> <div class="shadow-sm p-3 mb-1 ">Small Card</div>
      <div class="shadow-sm p-3 mb-1 ">Small Card</div>
      <div class="shadow-sm p-3 mb-1 ">Small Card</div></Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
</div>

        )
    }
}
