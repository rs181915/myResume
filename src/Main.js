import React from 'react'
import Footer_left from './Footer_left'
import Footer_right from './Footer_right'
import './main.css'
import Main_left from './Main_left'
import Main_right from './Main_right'
import Strengths from './Strengths'
import Top from './Top'
function Main() {
    return (
        <div>
<br></br>
            <Top/>           

        <div className="Main">
            <Strengths/>           
        </div>
        <br></br>
        <div className="Main">
            <Main_left/>
            <Main_right/>
           
        </div>
<br></br>
        <div className="Main full">
            <Footer_left/>
             <Footer_right/>
           
        </div>

        </div>
    )
}

export default Main
