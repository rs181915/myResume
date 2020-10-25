import React from 'react'
import Info from './Info'
import './main_right.css'
function Main_right() {
    return (
        <div className="Main_right">
            <div className="heading left">
            <h4 className="">Skills</h4>
            </div>
            <div className="data_main">
            <Info heading="HTML 5" data="(Advanced)"/>
            <Info heading="CSS 3 + CSS Libraries" data="(Advanced)"/>
            <Info heading="Javascript" data="(Advanced)"/>
            <Info heading="React & Firebase" data="(Advanced)"/>
            <Info heading="APIs" data="(Intermediate)"/>
            <Info heading="PHP & MySQL" data="(Intermediate)"/>
            <Info heading="Photoshop" data="(Intermediate)"/>
            
            </div>
        </div>
    )
}

export default Main_right
