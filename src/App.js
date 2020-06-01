import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import Note from './components/Note/Note';
import Home from './components/Home/Home';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      route: 'signin',
      user: {
        firstname: 'abc',
        lastname: 'xyz',
        email: '1@1',
        password: '1',
        notes: ['Call Fred for dinner.', 'My email is abc@xyz.com','My password is 123.']
      }
    }
  }
  
  onRouteChange = (route) => {
    if(route === 'signin') {
      this.setState({isLoggedIn: false})
    }
    else if(route === 'home'){
      this.setState({isLoggedIn: true})
    } 
      this.setState({route: route})
  }

  render() {

    const { isLoggedIn, route, user } = this.state;

    return (
      <div className="App">
        <link href="https://fonts.googleapis.com/css2?family=Grand+Hotel&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Amaranth&display=swap" rel="stylesheet" />
          <header className="App-header">
            <Navigation onRouteChange={this.onRouteChange} isLoggedIn={isLoggedIn}/> 
            {
              !isLoggedIn ? 
                <div className="body">
                  { 
                    route === 'register' ? 
                      <Register onRouteChange={this.onRouteChange} /> : 
                      <SignIn onRouteChange={this.onRouteChange} user={user} />
                  }           
                  <h1 className="heading">Note Down your Ideas Today</h1>
                </div> : 
              <div className="home">
                <Home user={user}/>
              </div>
            }
          </header>
          <div className="footer">
          </div>
      </div>
    );
  }
}

export default App;
