import { Link,useNavigate} from "react-router-dom";
import { useFormik } from "formik";
import { useState,useEffect } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";


export default function IShopLogin()
{
   let navigate = useNavigate();
   const [users,setUsers] = useState([]);
   const [Cookies,setCookie,removeCookie] = useCookies();
   const formik = useFormik({
      initialValues:{
        UserId:"",
        Password:""
      },
      onSubmit:values=>{
        for(var user of users){
            if(user.UserId==values.UserId&&user.Password==values.Password){
                setCookie("userid",user.UserId);
                navigate("/dashboard");
                break;
            }else{
                navigate("/errorpage");
            }
        }
      }
   })

   useEffect(()=>{
    axios.get("http://127.0.0.1:8080/getusers")
    .then(response=>{
        setUsers(response.data);
    })
   },[]);

    return(
        <div>
            <h2>User Login</h2>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>User Id</dt>
                    <dd><input type="text"/></dd>
                    <dt>Password</dt>
                    <dd><input type="password"/></dd>
                </dl>
                <button className="btn btn-primary">Login</button>
            </form>
            <br/>
            <Link to="/register">New User?</Link>
        </div>
    )
}