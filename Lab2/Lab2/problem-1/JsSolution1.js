contactNumTracker = 0;
numberOfResultsCounter = 0;
ascending = false;

function checkName() {
    var contactName = document.getElementById("inputtedName")
    var error = document.getElementById("error")

    if (error) {
        error.remove()
    }

    if (contactName.value.match(/[a-zA-Z]/g)) {
        return true;
    } else if (!contactName.value.match(/[a-zA-Z]/g) || contactName.value.match(/[0-9]/g)) {
        return false;
    }
}

function checkPhoneNumber() {
    var contactPhoneNumber = document.getElementById("inputtedNumber")
    var error = document.getElementById("error")

    if (error) {
        error.remove()
    }

    if (contactPhoneNumber.value.match(/[0-9]/g)) {
        return true;
    } else if (!contactPhoneNumber.value.match(/[0-9]/g) || contactPhoneNumber.value.match(/[a-zA-Z]/g)) {
        return false;
    }
}

function checkEmail() {
    var contactEmail = document.getElementById("inputtedEmail")
    var error = document.getElementById("error")
    var validRegex = contactEmail.value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)

    if (error) {
        error.remove()
    }

    if (validRegex) {
        return true;
    } else if (!validRegex) {
        return false;
    }
}

function AddContact() {
    var inputtedName = document.getElementById("inputtedName").value
    var inputtedNumber = document.getElementById("inputtedNumber").value
    var inputtedEmail = document.getElementById("inputtedEmail").value
    var error = document.getElementById("error")
    var firstDiv = document.getElementById("ErrorHolder")

    if (error) {
        error.remove()
    }

    var errorMessage = document.createElement("div")
    errorMessage.setAttribute("id", "error")
    errorMessage.style.color = "red"
    errorMessage.style.display = "flex"
    errorMessage.style.margin = "auto"
    errorMessage.style.justifyContent = "center"

    if (inputtedName == "") {
        errorMessage.innerHTML = "Name cannot be empty"
        firstDiv.insertBefore(errorMessage, firstDiv.childNodes[0])
        return;
    } else if (inputtedNumber == "") {
        errorMessage.innerHTML = "Number cannot be empty"
        firstDiv.insertBefore(errorMessage, firstDiv.childNodes[0])
        return;
    } else if (inputtedEmail == "") {
        errorMessage.innerHTML = "Email cannot be empty"
        firstDiv.insertBefore(errorMessage, firstDiv.childNodes[0])
        return;
    } else if (!checkName()) {
        errorMessage.innerHTML = "Name must not contain numbers"
        firstDiv.insertBefore(errorMessage, firstDiv.childNodes[0])
        return;
    } else if (!checkPhoneNumber()) {
        errorMessage.innerHTML = "Number must not contain letters"
        firstDiv.insertBefore(errorMessage, firstDiv.childNodes[0])
        return;
    } else if (!checkEmail()) {
        errorMessage.innerHTML = "Email must be formatted correctly (@ and .)"
        firstDiv.insertBefore(errorMessage, firstDiv.childNodes[0])
        return;
    } else {
        errorMessage.remove()
    }

    contactNumTracker++

    var contact = document.createElement("tr")
    var name = document.createElement("td")
    var number = document.createElement("td")
    var email = document.createElement("td")

    contact.setAttribute("id", "Contact" + contactNumTracker)
    name.setAttribute("id", "TableName")
    number.setAttribute("id", "TableNumber")
    email.setAttribute("id", "TableEmail")

    name.innerHTML = inputtedName
    number.innerHTML = inputtedNumber
    email.innerHTML = inputtedEmail

    contact.appendChild(name)
    contact.appendChild(number)
    contact.appendChild(email)

    var tableBody = document.getElementById("TableBody")
    tableBody.insertBefore(contact, tableBody.childNodes[0])

    document.getElementById("inputtedName").value = ""
    document.getElementById("inputtedNumber").value = ""
    document.getElementById("inputtedEmail").value = ""
}

function searchQuery() {

    var noResult = document.getElementById("noResult")

    const columns = [
        { name: 'Name', index: 0, isFilter: false },
        { name: 'Mobile No', index: 1, isFilter: true },
        { name: 'Email', index: 2, isFilter: false }
    ]

    const filterColumns = columns.filter(c => c.isFilter).map(c => c.index)
    const trs = document.querySelectorAll(`#TableBody tr:not(.header)`)
    const filter = document.querySelector('#SearchBar').value
    const regex = new RegExp(escape(filter), 'i')
    const isFoundInTds = td => regex.test(td.innerHTML)
    const isFound = childrenArr => childrenArr.some(isFoundInTds)
    const setTrStyleDisplay = ({ style, children }) => {
        style.display = isFound([
            ...filterColumns.map(c =>
                children[c],
            ), // <-- filter Columns
        ]) ? '' : 'none';
    }

    trs.forEach(setTrStyleDisplay)

    for (var i = 0; i < trs.length; i++) {
        if (trs[i].style.display === '') {
            numberOfResultsCounter++
        }
    }

    if (filter == '') {
        noResult.style.display = "none"
    } else if (numberOfResultsCounter < 1) {
        noResult.style.display = "flex"
    } else {
        noResult.style.display = "none"
    }

    numberOfResultsCounter = 0;

}

function sortNameAscDesc() {
    if (ascending == false) {
        ascending = true
    } else if (ascending == true) {
        ascending = false
    }

    const trs = document.querySelectorAll(`#TableBody tr:not(.header)`);
    var tableBody = document.getElementById("TableBody");

    const rowsArray = Array.from(trs);

    rowsArray.sort((a, b) => {
        const nameA = a.querySelector("#TableName").textContent.toLowerCase();
        const nameB = b.querySelector("#TableName").textContent.toLowerCase();

        if (ascending) {
            return nameA.localeCompare(nameB);
        } else {
            return nameB.localeCompare(nameA);
        }
    });

    while (tableBody.firstChild) {
        tableBody.removeChild(tableBody.firstChild);
    }

    rowsArray.forEach((row) => {
        tableBody.appendChild(row);
    });
}
