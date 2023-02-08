import React from "react";

export default class TwoWayClassDemo2 extends React.Component
{
   constructor(props){
     super(props)
     this.state={
        UserName:'John'
     }
     this.handleUserChange = this.handleUserChange.bind(this);
   }

   handleUserChange(e){
    this.setState({
        UserName:e.target.value
    })
   }
  
   render(){
    return(
        <div className="container">
         <h2>User Details</h2>
         <input type="text" onChange={this.handleUserChange.bind(this)}></input>
         <br/>
         <p>Hello!{this.state.UserName}</p>
        </div>
    )
   }
}