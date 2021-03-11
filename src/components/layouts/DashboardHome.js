import React, { Component } from 'react'
import { Container,Row ,Col } from 'react-bootstrap'
import Dashboard1 from './Dashboard1'
import Dashboard2 from './Dashboard2'
import Dashboard3 from './Dashboard3'
import Dashboard4 from './Dashboard4'
import Dashboard5 from './Dashboard5'

export default class DashboardHome extends Component {
    render() {
        return (
            <Container fluid>
               <Row>
               <Col lg={8} md={8} sm={8} className="">

<Dashboard1/>

<Row>
<Col lg={6} md={6} sm={6} className="">

   <Dashboard2/>
</Col>

<Col lg={6} md={6} sm={6} className="">

<Dashboard3/>
    
    </Col>




</Row>


                   </Col> 
                   <Col lg={4} md={4} sm={4} className="">
<Dashboard4/>
<Dashboard5/>

                   </Col> 
                   
                   
                   </Row> 
               
            </Container>
        )
    }
}
