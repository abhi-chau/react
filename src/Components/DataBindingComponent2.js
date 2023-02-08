// import { useState } from "react";

// export default function DataBindingComponent2()
// {
//     const [categories] = useState(["Electronics", "Footwear"]) ;
//     return(
//         <div className="container">
//             <ol>
//                 {
//                     categories.map(category=>
//                         <li key={category}>{category}</li>
//                         )
//                 }
//             </ol>
//         </div>
//     )
//  }

//Nasa API

// import { useEffect, useState } from "react";
// export default function DataBindingComponent2()
// {
//     const[mars,setMars] = useState();

//     useEffect(()=>{
//         fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY")
//         .then(response=>response.json())
//         .then(data=>{
//             setMars(data);
//         })
//     },[])
//     return(
//         <div className="container">
//           <h2>Mars Photos</h2>
//           <table className="table table-hover">
//              <thead>
//                 <tr>
//                     <th>Photo Id</th>
//                     <th>Camera Name</th>
//                     <th>Rover Name</th>
//                     <th>Preview</th>
//                 </tr>
//              </thead>
//              <tbody>
//                 {
//                     mars.photos.map(photo=>
//                         <tr>
//                             <td>{photo.id}</td>
//                             <td>{photo.camera.full_name}</td>
//                             <td>{photo.rover.name}</td>
//                             <td>
//                                 <img src={photo.img_src} width="100" height="100"/>
//                             </td>
//                         </tr>
//                         )
//                 }
//              </tbody>
//           </table>
//         </div>
//     )

// }

// NASA API WITH Card Style 

import { useState ,useEffect } from "react";
export default function DataBindingComponent2()
{
    const[mars,setMars] = useState();
    useEffect(()=>{
        fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY")
        .then(response=>response.json())
        .then(data=>{
            setMars(data);
        })
    },[]) 
    return(
        <div className="container">
          <h2>Mars Photos</h2>
          <div className="d-flex flex-wrap">
            {
                mars.photos.map(photo=>
                    <div className="card p-2 m-2 w-25">
                       <img src={photo.img_src} className="card-img-top" height="150"/>
                       <div className="card-header">
                          <h2>{photo.camera.full_name}</h2>
                       </div>
                       <div className="card-body">
                        <p>{photo.rover.name}</p>
                       </div>
                    </div>
                    )
            }
          </div>
        </div>
    )   
    
}



