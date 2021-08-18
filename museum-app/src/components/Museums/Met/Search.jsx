import React,{useState, useEffect} from 'react'

function Search(props) {
    const url_object=`https://collectionapi.metmuseum.org/public/collection/v1/objects/${props.objectID}`



    const [object,setObject]=useState({})
    useEffect(()=>{
        fetch(url_object)
            .then((res) => res.json())
            .then(res => {
                setObject(res)
            })
            .catch(console.error);
        }
    
    )
    return (
        <div className="block">
            <img id = "block_image" src={object.primaryImage} alt={object.title}/>
            {object.title!=='' ? <p style={{fontWeight: "bold"}}>'{object.title}'</p>: <p style={{fontWeight: "bold"}}>'Unknown'</p>}
            <p >{object.artistAlphaSort}</p>
        </div>
    )
}

export default Search
