import { useState,useEffect } from "react";
import $ from 'jquery';
import { useFormik } from "formik";


export default function JQueryAjaxDemo()
{
    const [users,setUsers] = useState([]);
    const [userError,setUserError] = useState("");

    const formik = useFormik({
        initialValues:{
            UserId:"",
            UserName:"",
            Password:"",
            Age:0,
            Mobile:"",
            Subscribed:true,
        },
        onSubmit:values=>{
            $.ajax({
                method:"POST",
                url:"http://127.0.0.1:8080/registeruser",
                data:values
            })
            alert("Register Successfully...");
        }
    })

    useEffect(()=>{
        $.ajax({
            method:"GET",
            url:"http://127.0.0.1:8080/getusers",
            success:function(response){
                setUsers(response);
            }
        })
    },[])

    function VerifyUserId(e){
        for(var user of users)
        {
           if(user.UserId==e.target.value){
            setUserError('User ID Taken - Try Another');
            break;
           }else{
            setUserError('User ID Available');
           }
        }
    }

    return(
        <div className="container-fluid">
           <h2>Register User</h2>
           <form onSubmit={formik.handleSubmit}>
            <dl>
                <dt>User Id</dt>
                <dd><input onKeyUp={VerifyUserId} value={formik.values.UserId} onChange={formik.handleChange} name="UserId" type="text"/></dd>
                <dt>User Name</dt>
                <dd><input value={formik.values.UserName} onChange={formik.handleChange} name="UserName" type="text"/></dd>
                <dt>Password</dt>
                <dd><input value={formik.values.Password} onChange={formik.handleChange} name="Password" type="password"/></dd>
                <dt>Age</dt>
                <dd><input value={formik.values.Age} onChange={formik.handleChange} name="Age" type="number"/></dd>
                <dt>Mobile</dt>
                <dd><input  value={formik.values.Mobile} onChange={formik.handleChange} name="Mobile" type="text"/></dd>
                <dt>Subscription</dt>
                <dd className="form-switch"><input className="form-check-input"  checked={formik.values.Subscribed} onChange={formik.handleChange} name="Subscribed"  type="checkbox"/>Yes</dd>
            </dl>
            <button className="btn btn-primary">Register</button>
           </form>
        </div>
    )
}