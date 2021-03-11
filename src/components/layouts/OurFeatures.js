import React, { Component } from 'react'
import {  withRouter } from 'react-router-dom';


import { connect } from 'react-redux';
import { changeLang } from '../../globalState/actions/langActions';
import PropTypes from 'prop-types';
import "../stylesheets/OurFeatures.css"

const text = require('../localization/lan.json');
class OurFeatures extends Component {
      
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

<div class="card my-5 w-90" >
  <div class="row no-gutters">
    <div class="col-md-4">
      {/* <img src="https://ak7.picdn.net/shutterstock/videos/24065107/thumb/1.jpg" class="card-img" alt="..."/> */}
      <img src={require('../imgs/CardImg1.jpg')} class="card-img" alt="Dr-Zone Features"/>

    </div>
    <div class="col-md-8">
      <div class="card-body">
      {/* <div className="soon-layer"> <h3>{this.state.text.Soon} </h3></div> */}

        <h5 class="card-title">   {this.state.text.CardTitle} <span>{this.state.text.Soon}</span></h5>
        <p class="card-text">{this.state.text.CardPrag}</p>
        <p class="card-text">{this.state.text.CardPrag2}</p>

      </div>
    </div>
  </div>

</div>
                
        )
    }
}

OurFeatures.propTypes = {
    changeLang: PropTypes.func.isRequired
  };
  
  const mapStateToProps = state => ({
    language: state.lang.language
  });
export default connect(mapStateToProps, { changeLang })(withRouter(OurFeatures));
