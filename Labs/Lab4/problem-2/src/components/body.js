import React from "react";
import Note from "../components/note";
import Quote from "../components/quote";

class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            noteNumberTracker: 0,
        };
    }

    childrenNotes = [];

    addNote = () => {
        this.childrenNotes.push(<Note
            NoteNumberTracker={this.state.noteNumberTracker++}
            NoteDescription={document.getElementById("NoteDescription").value}
        ></Note>);
        this.forceUpdate();
    }

    render() {
        return (
            <body>
                {/* <script type="module" src="./JsSolution1.js"></script> */}
                <h1 style={{ textAlign: 'center' }}>Welcome to my Note Taking App</h1>
                <Quote></Quote>
                <div className="NoteMainFunctions" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <textarea id="NoteDescription" name="NoteDescription" style={{ marginBottom: '10px' }}></textarea>
                    <button id="AddButton" onClick={this.addNote}>Add Note</button>
                </div>
                <div id="NoteList">
                    {this.childrenNotes}
                </div>
            </body>
        );
    }
}

export default Body;
