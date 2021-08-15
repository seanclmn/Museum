import React from 'react'
import { Route,Link } from 'react-router-dom'

import './Header.css'


function Header(props) {
    return (
        <div className="header_container">

            <div id="left_header">
                <Link to='/' className="header_item">
                    <h3>The Art Archives</h3>
                </Link>
            </div>

            <div id="center_header">
                <Link to="/Met" className="header_item" onMouseOver={()=>{props.setImage('./met.jpeg')}}>                 
                    <h3>The Met</h3>
                </Link>
                <Link to="/Getty" className="header_item" onMouseOver={()=>{props.setImage('./Getty.webp')}}>                 
                    <h3>The Getty</h3>
                </Link>
                <Link to="/Met" className="header_item" onMouseOver={()=>{props.setImage('./met.jpeg')}}>                 
                    <h3>The Met</h3>
                </Link>
                
            </div>

            <div className="header_item" id="right_header">
                <h3>Settings</h3>
            </div>

        </div>
        
    )
}

export default Header
