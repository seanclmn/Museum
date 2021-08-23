import React,{useState} from 'react'
import Search from './Search'
import './AICSearch.css'


function AICSearch() {
    const initialState=""
    const [searchQuery,setSearchQuery]=useState("")
    const [arrayID,setArrayID]=useState(null)
    const [index,setIndex]=useState(0)

    let url_array=`https://api.artic.edu/api/v1/artworks/search?q=${searchQuery.search}&query[term][is_public_domain]=true`
    
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
                setArrayID(res.data)
            })
            .catch(console.error);
        }

    

    const handleChange = (event)=>{
        setSearchQuery({ ...setSearchQuery, [event.target.id]: event.target.value });
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        // do something with the data in the component state
        
        // clear the form
        if(searchQuery.length!==0){
            setIndex(0)
            getId(url_array)
            setSearchQuery(initialState);
            // setArrayID([{}])
            
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
            {arrayID!==null ?

                <div className="image_container">

                    <div className="buttonBlock">
                        <img onClick={last} className="next" style={{transform: 'rotate(180deg)'} } src={process.env.PUBLIC_URL+'/icons/next.jpeg'}/>
                    </div> 

                    <div className="imageBlock">
                        <Search objectID={arrayID[index].id}/>
                    </div>
                        
                    <div className="buttonBlock">
                        <img onClick={next} className="next" src={process.env.PUBLIC_URL+'/icons/next.jpeg'}/>
                    </div>


                </div>

                :

                <div className="image_container">

                    <div className="buttonBlock">
                        <img onClick={last} className="next" style={{transform: 'rotate(180deg)'} } src={process.env.PUBLIC_URL+'/icons/next.jpeg'}/>
                    </div> 

                    <div className="imageBlock">
                        No results. Keep searching!
                    </div>
                        
                    <div className="buttonBlock">
                        <img onClick={next} className="next" src={process.env.PUBLIC_URL+'/icons/next.jpeg'}/>
                    </div>


                </div>

                
            
            }
            
            
        </div>
    )
}

export default AICSearch
