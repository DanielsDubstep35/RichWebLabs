var { fromEvent, of } = rxjs;

// Add New Note using RxJS instead of event handlers
const addNewNote = fromEvent(document.getElementById("AddButton"), "click");
addNewNote.subscribe(() => {
    AddNewNote();
});

let NoteNumberTracker = 0;

// adds a new note to the page, by adding a Text Div with action buttons
function AddNewNote() {

    // new note added, so increment the tracker
    NoteNumberTracker++;

    // create the elements for the new note, including Action area and text
    const NotesDiv = document.createElement("div");
    const NoteTextDiv = document.createElement("div");
    const NoteActionsDiv = document.createElement("div");

    const ParentMarkerDiv = document.createElement("div");
    const ParentMarker = document.createElement("div");
    const DeleteGroupNotesButton = document.createElement("Button");

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

    // This is to get the Group name for the note
    // if there is no group name, then there is no parent marker
    let GroupNameTextArea = document.getElementById("NoteGroup");

    // add classes to the elements
    if (GroupNameTextArea.value != "") {
        NotesDiv.classList.add(GroupNameTextArea.value);
    } else {
        NotesDiv.classList.add("Ungrouped Notes");
    }
    NoteTextDiv.classList.add("NoteText");
    NoteActionsDiv.classList.add("NoteActions");
    if (GroupNameTextArea.value != "") {
        ParentMarkerDiv.classList.add(GroupNameTextArea.value + "_ParentMarker");
    } else {
        ParentMarkerDiv.classList.add("Ungrouped Notes_ParentMarker");
    }

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

    DeleteGroupNotesButton.textContent = "Delete Notes";

    // add the buttons to the action area
    NoteActionsDiv.appendChild(editButton);
    NoteActionsDiv.appendChild(deleteButton);
    NoteActionsDiv.appendChild(colorDropdown);

    // add the parent marker delete button
    if (GroupNameTextArea.value != "") {
        ParentMarkerDiv.appendChild(DeleteGroupNotesButton);
        ParentMarkerDiv.appendChild(ParentMarker);
    }

    // id the different button actions
    editButton.setAttribute("id", "EditButton" + NoteNumberTracker);
    deleteButton.setAttribute("id", "DeleteButton" + NoteNumberTracker);
    colorDropdown.setAttribute("id", "ColorDropdown" + NoteNumberTracker);

    DeleteGroupNotesButton.setAttribute("id", "Delete" + GroupNameTextArea.value + "Notes");

    NotesDiv.style = "margin: 8px; padding: 8px; display: flex; flex-direction: row; align-items: center; justify-content: space-evenly; border: black 1px solid; background-color: red;";

    // add the new note to the page
    const NoteGrid = document.getElementById("NoteGrid");
    if (GroupNameTextArea.value != "" && (document.getElementsByClassName(GroupNameTextArea.value).length || document.getElementsByClassName(GroupNameTextArea.value + "_ParentMarker").length)) {
        // insert infront of parent marker with class of the group name if it exists
        let GroupedNotes = document.getElementsByClassName(GroupNameTextArea.value);
        ParentMarker.textContent = GroupNameTextArea.value;
        ParentMarkerDiv.style = "display: flex; flex-direction: row; align-items: center; justify-content: space-evenly;";
        ParentMarkerDiv.style.border = "1px solid black";
        if (GroupedNotes.length) {
            NoteGrid.insertBefore(NotesDiv, GroupedNotes[0]);
        } else if (GroupedNotes.length == 0) {
            // in NoteGrid, append after the parent marker div with the relevant class
            let ParentMarkerDiv = document.getElementsByClassName(GroupNameTextArea.value + "_ParentMarker")[0];
            ParentMarkerDiv.after(NotesDiv);
        }
        NoteDescription.value = "";

    } else if (GroupNameTextArea.value == "" && document.getElementsByClassName("Ungrouped Notes").length) {
        // insert infront of parent marker with class of "Ungrouped Notes" if it exists
        let UngroupedNotes = document.getElementsByClassName("Ungrouped Notes");
        ParentMarkerDiv.classList.add("Ungrouped Notes");
        ParentMarker.textContent = "Ungrouped Notes";
        ParentMarkerDiv.style = "display: flex; flex-direction: row; align-items: center; justify-content: space-evenly;";
        ParentMarkerDiv.style.border = "1px solid black";
        if (UngroupedNotes.length) {
            NoteGrid.insertBefore(NotesDiv, UngroupedNotes[0]);
        } else if (UngroupedNotes.length == 0) {
            // after parent marker div
            let ParentMarkerDiv = document.getElementsByClassName("Ungrouped Notes_ParentMarker")[0];
            ParentMarkerDiv.after(NotesDiv);
        }
        NoteDescription.value = "";

    } else if (GroupNameTextArea.value != "") {
        let GroupedNotes = document.getElementsByClassName(GroupNameTextArea.value);
        // Create new parent marker with class of the group name
        ParentMarker.textContent = GroupNameTextArea.value;
        ParentMarkerDiv.style = "display: flex; flex-direction: row; align-items: center; justify-content: space-evenly;";
        ParentMarkerDiv.style.border = "1px solid black";
        NoteGrid.insertBefore(ParentMarkerDiv, GroupedNotes[0]);
        ParentMarkerDiv.after(NotesDiv);
        NoteDescription.value = "";

        let GroupName = GroupNameTextArea.value;

        let deleteGroupNotesButtonFE = fromEvent(document.getElementById("Delete" + GroupName + "Notes"), "click");
        deleteGroupNotesButtonFE.subscribe(() => {
            console.log(GroupName);
            deleteNotes(GroupName)
        });

    } else if (GroupNameTextArea.value == "") {
        let UngroupedNotes = document.getElementsByClassName("Ungrouped Notes");
        // Create new parent marker with class "Ungrouped Notes"
        ParentMarkerDiv.classList.add("Ungrouped Notes");
        ParentMarker.textContent = "Ungrouped Notes";
        ParentMarkerDiv.style = "display: flex; flex-direction: row; align-items: center; justify-content: space-evenly;";
        ParentMarkerDiv.style.border = "1px solid black";
        NoteGrid.insertBefore(ParentMarkerDiv, UngroupedNotes[0]);
        ParentMarkerDiv.after(NotesDiv);
        NoteDescription.value = "";

        let GroupName = GroupNameTextArea.value;

        let deleteGroupNotesButtonFE = fromEvent(document.getElementById("Delete" + GroupName + "Notes"), "click");
        deleteGroupNotesButtonFE.subscribe(() => {
            console.log(GroupName);
            deleteNotes(GroupName)
        });

    }

    // observable number for edit button, delete button, and color picker
    // edit button Observable
    let editButtonObservable = of(document.getElementById("EditButton" + NoteNumberTracker));
    editButtonObservable.subscribe((x) => {
        x.addEventListener("click", () => {
            const NoteNumber = x.id.replace("EditButton", "");
            EditNote(NoteNumber);
        });
    });

    // delete button observable
    let deleteButtonObservable = of(document.getElementById("DeleteButton" + NoteNumberTracker));
    deleteButtonObservable.subscribe((x) => {
        x.addEventListener("click", () => {
            const NoteNumber = x.id.replace("DeleteButton", "");
            DeleteNote(NoteNumber);
        });
    });

    // color picker observable
    let colorPickerObservable = of(document.getElementById("ColorDropdown" + NoteNumberTracker));
    colorPickerObservable.subscribe((x) => {
        x.addEventListener("change", () => {
            const NoteNumber = x.id.replace("ColorDropdown", "");
            const color = x.value;
            ColorChangeEvent(NoteNumber, color);
        });
    });

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

    NoteToRemove.parentElement.removeChild(NoteToRemove);

    NoteNumberTracker--;
}

// This function changes the color of the note
function ColorChangeEvent(Number, color) {
    const NoteToChange = document.getElementById("Notes" + Number);

    NoteToChange.style.backgroundColor = color;

    // if the color is black, then change the text color to white
    if (color === "black") {
        NoteToChange.style.color = "white";
    } else {
        NoteToChange.style.color = "black";
    }
}

function deleteNotes(NoteGroupName) {
    const GroupedNotes = document.getElementsByClassName(NoteGroupName);

    console.log(GroupedNotes);

    while (GroupedNotes.length > 0) {
        GroupedNotes[0].parentNode.removeChild(GroupedNotes[0]);
    }
}
