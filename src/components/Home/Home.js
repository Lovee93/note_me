import React, { Component } from 'react';
import './Home.css';
import Note from '../Note/Note.js';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			
		}
	}

	addNote = () => {
		
	}
	
	render() {
		
		return(
		<div className="home-body">	
			<h1 className="heading">
				Welcome User!
			</h1>
			<div className="note-container">
				{
					this.props.user.notes.map(note => {
						
						return <Note note={note} key={note.toString()} />
						
					})
				}
				<button className="add-button">+</button>
			</div>
		</div>
		);
	}
}

export default Home;