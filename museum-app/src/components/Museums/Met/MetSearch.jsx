import React,{useState} from 'react'
import Search from './Search'
import './MetSearch.css'

function MetSearch(props) {
    const initialState=""
    const [searchQuery,setSearchQuery]=useState("")
    const [arrayID,setArrayID]=useState([0])
    const [index,setIndex]=useState(0)


    let url_array=`https://collectionapi.metmuseum.org/public/collection/v1/search?&${props.department}hasImages=true&q=${searchQuery.search}`
    
    const next=()=>{
        if(index!==arrayID.length-1){
            setIndex(index+1)
        }
        
    }
    const last=()=>{
        if(index!==0){
            setIndex(index-1)
        }
    }

    const getId =(url)=>{
        fetch(url)
            .then((res) => res.json())
            .then(res => {
                setArrayID(res.objectIDs)
            })
            .catch(console.error);
        }

    

    const handleChange = (event)=>{
        console.log(arrayID[index])
        setSearchQuery({ ...setSearchQuery, [event.target.id]: event.target.value });
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        // do something with the data in the component state
        console.log(searchQuery);
        // clear the form
        if(searchQuery.length!==0){
            setIndex(0)
            getId(url_array)
            setSearchQuery(initialState);
            setArrayID([0])
        }
    }
    return (
        <div>
            <div>
                
                <form onSubmit={handleSubmit} className=".form">
                    <label htmlFor="search">Search for Art: </label>

                    <div className="search_container">
                        <input
                            id="search"
                            type="text"
                            onChange={handleChange}
                            value={searchQuery.search}
                        />

                        <button type="submit" className="search_button">
                            <img className="search" src={process.env.PUBLIC_URL+'/icons/search.png'}/>    
                        </button>
                        
                        

                    </div>
                    <div>
                        {/* <select value="criteria" className="criteria"> 
                            <option value="Artist Name">Artist Name</option>
                            <option value="Art Title">Art Title</option>
                        </select> */}

                    </div>
                    
                </form>
            </div>
            {arrayID[0]!==0 &&
                <div className="image_container">

                    <div className="buttonBlock">
                        <img onClick={last} className="next" style={{transform: 'rotate(180deg)'} } src={process.env.PUBLIC_URL+'/icons/next.jpeg'}/>
                    </div> 

                    <div className="imageBlock">
                        {arrayID[index]===0 ? <div><h1>search for art</h1></div> :<Search objectID={arrayID[index]}/>}
                    </div>
                    
                    <div className="buttonBlock">
                        <img onClick={next} className="next" src={process.env.PUBLIC_URL+'/icons/next.jpeg'}/>
                    </div>

                </div>
            
            }
            
            
        </div>
    )
}

export default MetSearch