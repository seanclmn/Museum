import React from 'react'
import { Link } from 'react-router-dom'
import './DepartmentSelect.css'

function DepartmentSelect() {
    const departmentArray =[{"departmentId":1,"displayName":"American Decorative Arts"},{"departmentId":3,"displayName":"Ancient Near Eastern Art"},{"departmentId":4,"displayName":"Arms and Armor"},{"departmentId":5,"displayName":"Arts of Africa, Oceania, and the Americas"},{"departmentId":6,"displayName":"Asian Art"},{"departmentId":7,"displayName":"The Cloisters"},{"departmentId":8,"displayName":"The Costume Institute"},{"departmentId":9,"displayName":"Drawings and Prints"},{"departmentId":10,"displayName":"Egyptian Art"},{"departmentId":11,"displayName":"European Paintings"},{"departmentId":12,"displayName":"European Sculpture and Decorative Arts"},{"departmentId":13,"displayName":"Greek and Roman Art"},{"departmentId":14,"displayName":"Islamic Art"},{"departmentId":15,"displayName":"The Robert Lehman Collection"},{"departmentId":16,"displayName":"The Libraries"},{"departmentId":17,"displayName":"Medieval Art"},{"departmentId":18,"displayName":"Musical Instruments"},{"departmentId":19,"displayName":"Photographs"},{"departmentId":21,"displayName":"Modern Art"}]
    return(
        <div className="departments_container">
            {
                departmentArray.map((element)=>{
                    return(
                        <Link to={`/met/department/${element.departmentId}`} key={element.departmentId}>
                            <div className="department_block">
                                <div>
                                    <h3>{element.displayName}</h3>
                                </div>
                            </div>
                        </Link>

                    )
                    
                })

            }
            


        </div>


    )
    // return (
    //     <div className="departments_container">
    //         <Link to={`/met/department/${1}`} key={1}>
    //             <div className="department_block">
    //                 <div>
    //                     <h3>Explore American Decorative Arts</h3>
    //                 </div>
    //             </div>
    //         </Link>
            
    //         <Link to={`/met/department/${3}`} key={3}>
    //             <div className="department_block">
    //                 <div>
    //                     <h3>Explore Ancient Near Eastern Art</h3>
    //                 </div>
    //             </div>
            
    //         </Link>
            
    //         <Link to={`/met/department/${4}`} key={4}>
    //             <div className="department_block">
    //                 <div>
    //                     <h3>Explore Arms and Armor</h3>
    //                 </div>
    //             </div>
            
    //         </Link>
            

    //         <Link to={`/met/department/${5}`} key={5}>

    //             <div className="department_block">
    //                 <div>
    //                     <h3>Explore Arts of Africa, Oceania, and the Americas</h3>
    //                 </div>
    //             </div>
            
    //         </Link>


    //         <Link to={`/met/department/${6}`} key={6}>
    //             <div className="department_block">
    //                 <div>
    //                     <h3>Explore Asian Art</h3>
    //                 </div>
    //             </div>
            
    //         </Link>
            

    //         <Link to={`/met/department/${7}`} key={7}>

    //             <div className="department_block">
    //                 <div>
    //                     <h3>Explore The Cloisters</h3>
    //                 </div>
    //             </div>
            
            
    //         </Link>
            
    //         <Link to={`/met/department/${8}`} key={8}>

    //             <div className="department_block">
    //                 <div>
    //                     <h3>Explore The Costume Institute</h3>
    //                 </div>
    //             </div>
            
    //         </Link>
            

    //         <Link to={`/met/department/${9}`} key={9}>
    //             <div className="department_block">
    //                 <div>
    //                     <h3>Explore Drawings and Prints</h3>
    //                 </div>
    //             </div>
    //         </Link>


    //         <div className="department_block">
    //             <div>
    //                 <h3>Explore Egyptian Art</h3>
    //             </div>
    //         </div>



    //         <div className="department_block">
    //             <div>
    //                 <h3>Explore European Paintings</h3>
    //             </div>
    //         </div>
    //         <div className="department_block">
    //             <div>
    //                 <h3>Explore European Sculpture and Decorative Arts</h3>
    //             </div>
    //         </div>
    //         <div className="department_block">
    //             <div>
    //                 <h3>Explore Greek and Roman Art</h3>
    //             </div>
    //         </div>
    //         <div className="department_block">
    //             <div>
    //                 <h3>Explore Islamic Art</h3>
    //             </div>
    //         </div>
    //         <div className="department_block">
    //             <div>
    //                 <h3>Explore The Robert Lehman Collection</h3>
    //             </div>
    //         </div>
    //         <div className="department_block">
    //             <div>
    //                 <h3>Explore The Libraries</h3>
    //             </div>
    //         </div>
    //         <div className="department_block">
    //             <div>
    //                 <h3>Explore Medieval Art</h3>
    //             </div>
    //         </div>
    //         <div className="department_block">
    //             <div>
    //                 <h3>Explore Musical Instruments</h3>
    //             </div>
    //         </div>
    //         <div className="department_block">
    //             <div>
    //                 <h3>Explore Photographs</h3>
    //             </div>
    //         </div>
    //         <div className="department_block">
    //             <div>
    //                 <h3>Explore Modern Art</h3>
    //             </div>
    //         </div>
    //     </div>
    // )
}

export default DepartmentSelect
