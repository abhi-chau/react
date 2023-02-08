import { useFormik } from "formik";

export default function FormikDemo()
{
  const formik = useFormik({
    initialValues:{
        UserName:"",
        Password:"",
        City:"",
    },
    onSubmit:values=>{
        alert(JSON.stringify(values));
    }
  })
  return(
    <div className="container-fluid">
      <form onSubmit={formik.handleSubmit}>
         <h2>Register User</h2>
         <dl>
            <dt>User Name</dt>
            <dd><input name="UserName" onChange={formik.handleChange} value={formik.values.UserName} type="text"/></dd>
            <dt>Password</dt>
            <dd><input name="Password" onChange={formik.handleChange} value={formik.values.UserName}/></dd>
            <dt>City</dt>
            <dd>
                <select onChange={formik.handleChange} value={formik.values.City}>
                    <option>Delhi</option>
                    <option>Hyd</option>
                </select>
            </dd>
         </dl>
         <button>Register</button>
      </form>
    </div>
  )
}