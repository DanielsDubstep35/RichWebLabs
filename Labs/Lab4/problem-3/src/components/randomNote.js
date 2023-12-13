import React from 'react';
import Note from './note';
import { useContext } from 'react';

// RamdomNote component (inherits from Note component)

class RandomNote extends Note {
    // inherit state from Body component
    // useContext

    constructor(props) {
        super(props);
        this.state = {
            noteNumberTracker: this.props.NoteNumberTracker,
            noteDescription: this.props.NoteDescription,
        };
    }

    childrenNotes = [];

    // random word generator
    generateRandomWord = () => {

        let randomWordCount = 2

        // api is https://random-word-api.vercel.app/api?words=10
        // fetch the api

        fetch("https://random-word-api.vercel.app/api?words=" + randomWordCount)
            .then(response => response.json())
            .then(data => this.setState({ noteDescription: data[0] + " " + data[1] }));

    }

    generateRandomColor = () => {
        let Note = document.getElementById("Note" + this.props.NoteNumberTracker);
        let randomColor = Math.floor(Math.random() * 16777215).toString(16);
        Note.style.backgroundColor = "#" + randomColor;
    }

    componentDidMount() {
        this.generateRandomWord();
        this.generateRandomColor();
    }

    render() {
        return (
            <Note
            NoteNumberTracker={this.state.noteNumberTracker}
            NoteDescription={this.state.noteDescription}
            >
            </Note>
        );
    }

}

export default RandomNote;
