import React, { Component } from 'react'
import './Signupform.css'

export default class Signupform extends Component {
    constructor(){
        super();
        this.state={
          email:'',
          username:'',
          password:'',
        }
      }
    
      handleChangeEmail = (event) => {
        this.setState({email:event.target.value});
       }
       handleChangeUser = (event) => {
        this.setState({username:event.target.value});
       }
       handleChangePassword = (event) => {
        this.setState({password:event.target.value});
       }
  render() {
    console.log('state'+this.state.email);

    return (
      <>
      <div className="signup-form-main">
<div class="container container-signup">
<div class="wrapper">
<div class="title"><span>Signup</span></div>
<form action="#">
<div class="row">
<i class="fas fa-user"></i>
<input type="text" placeholder="Username" onChange={this.handleChangeUser}  required/>
</div>
<div class="row">
<i class="fa-solid fa-at"></i>
<input type="text" placeholder="Email" onChange={this.handleChangeEmail}  required/>
</div>
<div class="row">
<i class="fas fa-lock"></i>
<input type="password" placeholder="Password" onChange={this.handleChangePassword} required/>
</div>
<div class="row">
<i class="fa-solid fa-check-double"></i>
<input type="text" placeholder="Confirm password" required/>
</div>
<div class="row button">
<input type="submit" value="Signup"/>
</div>
<div class="signup-link">Already have an account! <a href="#">Login</a></div>
</form>
</div>
</div>
</div>
      </>
    )
  }
}
