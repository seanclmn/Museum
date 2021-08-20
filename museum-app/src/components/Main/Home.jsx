import React,{useState} from 'react'
import { Link } from 'react-router-dom'

import './Home.css'
function Home(props) {
    return (
        <div className="home_container">
            <div id="image" style={{backgroundImage: `url(${process.env.PUBLIC_URL+'/Museum_images/'+props.image})`}}>
                <Link to={`/${props.museum}`}>
                    <div className="LinkButton">
                        <p style={{color: "white"}}>Explore The {props.museum}</p>
                    </div>
                </Link>
            </div>
        </div>
        
    )
}

export default Home
