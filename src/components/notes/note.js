import React, { PureComponent } from 'react';

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
            </React.Fragment>
        );
    }
}
 
export default note;