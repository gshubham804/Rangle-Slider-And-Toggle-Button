import React, { Component } from 'react'
import './Loginform.css'

export default class Loginform extends Component {
    constructor(){
        super();
        this.state={
          user:''
        }
      }
    
      handleChange = (event) => {
        this.setState({user:event.target.value});
       }
  render() {
      console.log('state'+this.state.user);
    return (
        <>
        <div className="login-form-main">
            <div class="container">
      <div class="wrapper">
        <div class="title"><span>Login</span></div>
        <form action="#">
          <div class="row">
            <i class="fas fa-user"></i>
            <input type="text" placeholder="Email" onChange={this.handleChange}  required/>
          </div>
          <div class="row">
            <i class="fas fa-lock"></i>
            <input type="password" placeholder="Password" required/>
          </div>
          <div class="pass"><a href="#">Forgot password?</a></div>
          <div class="row button">
            <input type="submit" value="Login"/>
          </div>
          <div class="signup-link">Not a member? <a href="#">Signup now</a></div>
        </form>
      </div>
    </div>
    </div>
        </>
    )
  }
}
