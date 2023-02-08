import axios from "axios";
import { useState,useEffect } from "react";

export default function AxiosDemo()
{
    const [users,setUsers] = useState([]);
    useEffect(()=>{
        axios.get("http://127.0.0.1:8080/getusers")
        .then(function(response){
            setUsers(response.data);
        })
        .catch(function(ex){
            console.log(ex);
        })
    },[])

    return(
        <div className="container-fluid">
          <h2>Users</h2>
          <ol>
            {
                users.map(user=>
                    <li key={user.UserId}>{user.UserId}</li>
                    )
            }
          </ol>
        </div>
    )
}