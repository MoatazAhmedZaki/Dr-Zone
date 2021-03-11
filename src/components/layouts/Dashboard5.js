import React, { Component } from 'react'
import "../stylesheets/Dashboard5.css"
import { LineChart } from 'react-chartkick'
import 'chart.js'
export default class Dashboard5 extends Component {
    render() {
        return (
            <div className="my-4  shadow status">
            <h2 className="p-3">STATUS</h2>
                
            <LineChart  width="auto" height="auto" colors={["#008BFF" ]}  data={{"1/10": 1, "2/10": 3 , "3/10": 1 , "4/10": 4 , "5/10": 3}}  />


            </div>
        )
    }
}
