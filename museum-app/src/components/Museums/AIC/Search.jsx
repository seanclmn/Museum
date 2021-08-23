import React,{useState,useEffect} from 'react'

function Search({objectID}) {

    const [object,setObject]=useState({})
    const [info,setInfo]=useState([0,"",""])
    const url_object=`https://api.artic.edu/api/v1/artworks/${objectID}?fields=id,title,image_id,artist_display`

    useEffect(()=>{
        if(objectID>0){
            fetch(url_object)
            .then((res) => res.json())
            .then(res => {
                setInfo([res.data.image_id, res.data.title, res.data.artist_display.split("\n",1)])
            })
            .catch(console.error);
        }
    }, [objectID])
    return (
        <div className="block">
            <img id = "block_image" src={`https://www.artic.edu/iiif/2/${info[0]}/full/843,/0/default.jpg`} alt={object.title}/>
            <div >
                
                <p className="artist_info" style={{fontWeight: "bold"}}>'{info[1]}'</p>
                <p className="artist_info" >{info[2]}</p>
            </div>
            

        </div>
    )
}

export default Search
