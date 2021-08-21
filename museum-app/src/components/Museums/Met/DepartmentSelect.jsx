import React from 'react'
import { Link } from 'react-router-dom'
import './DepartmentSelect.css'

function DepartmentSelect() {
    const departmentArray =[{"departmentId":1,"displayName":"American Decorative Arts","image":"data:image/jpeg;base64,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"},
                            {"departmentId":3,"displayName":"Ancient Near Eastern Art","image": "https://www.metmuseum.org/blogs/-/media/63df7f7d38724f649870145ce3afd8ed.ashx?la=en"},
                            {"departmentId":4,"displayName":"Arms and Armor","image": "http://www.metmuseum.org/-/media/images/about-the-met/curatorial-departments/arms-and-armor/arms-and-armor_teaser.jpg?la=en"},
                            {"departmentId":5,"displayName":"Arts of Africa, Oceania, and the Americas","image": "https://www.metmuseum.org/-/media/images/about-the-met/curatorial-departments/aaoa/promos/oceania-700.jpg?la=en"},
                            {"departmentId":6,"displayName":"Asian Art", "image": "http://www.metmuseum.org/-/media/images/blogs/now-at-the-met/2015/2015_02/asian-art-secrets/8.jpg?la=en"},
                            {"departmentId":7,"displayName":"The Cloisters","image": "https://1.bp.blogspot.com/-u3_Mvz3EqG4/WKR2X8TNGSI/AAAAAAABCwU/-_4SUWqN_ZkkXTOiru5-dunFVzAoQL89gCLcB/s1600/Medieval%2BSculpture%2BHall%2BGallery%2B305.jpg"},
                            {"departmentId":8,"displayName":"The Costume Institute","image": "http://www.metropolismag.com/content/uploads/2018/05/04.-HBMedievalSculptureHallGalleryView.jpg"},
                            {"departmentId":9,"displayName":"Drawings and Prints","image": "https://d3qi0qp55mx5f5.cloudfront.net/smartmuseum/i/artwork/Yale.jpg?mtime=1450114128"},
                            {"departmentId":10,"displayName":"Egyptian Art", "image": "https://i1.wp.com/adventuringwoman.com/wp-content/uploads/2018/05/IMG_4774-Cropped-1024x735.jpg?resize=1024%2C735"},
                            {"departmentId":11,"displayName":"European Paintings", "image": "http://www.metmuseum.org/-/media/images/about-the-met/curatorial-departments/european-paintings/zodiac-department-page/european_paintings_teaser.jpg?la=en"},
                            {"departmentId":12,"displayName":"European Sculpture and Decorative Arts","image": "https://www.metmuseum.org/-/media/images/about-the-met/curatorial-departments/esda/highlights.jpg?la=en&h=720&w=1520&la=en&hash=907BE447578231E2C3FCEF5B833B4BF3"},
                            {"departmentId":13,"displayName":"Greek and Roman Art", "image": "https://dmdlnu87i51n1.cloudfront.net/v1/uk/cjpv99hvh1k3z0107o5c9t8ib/0x0:720x617/960x960/308_mu_em_metantiquities_05.jpg"},
                            {"departmentId":14,"displayName":"Islamic Art","image": "https://www.metmuseum.org/-/media/images/about-the-met/curatorial-departments/islamic/islamic_teaser.jpg?la=en"},
                            {"departmentId":15,"displayName":"The Robert Lehman Collection", "image": "https://www.metmuseum.org/-/media/images/about-the-met/curatorial-departments/robert-lehman/lehman_teaser.jpg?la=en"},
                            {"departmentId":16,"displayName":"The Libraries","image": "https://www.metmuseum.org/-/media/images/art/libraries-and-research-centers/watson-library/watson-zodiac/about/about_the_library_lg.jpg?la=en&h=819&w=1520&la=en&hash=8067AED20AA6C95CAEBF9F7B5E8C024A"},
                            {"departmentId":17,"displayName":"Medieval Art","image": "https://collectionapi.metmuseum.org/api/collection/v1/iiif/467640/940927/main-image"},
                            {"departmentId":18,"displayName":"Musical Instruments","image": "https://www.metmuseum.org/-/media/images/blogs/metkids/2019/musical-instruments-intro/gallerieslarge.jpg?la=en&h=1026&w=1520&la=en&hash=37F0D9F59F98E0E94E9C1B41551E3E45"},
                            {"departmentId":19,"displayName":"Photographs","image": "https://www.metmuseum.org/-/media/images/about-the-met/curatorial-departments/photographs/new-photographs-teaser.jpg?la=en"},
                            {"departmentId":21,"displayName":"Modern Art","image": "https://www.metmuseum.org/blogs/~/media/737FCE287C004F23B05176B3AF5B32A8.ashx"}]
    return(
        <div className="departments_container">
            {
                departmentArray.map((element)=>{
                    return(
                        <Link to={`/met/department/${element.departmentId}`} key={element.departmentId}>
                            <div className="department_block" style={{backgroundImage: `url(${element.image})`}}>
                                <div className="department_block_text">
                                    <h4 style={{color: "white"}}>{element.displayName}</h4>
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
