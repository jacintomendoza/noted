import React, { PureComponent } from 'react';

const notes = [
    {
      id: '4e81fc6e-bfb6-419b-93e5-0242fb6f3f6a',
      task: 'Learn React'
    },
    {
      id: '11bbffc8-5891-4b45-b9ea-5c99aadf870f',
      task: 'Do laundry'
    }
  ];

class note extends React.Component {
    state = {
        num: 0
    }

    addNote = () => {
        console.log("Note added!");
        this.state.num++;
        this.setState(this.state);
    }

    render() { 
        return (
            <React.Fragment>
                <br/>
                <button onClick={this.addNote}>Add Note</button>
                <p>Number of notes: {this.state.num}</p>
                <div className='note-container'
                    style={{"backgroundColor": "yellow", "height": "200px", "width": "200px"}}>
                        
                    <div className='note-body'>Test
    
                    </div>
                </div>

                {/* <ul>{notes.map(note =>
                    <li key={note.id}>{note.task}</li>
                )}</ul> */}


            </React.Fragment>
        );
    }
}


 
export default note;

