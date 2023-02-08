import { useState,useEffect } from "react";

export default function EventBindingComponent()
{
  const[userName,setUserName] = useState([])
  function handleUserName(e){
    setUserName(e.target.value);
  }
  return(
    <div className="container">
      <dl>
        <dt>User Name</dt>
        <dd><input type="text"  onBlur={handleUserName}></input></dd>
      </dl>
      <h3>Hello!{userName}</h3>
    </div>
  )
}