import React, { Component } from 'react'

import "../stylesheets/Footer.css"
import { Container ,Row ,Col } from 'react-bootstrap'
import {  withRouter, Link } from 'react-router-dom';


import { connect } from 'react-redux';
import { changeLang } from '../../globalState/actions/langActions';
import PropTypes from 'prop-types';
const text = require('../localization/lan.json'); 
class Footer extends Component {
         
    constructor(props) {
        super(props);
        this.state = {
          text: text.en,
        };
      }
      checklang = () => {
        if (this.props.language === 'en') {
          this.setState({ text: text.en });
        } else {
          this.setState({ text: text.ar });
        }
      };
      componentDidUpdate(previousProps, previousState) {
        if (previousProps !== this.props) {
          if (this.props.language === 'ar') {
            this.setState({ text: text.ar });
          } else {
            this.setState({ text: text.en });
          }
        }
       
      };
    render() {
        return (
            <div className="footer">
                <Container className="py-5 text-center">
<Row>
<Col lg={3} md={6} sm={12}>
{/* <img src="https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo3.png" alt="logo" className="img-fluid"/> */}

<img src={require('../imgs/logo.png')} alt="logo" className="img-fluid"/>

<Link to="/" >   {this.state.text.footertitle1link1} </Link> 
<Link to="/" >   {this.state.text.footertitle1link2} </Link> 



</Col>

<Col lg={3} md={6} sm={12}>
<h3>{this.state.text.footertitle1} </h3>
<Link to="/" > {this.state.text.footertitle1link3} </Link> 




</Col>

<Col lg={3} md={6} sm={12}>
<h3>{this.state.text.footertitle2} </h3>
<Link to="/" >{this.state.text.footertitle1link4} </Link> 
<Link to="/" >{this.state.text.footertitle1link5} </Link> 
<Link to="/" >{this.state.text.footertitle1link6} </Link> 



</Col>

<Col lg={3} md={6} sm={12} className="fab-fa">
<h3>{this.state.text.footertitle3} </h3>
<a href="https://www.facebook.com" ><i class="fab fa-facebook-f fa-2x m-2"></i> </a> 
<a href="https://www.instagram.com" > <i class="fab fa-instagram fa-2x m-2"></i> </a> 

<a href="https://www.twitter.com" > <i class="fab fa-twitter fa-2x m-2"></i> </a> 



</Col>

</Row>



                </Container>
<div className="small-fo py-2"><Container>
  <Row>
  <Col lg={6} md={6} sm={12} >
<p>© 2020 Dr-Zone</p>
    </Col>
    <Col lg={6} md={6} sm={12} >
<p>Powered by <a href="/">Company Name </a></p>
    </Col>

  </Row>
  
  </Container></div>                
            </div>
        )
    }
}

Footer.propTypes = {
    changeLang: PropTypes.func.isRequired
  };
  
  const mapStateToProps = state => ({
    language: state.lang.language
  });
export default connect(mapStateToProps, { changeLang })(withRouter(Footer));
