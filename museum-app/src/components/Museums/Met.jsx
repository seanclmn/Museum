import React,{useState, useEffect} from 'react'
import './Met.css'

function Met() {
    const url_array="https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=sunflowers"


    const [arrayID,setArrayID]=useState([])
    const [objectID,setObjectID]=useState([])

    useEffect(()=>{
        fetch(url_array)
            .then((res) => res.json())
            .then(res => {
                setArrayID(res.objectIDs)
            })
            .catch(console.error);
        }
    )
    
    const url_object=`https://collectionapi.metmuseum.org/public/collection/v1/objects/${arrayID[2]}`

    useEffect(()=>{
        fetch(url_object)
            .then((res) => res.json())
            .then(res => {
                setObjectID(res.primaryImage)
            })
            .catch(console.error);
        }

    )
    
    

    return (
        <div>
            <div className="grid_container">
                <div className="block">
                    <img id = "block_image" src={objectID}/>
                </div>

            </div>
        </div>
    )
}

export default Met
