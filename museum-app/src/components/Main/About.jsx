import React from 'react'
import './About.css'


function About() {
    return (
        <div className="about_container">
            <header className="about_header">
                <h2>
                    The Art Archives 
                </h2>
                <h4>
                    by Sean Coleman
                </h4>
            </header>

            <p>
                &emsp;&emsp;&emsp; This project was started as a way for people to explore art museums from around the country safely during a pandemic.
                As of right now, there are only two museums available: the Metropolitan Museum of Art in New York City, New York, and the Art Institute of Chicago in Chicago, Illinois.
                The Met's tab has both a general search page and a departments page where you can explore the different departments of the museum. 
                The Art Institute of Chicago has a general search page but the departments page is still under construction. Both tabs also have a "learn about" link which will link you to information about each museum.
                <br/><br/>
                &emsp;&emsp;&emsp; The data is pulled in via publically available Web APIs deployed by the museums themselves. This web app is deployed via heroku.
            </p>
        </div>
    )
}

export default About
