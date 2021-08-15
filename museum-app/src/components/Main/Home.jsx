import React,{useState} from 'react'


import './Home.css'
function Home(props) {
    return (
        <div className="container" >
            <img id="met_image" src={process.env.PUBLIC_URL+'/Museum_images/'+props.image}/>
        </div>
        
    )
}

export default Home
