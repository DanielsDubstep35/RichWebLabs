import React from 'react';

class Note extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            noteNumberTracker: 0,
            textDescription: "",
        };
    }

    // editNote = () => {
    //     let Note = document.getElementById("Note" + this.props.NoteNumberTracker);
    //     // let NoteDescription = Note.childNodes[0];
    //     // let NoteDescription = document.getElementById("NoteDescription");
    //     let NoteDescription = Note.children[0];

    //     // popup alert that asks for new note description
    //     prompt("Please enter a new note description: ", this.props.NoteDescription);
    //     NoteDescription.textContent = this.props.NoteDescription;

    // }

    // deleteNote = () => {
    //     let Note = document.getElementById("Note" + this.props.NoteNumberTracker);
    //     Note.remove();
    // }

    // changeColorNote = () => {
    //     let Note = document.getElementById("Note" + this.props.NoteNumberTracker);
    //     let colorDropdown = document.getElementById("ColorDropdown");
    //     Note.style.backgroundColor = colorDropdown.value;
    // }

    editNote = () => {
        let NoteDescription = document.getElementById("NoteDescription" + this.props.NoteNumberTracker);

        // popup alert that asks for new note description
        let newNote = prompt("Please enter a new note description: ", this.props.NoteDescription);
        NoteDescription.textContent = newNote;

    }

    deleteNote = () => {
        let Note = document.getElementById("Note" + this.props.NoteNumberTracker);
        Note.remove();
    }

    changeColorNote = () => {
        let Note = document.getElementById("Note" + this.props.NoteNumberTracker);
        let colorDropdown = document.getElementById("ColorDropdown" + this.props.NoteNumberTracker);
        Note.style.backgroundColor = colorDropdown.value;
    }

    render() {
        return (

            <div
                id={"Note" + this.props.NoteNumberTracker}
                className="Note"
                style={{
                    backgroundColor: this.props.color,
                    border: '1px solid #ccc',
                    padding: '10px',
                    margin: '10px',
                    borderRadius: '5px',
                    boxShadow: '0 2px 5px rgba(0,0,0,0.3)'
                }}
            >
                <p
                    id={"NoteDescription" + this.props.NoteNumberTracker}
                    style={{
                        fontSize: '16px',
                        color: '#333'
                    }}
                >
                    {this.props.NoteDescription}
                </p>
                <button
                    id={"EditButton" + this.props.NoteNumberTracker}
                    onClick={this.editNote}
                    style={{
                        marginRight: '10px',
                        padding: '5px 10px',
                        border: 'none',
                        borderRadius: '3px',
                        cursor: 'pointer'
                    }}
                >
                    Edit
                </button>
                <button
                    id={"DeleteButton" + this.props.NoteNumberTracker}
                    onClick={this.deleteNote}
                    style={{
                        marginRight: '10px',
                        padding: '5px 10px',
                        border: 'none',
                        borderRadius: '3px',
                        cursor: 'pointer'
                    }}
                >
                    Delete
                </button>
                <select
                    id={"ColorDropdown" + this.props.NoteNumberTracker}
                    onChange={this.changeColorNote}
                    style={{
                        marginTop: '10px',
                        padding: '5px',
                        border: '1px solid #ccc',
                        borderRadius: '3px'
                    }}
                >
                    <option value="white">White</option>
                    <option value="red">Red</option>
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                    <option value="yellow">Yellow</option>
                    <option value="purple">Purple</option>
                    <option value="orange">Orange</option>
                    <option value="pink">Pink</option>
                </select>
            </div>
        );
    }
}

export default Note;
