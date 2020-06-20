import React, { Component } from 'react';
import './Note.css';
import { Textfit } from 'react-textfit';
import edit from './edit.svg';
import save from './save.svg';
import del from './delete.png';

class Note extends Component {

	constructor(props) {
		super(props);
		this.state = {
			edit_flag: false,
			note_val: ''
		}
	}

	delNote = () => {
    const {note, loadNotes} = this.props;
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

	saveChanges = () => {
		const {note, loadNotes} = this.props;

		fetch(`https://still-bastion-77945.herokuapp.com/edit_note/${note.user_id}`, {
		      method: 'PUT',
		      headers: {'Content-Type': 'application/json'},
		      body: JSON.stringify({
		        note_id: note.note_id,
		        note_rev: this.state.note_val
		      }) 
		    })
		    .then(response => response.json())
		    .then(data => {
		    	if(data) {
		    		loadNotes(note.user_id)
		    		this.setState({
		    			edit_flag: false, 
		    			note_val: ''
		    		})
		    	}
		  	})
	}

	handleTextAreaChange = (event) => {
		this.setState({note_val: event.target.value})
	}

	editNote = () => {
		this.setState({
			edit_flag: true,
			note_val: this.props.note.note
		})
	}

	render() {
		const { note, loadNotes } = this.props;
		const { edit_flag, note_val } = this.state;

		return(	
			<div className="note_div">
			  {
			  	!edit_flag ? 
			  	<>  
			    <Textfit mode="multi" className="note">
			        {note.note}
			    </Textfit>
			    <div className="options">
			    	<button className="icon" onClick={this.editNote} ><img src={edit} alt='edit_note' /></button>
			    	<button className="icon" onClick={this.delNote} ><img src={del} alt='del_note' /></button>
			    </div>
			   </>
			   :
			   <>  
			    <textarea className="note f3" value={note_val} onChange={this.handleTextAreaChange} />
			    <div className="options">
			    	<button className="icon" onClick={this.saveChanges} ><img src={save} alt='edit_note' /></button>
			    	<button className="icon" onClick={this.delNote} ><img src={del} alt='del_note' /></button>
			    </div>
			   </>
			 	}
    	</div>
		);
	}
}

export default Note;