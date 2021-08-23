import React from 'react'
import { Link } from 'react-router-dom'

import './AIC.css'

function AIC() {
    return (
        <div>
            <div className="AICLinks" id="AICSearchLink">
                <Link to='/AIC/search'>
                    <button className="AICLinkButton">
                        <h3 style={{color: "white"}}>Search for Artwork</h3>
                    </button>
                </Link>
            </div>

            <div className="AICLinks" id="AICDepartments">
                <Link to="/AIC/department">
                    <button className="AICLinkButton">
                        <h3 style={{color: "white"}}>Explore Collections</h3>
                    </button>
                </Link>
            </div>

            <div className="AICLinks" id="AboutAIC">
                <a href='https://www.artic.edu/about-us/history'>
                    <button className="AICLinkButton">
                        <h3 style={{color: "white"}}>Learn About the AIC</h3>
                    </button>
                    
                </a>
            </div>

        </div>
    )
}

export default AIC
