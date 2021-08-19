import React from 'react'
import { Link } from 'react-router-dom'

import './Header.css'


function Header(props) {
    return (
        <div className="header_container">

            <div id="left_header">
                <Link to='/' className="header_item">
                    <h3 className="logo">The Art Archives</h3>
                </Link>
            </div>

            <div id="center_header">
                <Link to="/met" className="header_item" onMouseOver={()=>{props.setImage('./met.jpeg')}}>                 
                    <h3 style={{color: "black"}}>The Met</h3>
                </Link>
                <Link to="/getty" className="header_item" onMouseOver={()=>{props.setImage('./Getty.webp')}}>                 
                    <h3 style={{color: "black"}}>The Getty</h3>
                </Link>
                <Link to="/met" className="header_item" onMouseOver={()=>{props.setImage('./met.jpeg')}}>                 
                    <h3 style={{color: "black"}}>The Met</h3>
                </Link>
                
            </div>

            <div className="header_item" id="right_header">
                <h3>About</h3>
            </div>

        </div>
        
    )
}

export default Header
