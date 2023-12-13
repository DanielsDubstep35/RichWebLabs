import React from "react";
import Note from "../components/note";

// FAILED ATTEMPT 1

// const addNote = (note) => {
//     const noteList = document.getElementById("NoteList");
//     noteList.appendChild(<div
//         // NoteNumberTracker={50}
//     ></div>);
//     //noteList.appendChild(note);
// }

// function Body(noteNoTrack) {

//     return (
//         <body>
//             {/* <script type="module" src="./JsSolution1.js"></script> */}
//             <h1>Welcome to my Note Taking App</h1>
//             <div className="NoteMainFunctions">
//                 <textarea id="NoteDescription" name="NoteDescription"></textarea>
//                 <button id="AddButton" onClick={addNote}>Add Note</button>
//             </div>
//             <div id="NoteList">
//             </div>
//         </body>
//     );
// }

// export default Body;


// FAILED ATTEMPT 2

// class Body extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             noteNumberTracker: 0,
//         };
//     }

//     childrenNotes = [];

//     addNote = () => {
//         this.childrenNotes.push(<Note
//             NoteNumberTracker={this.state.noteNumberTracker++}
//         ></Note>);
//         this.forceUpdate();
//     }

//     bodyComponent = props => (
//         <body>
//             {/* <script type="module" src="./JsSolution1.js"></script> */}
//             <h1>Welcome to my Note Taking App</h1>
//             <div className="NoteMainFunctions">
//                 <textarea id="NoteDescription" name="NoteDescription"></textarea>
//                 <button id="AddButton" onClick={this.addNote}>Add Note</button>
//             </div>
//             <div id="NoteList">
//                 {props.childrenNotes}
//             </div>
//         </body>
//     );
// }

// export default Body;


// SUCCESSFUL ATTEMPT

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
