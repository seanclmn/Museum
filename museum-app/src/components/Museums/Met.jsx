import React from 'react'
import { Link } from 'react-router-dom'

import './Met.css'
function Met() {
    return (
        <div >

            <div className="MetLinks" id="MetSearchLink">
                <Link to='/met/search'>
                    <button className="MetLinkButton">
                        <h3 style={{color: "white"}}>Search for Artwork</h3>
                    </button>
                </Link>
            </div>

            <div className="MetLinks" id="Departments">
                <Link to={`/met/department/`}>
                    <button className="MetLinkButton">
                        <h3 style={{color: "white"}}>Explore Collections</h3>
                    </button>
                </Link>
            </div>

            <div className="MetLinks" id="AboutMet">
                <a href="https://www.metmuseum.org/about-the-met">
                    <button className="MetLinkButton">
                        <h3 style={{color: "white"}}>Learn About the Met</h3>
                    </button>
                    
                </a>
            </div>
        </div>
    )
}

export default Met
