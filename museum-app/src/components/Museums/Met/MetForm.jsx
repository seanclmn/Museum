import React,{useState,seEffect} from 'react'

function MetForm(props) {
    const initialState=""


    const[metSearch,setMetSearch]=useState("")
    const[responseObject,setResponseObject]=useState({})

    function setArray(array){
        props.setArrayId(array)

    }  
    

    function getId(url){
        
        fetch(url)
            .then((res) => res.json())
            .then((res)=>console.log(res))
            .then(res => {
                setResponseObject(res)
            })
            .catch(console.error);
        }


    
    




    const handleChange = (event)=>{
        console.log(metSearch)
        setMetSearch({ ...setMetSearch, [event.target.id]: event.target.value });
    }
    
    const handleSubmit = (event) =>{
        event.preventDefault();
        // do something with the data in the component state
        console.log(metSearch);
        // clear the form

        let url_array=`https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=${metSearch.search}`
        
        getId(url_array)
        setArray(responseObject.objectIds)
        // props.setSearchQuery(initialState);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="search"></label>
                    <input
                        id="search"
                        type="text"
                        onChange={handleChange}
                        // value={metSearch}
                    />

                <button type="submit">Search</button>
            </form>
        </div>
    )   
}

export default MetForm
