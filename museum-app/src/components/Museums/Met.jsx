import React,{useState, useEffect} from 'react'
import './Met.css'

import MetForm from './Met/MetForm'
import Search from './Met/Search'

function Met() {
    const initialState=""
    const [searchQuery,setSearchQuery]=useState("")
    const [arrayID,setArrayID]=useState([])


    function getId(url){
        
        fetch(url)
            .then((res) => res.json())
            .then(res => {
                setArrayID(res.objectIDs.slice(0, 12))
            })
            .catch(console.error);
        }

    

    const handleChange = (event)=>{
        console.log(searchQuery)
        setSearchQuery({ ...setSearchQuery, [event.target.id]: event.target.value });
    }


    
    const handleSubmit = (event) =>{
        event.preventDefault();
        // do something with the data in the component state
        console.log(searchQuery);
        // clear the form

        let url_array=`https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=${searchQuery.search}`
        
        getId(url_array)
        setSearchQuery(initialState);
    }


    return (
        <div>
            <div>
                <form onSubmit={handleSubmit} >
                    <label htmlFor="search">Search for Art: </label>

                    <div className="search_container">
                        <input
                            id="search"
                            type="text"
                            onChange={handleChange}
                            value={searchQuery.search}
                        />

                        <button type="submit" className="search_button">Search</button>

                    </div>
                    
                </form>
            </div>
            <div className="grid_container">
                {arrayID!==null && arrayID.map(element=><Search objectID = {element}/>)}
            </div>
        </div>
    )
}

export default Met
