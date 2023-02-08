import { useState,useEffect } from "react";

export default function ShoppingComponent(){
   const[categories,setCategories] = useState([]);
   const [products,setProducts] = useState([]);
    function LoadCategories(){
        fetch("https://fakestoreapi.com/products/categories")
        .then(response=>response.json())
        .then(data=>{
            setCategories(data);
        })
    }
    function LoadProducts(){
        fetch("https://fakestoreapi.com/products")
        .then(response=>response.json())
        .then(data=>{
            setProducts(data);
        })
    }

    useEffect(()=>{
        LoadCategories();
        LoadProducts();
    },[])
   return(
    <div className="container">
       <header className="bg-danger text-white text-center p-2">
         <h1><span className="bi bi-cart"></span>Shopping Home</h1>
       </header>
       <section className="row">
         <nav className="col-3">
          <div>
            <label>Select a Category</label>
            <div>
                <select>
                    {
                       categories.map(category=>
                        <option 
                        key={category}>{category.toUpperCase()}</option>
                        )
                    }
                </select>
            </div>
          </div>
         </nav>
       </section>
       <main className="d-flex flex-wrap overflow-auto" style={{height:'600px'}}>
        {
            products.map(product=>
                <div key={product.id} className="card m-2 p-2 w-25">
                    <img src={product.image}/>
                    <div className="card-header">
                       <p>{product.title}</p>
                    </div>
                    <div className="card-body">
                      <dl>
                        <dt>Price</dt>
                        <dd>{product.price}</dd>
                        <dt>Rating</dt>
                        <dd>
                            <span className="bi bi-star-fill text-success"></span>{product.rating.rate}<span>[{product.rating.count}]</span>
                        </dd>
                      </dl>
                    </div>
                </div>
                )
        }
       </main>
    </div>
   )
}