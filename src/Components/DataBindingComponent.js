
//Primitive Types DataBinding Examples

import { useState } from "react";

// export default function DataBindingComponent()
// {
//     var Name = 'Samsung TV';
//     var price = '4500.00';
//     var Stock = 'true';
//     return(
//         <>
//         <div className="container">
//         <h2>Data Binding</h2>
//           <dl>
//             <dt>Name</dt>
//             <dd>{Name}</dd>
//             <dt>Price</dt>
//             <dd>{price}</dd>
//             <dt>Stock</dt>
//             <dd>{(Stock===true)?"Available":"Out of stock"}</dd>
//           </dl>
//         </div>
//         </>
//     )
// }


// Non Primitive Type Databinding example

// export default function DataBindingComponent()
// {
//   var categories = ["All","Electronics","Footwear","Fashion"];
//   return(
//     <>
//       <div className="container">
//         <h2>Arrays</h2>
//         <ol>
//          {
//            categories.map(category=>
//             <li key={category}>{category}</li>
//             )
//          } 
//         </ol>
//         <select>
//           {
//             categories.map(category=>
//              <option key={category}>{category}</option> 
//             )
//           }
//         </select>
//          <ul className="list-unstyled">
//            {
//             categories.map(category=>
//               <li key={category}><input type="checkbox"/>{category}</li>
//               )
//            }          
//          </ul>
//          <div>
//             {
//               categories.map(category=>
//                 <div key={category}>
//                    <button className="w-25">{category}</button>
//                 </div>
//                 )
//             }          
//          </div>       
//       </div>    
//     </>
//   )
// }


// Object type Data 

// export default function DataBindingComponent()
// {
//   var product = {"id":8,"title":"Pierced Owl Rose Gold Plated Stainless Steel Double","price":10.99,"description":"Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel","category":"jewelery","image":"https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg","rating":{"rate":1.9,"count":100}}
//   return(
//     <>
//      <div className="container-fluid">
//        <h2>product Details</h2>
//        <dl>
//          <dt>Title</dt>
//          <dd>{product.title}</dd>
//          <dt>price</dt>
//          <dd>{product.price}</dd>
//          <dt>preview</dt>
//          <dd><img alt="product preview" src={product.image} height="200" width="200"/></dd>
//          <dt>Rating</dt>
//          <dd><span className="bi bi-star-fill text-warning"></span>{product.rating.rate} </dd>
//        </dl>
//       </div>
//     </>
//   )
// }


// Arrays of object 

// export default function DataBindingComponent()
// {
//  var products = [
//    {Name:"TV",Price:45000.44,Stock:true},
//    {Name:"Mobile",Price:34000.44,Stock:false},
//    {Name:"Nike Casuals",Price:5200.44,Stock:true}
//  ];
//  return(
//   <>
//    <div className="container">
//      <h2>Products Table</h2>
//      <table className="table table-hover">
//       <thead>
//         <tr>
//           <th>Name</th>
//           <th>Price</th>
//           <th>Stock</th>
//           <th>Actions</th>
//         </tr>
//       </thead>
//       <tbody>
//         {
//           products.map(product=>
//             <tr key={product.Name}>
//               <td>{product.Name}</td>
//               <td>{product.Price}</td>
//               <td>{(product.Stock==true)?"Available":"Out of Stock"}</td>
//               <td>
//                 <button className="btn btn-info"><span className="bi bi-eye-fill"></span></button>
//                 <button className="btn btn-warning ms-2"><span className="bi bi-pen"></span></button>
//                 <button className="btn btn-danger ms-2"><span className="bi bi-trash"></span></button>
//               </td>
//             </tr>
//           )
//         }
//       </tbody>
//      </table>
//     </div>  
//   </>
//  ) 
// }

// Nested data

// export default function DataBindingComponent()
// {
//   var menu = [
//     {Category:"Electronics",Products:["TV","Mobile"]},
//     {Category:"Footwear",Products:["Nike Casuals","Lee Boot"]}
//   ];
//   return(
//     <>
//        <div className="container">
//          <h2>Select Category</h2>
//          {
//           menu.map(item=>
//             <details key={item.Category}>
//               <summary>{item.Category}</summary>
//               <ul>
//                 {
//                   item.Products.map(product=>
//                     <li key={product}>{product}</li>
//                     )
//                 }
//               </ul>
//             </details>
//             )
//          }
//          <h2>Shoping Menu</h2>
//          <ol>
//           {
//             menu.map(item=>
//              <li key={item.Category}>{item.Category}
//               <ul>
//                 {
//                   item.Products.map(product=>
//                     <li key={product}>{product}</li>
//                     )
//                 }
//               </ul>
//              </li> 
//              )
//           }
//          </ol>
//          <h2>Select product</h2>
//          <select>
//            {
//             menu.map(item=>
//               <optgroup label={item.Category} key={item.Category}>
//                 {
//                   item.Products.map(product=>
//                     <option key={product}>{product}</option>
//                     )
//                 }
//               </optgroup>
//               )
//            }
//          </select>
//        </div>   
//     </>
//   )
// }


//Bootstrap Cards

// export default function DataBindingComponent()
// {
//   var courses = [
//     {Title:"ASP.NET",Poster:"Asp.net-online-training.jpg",Topics:["Web","API","MVC"]},
//     {Title:"Digital marketing",Poster:"digital marketing.jpg",Topics:["Cloud","Services","Database"]},
//     {Title:"Angular",Poster:"Angular.jpg",Topics:["Web","Framwork","client"]}
//   ];
//   return(
//     <>
//      <div className="container">
//        <h2>Courses</h2>
//        <div>
//         {
//           courses.map(courses=>
//             <div>
//               <img src={courses.Poster} className="card-img-top" height="150"/>
//               <div className="card-header">
//                 <h3>{courses.Title}</h3>
//               </div>
//               <div className="card-body">
//                 <ul>
//                   {
//                     courses.Topics.map(topic=>
//                       <li>{topic}</li>
//                       )
//                   }
//                 </ul>
//               </div>
//               <div className="card-footer">
//                 <button className="btn btn-primary w-100">Join Course</button>
//               </div>
//             </div>
//             )
//         }
//        </div>
//       </div>    
//     </>
//   )
// }

// fetch API 

// export default function DataBindingComponent()
// {
//   var product = {"id":8,"title":"Pierced Owl Rose Gold Plated Stainless Steel Double","price":10.99,"description":"Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel","category":"jewelery","image":"https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg","rating":{"rate":1.9,"count":100}}
//   return(
//     <>
//       <div>
//         <dl>
//            <dt>Title</dt>
//            <dt>{product.title}</dt>
//            <dt>Price</dt>
//            <dd>{product.price}</dd>
//            <dt>preview</dt>
//            <dd><img alt="product preview" src={product.image} height="200" width="200"/></dd>
//            <dt>Rating</dt>
//            <dd><span className="bi bi-star-fill text-warning"></span>{product.rating.rate}</dd>  
//         </dl>        
//       </div>    
//     </>
//   )
// }

// One way data 

// import { useState } from "react";
// export default function DataBindingComponent()
// {
//   const [userName , setUserName] = useState("john")
//   return(
//      <div>
//       <h2>One Way</h2>
//       User Name:<input type="text" value={userName}/>
//       <p>
//         Hello!{userName}
//       </p>
//      </div>
//   )
// }

// In array formate One way Binding

// import { useState } from "react";

// export default function DataBindingComponent()
// {
//     const [categories] = useState(["Electronics", "Footwear"]) ;
//     return(
//         <div className="container-fluid">
//             <ol>
//                 {
//                     categories.map(category=>
//                         <li key={category}>{category}</li>
//                         )
//                 }
//             </ol>
//         </div>
//     )
// }