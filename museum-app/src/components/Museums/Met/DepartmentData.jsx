import React, {useState} from 'react'

function DepartmentData() {

    let idsWithImages={
        1: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: [], 10: [], 11: [], 12: [],13: [],14: [], 15: [], 16: [],17: [], 18: [], 19: [], 21: []

    }

    const[object,setObject]=useState({})
    const[arrayId,setArrayId]=useState([])

    const departmentNums =[1,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,21]

    let url = `https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=1`
    fetch(url)
        .then((res) => res.json())
        .then(res => {
            setArrayId(res.objectIDs)
        })
        .catch(console.error);



    
    
        
    for(let i=0; i< arrayId.length-1;i++){
        let url_object = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${arrayId[i]}`
        fetch(url_object)
            .then((res) => res.json())
            .then(res => {
                if(res.primaryImage!==""){
                    idsWithImages[1].push(arrayId[i])
                }
            })
            .catch(console.error);

    }


    return (
        <div>
            {idsWithImages[1][0]}
        </div>
    )
}

export default DepartmentData
