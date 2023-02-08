export default function NestedIterationComponent()
{

    var categories = [
        {category:'Electorics',products:['Samsung TV','Mobile']},
        {category:'Footwear',products:['Nike Casuals','Lee Cooper Boot']}
    ];
   return(
    <>
     <div className="container-fluid">
       <h2>Nested Iteration</h2>
       <ol>
        {
            categories.map(item=>
                <li>{item.category}
                  <ul>
                    {
                        item.products.map(product=>
                         <li>{product}</li>
                        )
                    }
                  </ul>
                </li>

                )
        }
       </ol>
       <h2>Select a product</h2>
       <select>
        {
            categories.map(item =>
             <optgroup label={item.category}>
               {
                item.products.map(product=>
                 <option>{product}</option>
                )
               }
             </optgroup>
            )
        }
       </select>
     </div>
    </>
   ) 
}