import React, { Component } from 'react'
import OurFeatures from '../layouts/OurFeatures'
import Carousell from '../layouts/Carousell'
// import HomeHeader from "../layouts/HomeHeader.js"
import HomeHeader2 from "../layouts/HomeHeader2.js"

import CodeSection from '../layouts/CodeSection'
import Navbaar from '../layouts/Navbaar'

export default class HomePage extends Component {
  
  
    render() {
        return (
            <div >

{window.innerWidth < 500?  <div className="DrSearch"> <Navbaar/> </div> 
:

<Navbaar/>}

<HomeHeader2/>
                {/* <HomeHeader/> */}
             <div className="home">
                <CodeSection/>
               <OurFeatures/> 
               <Carousell/>
               </div>


            </div>
        )
    }
}
