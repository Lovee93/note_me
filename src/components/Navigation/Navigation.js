import React from 'react';
import './Navigation.css';

function Navigation({ isLoggedIn, onRouteChange }) {
	return(
		<nav>
  			<div className="flex-grow pa3 flex nav-container items-center bg">
			    { isLoggedIn ?
				    <a className="link-button link dib dim1 mr3 mr4-ns" onClick={() => onRouteChange('signin')} href="#0">Sign Out</a>
  					:
  					<>
					    <a className="link-button link dib dim1 mr3 mr4-ns" onClick={() => onRouteChange('signin')} href="#0">Sign In</a>
					    <a className="link-button link dib dim1 mr3 mr4-ns" onClick={() => onRouteChange('register')} href="#0">Sign Up</a>
  				 	</>
  				}
  			</div>
		</nav>
	)
}

export default Navigation;