import React, { Component } from 'react'
import "../stylesheets/Dashboard.css"
import {Row ,Col } from 'react-bootstrap'
export default class Dashboard1 extends Component {
    render() {
        return (
            <div className="circles-panels shadow">
 
<h2 className="p-3 m-2">DASHBOARD</h2>
<Row className="px-3">     
    <Col lg={3}   md={3} sm={3} className="p-3 ">  
<div className="Dashboard-circle shadow mx-auto">
<i class="far fa-building fa-2x"></i>
<p className="Dashboard-circle-number">16</p>
<p className="Dashboard-circle-title">Chapters</p>
</div>
</Col>  
<Col lg={3}   md={3} sm={3} className="p-3">  
<div className="Dashboard-circle shadow mx-auto">
<i class="far fa-building fa-2x"></i>
<p className="Dashboard-circle-number">16</p>
<p className="Dashboard-circle-title">Chapters</p>
</div>
</Col> 
<Col lg={3}   md={3} sm={3} className="p-3">  
<div className="Dashboard-circle shadow mx-auto">
<i class="far fa-building fa-2x"></i>
<p className="Dashboard-circle-number">16</p>
<p className="Dashboard-circle-title">Chapters</p>
</div>
</Col> 
<Col lg={3}   md={3} sm={3} className="p-3">  
<div className="Dashboard-circle shadow mx-auto">
<i class="far fa-building fa-2x"></i>
<p className="Dashboard-circle-number">16</p>
<p className="Dashboard-circle-title">Chapters</p>
</div>
</Col> 




</Row>   
            </div>
        )
    }
}
