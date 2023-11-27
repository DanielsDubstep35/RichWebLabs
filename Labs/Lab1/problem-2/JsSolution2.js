let NoteNumberTracker = 0;

// adds a new note to the page, by adding a Text Div with action buttons
function AddNewNote() {

    // new note added, so increment the tracker
    NoteNumberTracker++;

    // create the elements for the new note, including Action area and text
    const NotesDiv = document.createElement("div");
    const NoteTextDiv = document.createElement("div");
    const NoteActionsDiv = document.createElement("div");

    // create buttons for edit and delete
    const editButton = document.createElement("Button");
    const deleteButton = document.createElement("Button");

    // These are the dropdown options for the color picker. We will create them and add them to the dropdown
    const colorDropdown = document.createElement("select");
    const colorOptionRed = document.createElement("option");
    const colorOptionBlue = document.createElement("option");
    const colorOptionGreen = document.createElement("option");
    const colorOptionYellow = document.createElement("option");
    const colorOptionPurple = document.createElement("option");
    const colorOptionOrange = document.createElement("option");
    const colorOptionPink = document.createElement("option");
    const colorOptionBlack = document.createElement("option");
    const colorOptionWhite = document.createElement("option");

    const NoteDescription = document.getElementById("NoteDescription");

    // add classes to the elements
    NotesDiv.classList.add("Notes");
    NoteTextDiv.classList.add("NoteText");
    NoteActionsDiv.classList.add("NoteActions");

    // set the ids for the elements
    NotesDiv.setAttribute("id", "Notes" + NoteNumberTracker);
    NoteTextDiv.setAttribute("id", "NoteText" + NoteNumberTracker);

    // set the attributes for the color picker
    colorDropdown.setAttribute("id", "colorPicker" + NoteNumberTracker);
    colorDropdown.setAttribute("name", "colorPicker" + NoteNumberTracker);
    colorOptionRed.setAttribute("value", "red");
    colorOptionRed.textContent = "Red";
    colorOptionBlue.setAttribute("value", "blue");
    colorOptionBlue.textContent = "Blue";
    colorOptionGreen.setAttribute("value", "green");
    colorOptionGreen.textContent = "Green";
    colorOptionYellow.setAttribute("value", "yellow");
    colorOptionYellow.textContent = "Yellow";
    colorOptionPurple.setAttribute("value", "purple");
    colorOptionPurple.textContent = "Purple";
    colorOptionOrange.setAttribute("value", "orange");
    colorOptionOrange.textContent = "Orange";
    colorOptionPink.setAttribute("value", "pink");
    colorOptionPink.textContent = "Pink";
    colorOptionBlack.setAttribute("value", "black");
    colorOptionBlack.textContent = "Black";
    colorOptionWhite.setAttribute("value", "white");
    colorOptionWhite.textContent = "White";

    // set the attributes for the buttons, and pass the NoteNumberTracker to the functions
    editButton.setAttribute("onclick", "EditNote(" + NoteNumberTracker + ")");
    deleteButton.setAttribute("onclick", "DeleteNote(" + NoteNumberTracker + ")");
    colorDropdown.setAttribute("onchange", "ColorChangeEvent(" + NoteNumberTracker + ", this.value)");

    // add the elements to the page
    NotesDiv.appendChild(NoteTextDiv);
    NotesDiv.appendChild(NoteActionsDiv);

    // add the color picker options to the color picker
    colorDropdown.appendChild(colorOptionRed);
    colorDropdown.appendChild(colorOptionBlue);
    colorDropdown.appendChild(colorOptionGreen);
    colorDropdown.appendChild(colorOptionYellow);
    colorDropdown.appendChild(colorOptionPurple);
    colorDropdown.appendChild(colorOptionOrange);
    colorDropdown.appendChild(colorOptionPink);
    colorDropdown.appendChild(colorOptionBlack);
    colorDropdown.appendChild(colorOptionWhite);

    const NoteMessage = NoteDescription.value;

    NoteTextDiv.textContent = NoteMessage;

    editButton.textContent = "edit";
    deleteButton.textContent = "delete";

    // add the buttons to the action area
    NoteActionsDiv.appendChild(editButton);
    NoteActionsDiv.appendChild(deleteButton);
    NoteActionsDiv.appendChild(colorDropdown);

    // add the new note to the page
    const NoteGrid = document.getElementById("NoteGrid");
    NoteGrid.insertBefore(NotesDiv, NoteGrid.childNodes[0]);

    NoteDescription.value = "";
}

// This function launches a prompt to edit the note, and then updates the note text
// if there is no new note, then the note text is not updated
function EditNote(Number) {

    const NoteTextDiv = document.getElementById("NoteText" + Number);

    let newNote;
    let inputedNote = prompt("Please enter your new note:", "");

    if (inputedNote == null || inputedNote == "") {
        window.alert("No New Note :)");
    } else {
        newNote = inputedNote;
        NoteTextDiv.textContent = newNote;
    }

}

// This function deletes the note from the page
// this is done by using the NoteNumberTracker to find the note, and then removing it from the page
function DeleteNote(Number) {
    const NoteToRemove = document.getElementById("Notes" + Number);

    NoteToRemove?.parentElement?.removeChild(NoteToRemove);

    NoteNumberTracker--;
}

// This function changes the color of the note
function ColorChangeEvent(Number, color) {
    const NoteToChange = document.getElementById("Notes" + Number);

    NoteToChange.style.backgroundColor = color;
}
