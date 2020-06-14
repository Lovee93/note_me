import React, { Component } from 'react';
import './SignIn.css';

class SignIn extends Component {
	constructor(props) {
    super(props);
    this.state = {
      signInEmail: '',
      signInPassword: ''
    }
  }

  onEmailChange = (event) => {
    this.setState({signInEmail: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({signInPassword: event.target.value})
  }

  onSignIn = (event) => {
    event.preventDefault();
    if(this.state.signInEmail !== '' && this.state.password !== '') {
      fetch("https://still-bastion-77945.herokuapp.com/signin", {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          email: this.state.signInEmail,
          password: this.state.signInPassword
        }) 
      })
      .then(response => response.json())
      .then(data => {
        if(!data.length) { 
          this.props.loadUser(data)
          this.props.onRouteChange('home')
        }
        else{
          alert(data)
        }
      })
      .catch(err => console.log('err'))
    }
  }

  render() {
		return(
			<article className="br3 ba dark-gray b--black-10 w-100 w-50-m w-25-l mw7 shadow-5 scard" style={{width: 'auto'}}>
			<main className="pa5 black-80" >
  			<div style={{textAlign:'center'}}>
  			<svg width="50" height="50" viewBox="0 0 50 50" fill="none">
					<circle cx="25" cy="25" r="25" fill="#FE508F"/>
					<circle cx="25" cy="17" r="9" fill="white"/>
					<ellipse cx="25" cy="39" rx="17" ry="11" fill="white"/>
				</svg>
				</div>
  			<form className="measure center" style={{width: '300px'}} >
    			<fieldset id="sign_in" className="ba b--transparent ph0 mh0">
      			<legend className="f4 fw6 ph0 mh0 pv3 center">Sign In</legend>
      			<div className="mt3">
        			<label className="db fw6 lh-copy f6">Email</label>
        			<input className="pa2 input-reset ba bg-white hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" onChange={this.onEmailChange} />
      			</div>
      			<div className="mv3">
        			<label className="db fw6 lh-copy f6">Password</label>
        			<input className="b pa2 input-reset ba bg-white hover-bg-black hover-white w-100" type="password" name="password"  id="password" onChange={this.onPasswordChange}/>
      			</div>
      			<label className="pa0 ma0 lh-copy f6 pointer"><input type="checkbox" /> Remember me</label>
    			</fieldset>
    			<div style={{textAlign:'center'}}>
      			<input className="b ph4 mv3 pv2 input-reset signin-button grow pointer f5 dib" type="submit" value="Sign in" onClick={this.onSignIn}/>
    			</div>
			    <div className="lh-copy mt3 bottom-link">
			      <a href="#0" className="f6 link dim black db" onClick={() => this.props.onRouteChange('register')}>Dont't have an account, Sign up?</a>
			    </div>
  			</form>
			</main>
			</article>
		)
	}
}

export default SignIn;