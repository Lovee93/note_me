import React, { Component } from 'react';
import './Register.css';

class Register extends Component {
  constructor(props){
    super(props);
    this.state = {
      firstname: '',
      lastname:'',
      email:'',
      password:''
    }
  }

  onEmailChange = (event) => {
    this.setState({email: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({password: event.target.value})
  }

  onFNameChange = (event) => {
    this.setState({firstname: event.target.value})
  }

  onLNameChange = (event) => {
    this.setState({lastname: event.target.value})
  }

  onRegister = (event) => {
    event.preventDefault();
    
    const { firstname, lastname, email, password } = this.state;

    if(firstname !== '' && lastname !== '' && email !== '' && password !== '') {
      fetch('http://localhost:3000/register', {
        method:'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          firstname: this.state.firstname,
          lastname: this.state.lastname,
          email: this.state.email,
          password: this.state.password
        })
      })
      .then(response => response.json())
      .then(user => {
        alert('User Registered Successfully, Please login!')
        this.props.onRouteChange('signin');
      })
      .catch(console.log)
    }
    else {
      alert('Please fill out all the fields.')
    }
  }

	render() {
		return(
			<article className="br3 ba dark-gray b--black-10 w-100 w-50-m w-25-l mw6 shadow-5 card" style={{width: 'auto'}}>
			<main className="pa5 black-80 ">
  			<div style={{textAlign:'center'}}>
  			<svg width="50" height="50" viewBox="0 0 50 50" fill="none">
					<circle cx="25" cy="25" r="25" fill="#FE508F"/>
					<circle cx="25" cy="17" r="9" fill="white"/>
					<ellipse cx="25" cy="39" rx="17" ry="11" fill="white"/>
				</svg>
				</div>
  			<form className="measure center">
    			<fieldset id="register" className="ba b--transparent ph0 mh0">
      			<legend className="f4 fw6 ph0 mh0 pv3 center">Sign Up</legend>
      			<div className="mt3 flex">
        			<div className="mr3">
        			<label className="db fw6 lh-copy f6">First Name</label>
        			<input className="pa2 input-reset ba bg-white hover-bg-black hover-white w-100" type="text" id="first-name" onChange={this.onFNameChange} />
        			</div>
        			<div>
        			<label className="db fw6 lh-copy f6">Last Name</label>
        			<input className="pa2 input-reset ba bg-white hover-bg-black hover-white w-100" type="text" id="last-name" onChange={this.onLNameChange} />
      				</div>
      			</div>
      			<div className="mt3">
        			<label className="db fw6 lh-copy f6">Email</label>
        			<input className="pa2 input-reset ba bg-white hover-bg-black hover-white w-100" type="email" id="email-address" onChange={this.onEmailChange} />
      			</div>
      			<div className="mv3">
        			<label className="db fw6 lh-copy f6">Password</label>
        			<input className="b pa2 input-reset ba bg-white hover-bg-black hover-white w-100" type="password" id="password" onChange={this.onPasswordChange} />
      			</div>
      			<label className="pa0 ma0 lh-copy f6 pointer"><input type="checkbox" /> Remember me</label>
    			</fieldset>
    			<div style={{textAlign:'center'}}>
      			<input className="b ph4 mv3 pv2 input-reset signup-button grow pointer f5 dib" type="submit" value="Sign up" onClick={this.onRegister}/>
    			</div>
			    <div className="lh-copy mt3 bottom-link">
			      <a href="#0" className="f6 link dim black db" onClick={()=>this.props.onRouteChange('signin')}>Have an account, Sign in!</a>
			    </div>
  			</form>
			</main>
			</article>
		)
	}
}

export default Register;