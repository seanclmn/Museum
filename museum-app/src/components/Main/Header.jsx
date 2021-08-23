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
                <Link to="/met" className="header_item" onMouseOver={()=>{
                    props.setImage('./met.jpeg')
                    props.setMuseum('Met')
                    }}>                 
                    <h3 style={{color: "white"}}>The Met</h3>
                </Link>

                <Link to="/AIC" className="header_item" onMouseOver={()=>{
                    props.setImage('./AIC.jpeg')
                    props.setMuseum('AIC')
                    
                    }}>                 
                    <h3 style={{color: "white"}}>The Art Institute of Chicago</h3>
                </Link>

                {/* <Link to="/met" className="header_item" onMouseOver={()=>{
                    props.setImage('./met.jpeg')
                    props.setMuseum('Met')
                    }}>                 
                    <h3 style={{color: "white"}}>The Met</h3>
                </Link> */}
                
            </div>

            <div className="header_item" id="right_header">
                <Link to='/about' >
                    <h3 style={{color: "white"}}>About</h3>
                </Link>
            </div>

        </div>
        
    )
}

export default Header
