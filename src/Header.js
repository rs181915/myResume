import React from 'react'
import './header.css'
import './global.css'
function Header() {
    return (
        <div className="Header">
            <div className="profileImage">
            <img alt="Profile" src="https://rahuldeveloper.com/my_images/23.jpg"/>
            </div>
            <div className="introInfo">
                <div className="introInfo_top"><h2>Rahul</h2></div>
                <div className="introInfo_bottom">Full Stack React Developer </div>
            </div>
        </div>
    )
}

export default Header
