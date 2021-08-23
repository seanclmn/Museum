import React,{useState,useEffect} from 'react'

function Search({objectID}) {

    const [object,setObject]=useState({})
    const url_object=`https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`
    
    
    useEffect(()=>{
        if(objectID>0){
            fetch(url_object)
            .then((res) => res.json())
            .then(res => {
                setObject(res)
            })
            .catch(console.error);
        }
    }, [objectID])
    
    return (
        <div className="block">
            <img id = "block_image" src={object.primaryImage} alt={object.title}/>
            <div >
                <p className="artist_info" style={{fontWeight: "bold"}}>'{object.title}'</p>
                <p className="artist_info" >{object.artistAlphaSort}</p>
            </div>
        </div>
    )
}

export default Search
