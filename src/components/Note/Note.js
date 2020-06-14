import React from 'react';
import './Note.css';
import { Textfit } from 'react-textfit';
import edit from './edit.svg';
import del from './delete.png';

function Note(props) {

const {note, loadNotes} = props;

const delNote = () => {
		fetch(`https://still-bastion-77945.herokuapp.com/del_note/${note.user_id}`, {
      method: 'delete',
      headers: {
      	'Content-Type': 'application/json',
      	'Allow':'GET, POST, DELETE, PUT'
      },
      body: JSON.stringify({
        note_id: note.note_id
      }) 
    })
    .then(response => response.json())
    .then(data => {
    	if(data) {
    		loadNotes(note.user_id)
    	}
    })
	}

const	editNote = () => {
		const prompt_note = prompt(`Current: ${note.note}\nNew: `)
		if(prompt_note === '' || prompt_note === null) {
			return;
		} else {
			fetch(`https://still-bastion-77945.herokuapp.com/edit_note/${note.user_id}`, {
		      method: 'PUT',
		      headers: {'Content-Type': 'application/json'},
		      body: JSON.stringify({
		        note_id: note.note_id,
		        note_rev: prompt_note
		      }) 
		    })
		    .then(response => response.json())
		    .then(data => {
		    	if(data) {
		    		loadNotes(note.user_id)
		    	}
		  })
		}
	}

		return(	
			<div className="note_div">
		    <Textfit mode="multi" className="note">
		        {note.note}
		    </Textfit>
		    <div className="options">
		    	<button className="icon" onClick={editNote} ><img src={edit} alt='edit_note' /></button>
		    	<button className="icon" onClick={delNote} ><img src={del} alt='del_note' /></button>
		    </div>
    	</div>
		);
}

export default Note;