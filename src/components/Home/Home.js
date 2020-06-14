import React from 'react';
import './Home.css';
import Note from '../Note/Note.js';

function Home(props) {

	const { user, notes, loadNotes } = props;

	const addNote = () => {
		const prompt_note = prompt('What would you like to note down?')

		fetch(`https://still-bastion-77945.herokuapp.com/new_note/${user.id}`, {
	    method: 'post',
	    headers: {'Content-Type': 'application/json'},
	    body: JSON.stringify({
	      note: prompt_note
	    }) 
	  })
	  .then(response => response.json())
	  .then(data => {
	  	if(data) {
	  		loadNotes(user.id)
	  	}
	  })
	}

	return(
		<div className="home-body">	
			<h1 className="heading">
				Welcome {user.firstname}!
			</h1>
			<div className="note-container">
				{
					notes.length !== 0 ?
						notes.map(obj => {
							 	return <Note note={obj} key={obj.note_id} loadNotes={loadNotes} />
							})
					: ''	
				}
				<button className="add-button" onClick={addNote}>+</button>
			</div>
		</div>
	);
}

export default Home;