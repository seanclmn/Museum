import React from 'react'
import { Link } from 'react-router-dom'

import './Met.css'
function Met() {
    return (
        <div >
            
            <div className="MetLinks" id="MetSearchLink">
                <Link to='/met/search'>
                    <button className="MetLinkButton">
                        <h3>Search for Artwork</h3>
                    </button>
                </Link>
            </div>
            

            <Link>
                <div className="MetLinks" id="Departments">
                    <button className="MetLinkButton">
                        <h3>Explore Collections</h3>
                    </button>
                </div>
            
            </Link>

            <Link>
                <div className="MetLinks" id="AboutMet">
                    <button className="MetLinkButton">
                        <h3>Learn About the Met</h3>
                    </button>
                </div>
            
            </Link>



        </div>
    )
}

export default Met
