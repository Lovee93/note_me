import React, { Component } from 'react';
import './Note.css';
import { Textfit } from 'react-textfit';
import edit from './edit.svg';
import del from './delete.png';

class Note extends Component {
	constructor(){
		super();
	}

	render() {
		return(	
			<div className="note_div">
		    <Textfit mode="multi" className="note">
		        {this.props.note}
		    </Textfit>
		    <div className="options">
		    	<button className="icon"><img src={edit} /></button>
		    	<button className="icon"><img src={del} /></button>
		    </div>
    	</div>
		);
	}
}

export default Note;