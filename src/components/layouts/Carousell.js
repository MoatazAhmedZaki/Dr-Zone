import React, { Component } from 'react'
import {Carousel} from 'react-bootstrap'
import "../stylesheets/Carousell.css"

export default class Carousell extends Component {
    render() {
        return (
            <Carousel className="homecarousel w-90 py-5">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="
                https://ichef.bbci.co.uk/news/976/cpsprodpb/180DF/production/_105772589_ed577158-e304-493a-8a79-fc21432ed065.jpg"
                alt="First slide"
              />
              {/* <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://blog.bcbsnc.com/wp-content/uploads/2017/07/shutterstock_508217206.jpg"
                alt="second slide"
              />
{/*           
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://cdn.digitalhealth.net/wp-content/uploads/2020/01/ar-surgery-shutterstock.jpg"
                alt="Third slide"

              />
          
              {/* <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption> */}
            </Carousel.Item>
          </Carousel>
        )
    }
}
