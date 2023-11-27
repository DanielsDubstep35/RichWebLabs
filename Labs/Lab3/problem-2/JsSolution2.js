var { fromEvent, interval, Observable, count } = rxjs;
var { map, takeUntil } = rxjs.operators;

const countdown = document.getElementById("TimeCountdown");

let TimeHours = document.getElementById("TimeHours");
let TimeMinutes = document.getElementById("TimeMinutes");
let TimeSeconds = document.getElementById("TimeSeconds");
let TimeSeparators = document.getElementsByClassName("TimeSeparators");

const button = document.getElementById("TimerButton");
const buttonText = document.getElementById("StartButton");
const buttonIcon = document.getElementsByClassName("material-icons");

let buttonStarted = false;

const timerInput = fromEvent(document.getElementsByClassName("TimerSetNumber"), "input")
timerInput.subscribe(ObservableObject => {
    validateTimerInput(ObservableObject);
    InputSetter(ObservableObject);
});

const timerClick = fromEvent(document, "mousemove")
timerClick.subscribe(ObservableObject => {
    InputSetter(ObservableObject);
    validateTimerClick(ObservableObject);
});

let userSetHours = document.getElementsByClassName("TimerSetNumber")[0]
let userSetMinutes = document.getElementsByClassName("TimerSetNumber")[1]
let userSetSeconds = document.getElementsByClassName("TimerSetNumber")[2]
let secondsUpdater = userSetSeconds.value;
let minutesUpdater = userSetMinutes.value;
let hoursUpdater = userSetHours.value;

const startClick = fromEvent(button, "click")
startClick.subscribe(() => {
    if (buttonStarted == false) {
        if (isNaN(userSetHours)) {
            userSetHours = 59;
        }
        if (isNaN(userSetMinutes)) {
            userSetMinutes = 59;
        }
        if (isNaN(userSetSeconds)) {
            userSetSeconds = 59;
        }
        secondsUpdater = userSetSeconds;
        minutesUpdater = userSetMinutes;
        hoursUpdater = userSetHours;
        TimeHours.textContent = hoursUpdater;
        TimeMinutes.textContent = minutesUpdater;
        TimeSeconds.textContent = secondsUpdater;
        buttonStarted = true;
        buttonText.textContent = "STOP COUNTDOWN";
        buttonIcon[0].textContent = "pause";
        Countdown();
    } else {
        buttonStarted = false;
        buttonText.textContent = "START COUNTDOWN";
        buttonIcon[0].textContent = "play_arrow";
    }
});

function InputSetter(ObservableObj) {
    // if the placeholder is h then set the hours
    if (ObservableObj.target.id == "HoursInput") {
        userSetHours = ObservableObj.target.value;
        if (isNaN(ObservableObj.target.value)) {
            userSetHours = 59;
            ObservableObj.target.value = 59;
        }
    } else if (ObservableObj.target.id == "MinutesInput") {
        userSetMinutes = ObservableObj.target.value;
        if (isNaN(ObservableObj.target.value)) {
            userSetMinutes = 59;
            ObservableObj.target.value = 59;
        }
    } else if (ObservableObj.target.id == "SecondsInput") {
        userSetSeconds = ObservableObj.target.value;
        if (isNaN(ObservableObj.target.value)) {
            userSetSeconds = 59;
            ObservableObj.target.value = 59;
        }
    }
}

function validateTimerInput(ObservableObj) {
    const timerValue = ObservableObj.target.value;
    if (timerValue >= 59) {
        ObservableObj.target.value = 59;
    } else if (timerValue < 0) {
        ObservableObj.target.value = "00";
    } else if (isNaN(timerValue)) {
        ObservableObj.target.value = "00";
    }
}

function validateTimerClick(ObservableObj) {
    const timerValue = ObservableObj.target.value;
    if (!isNaN(timerValue) && timerValue < 10 && timerValue.length == 1) {
        ObservableObj.target.value = "0" + timerValue;
    }
}

function Countdown() {

    let SecondsObservable = new Observable((observer) => {
        let Seconds = setInterval(() => {
            if (buttonStarted == false) {
                clearInterval(Seconds);
            } else if (secondsUpdater == 0 && minutesUpdater > 0) {
                secondsUpdater = 59;
                TimeSeconds.textContent = secondsUpdater;
                observer.next(secondsUpdater);
            } else if (secondsUpdater == 0 && hoursUpdater > 0) {
                secondsUpdater = 59;
                TimeSeconds.textContent = secondsUpdater;
                observer.next(secondsUpdater);
            } else if (secondsUpdater > 0) {
                secondsUpdater--;
                TimeSeconds.textContent = secondsUpdater;
                if (secondsUpdater < 10) {
                    TimeSeconds.textContent = "0" + secondsUpdater;
                }
                observer.next(secondsUpdater);
            }
        }, 1000);
    });

    let MinutesObservable = new Observable((observer) => {
        let Minutes = SecondsObservable.subscribe((s) => {
            if (secondsUpdater == 59 && minutesUpdater == 0 && hoursUpdater > 0) {
                minutesUpdater = 59;
                TimeMinutes.textContent = minutesUpdater;
                observer.next(minutesUpdater);
            } else if (secondsUpdater == 59 && minutesUpdater > 0) {
                minutesUpdater--;
                TimeMinutes.textContent = minutesUpdater;
                if (minutesUpdater < 10) {
                    TimeMinutes.textContent = "0" + minutesUpdater;
                }
                observer.next(minutesUpdater);
            }
        });
    });

    let HoursObservable = new Observable((observer) => {
        let Hours = MinutesObservable.subscribe((m) => {
            if (secondsUpdater == 59 && minutesUpdater == 59 && hoursUpdater > 0) {
                hoursUpdater--;
                TimeHours.textContent = hoursUpdater;
                observer.next(hoursUpdater);
                if (hoursUpdater < 10) {
                    TimeHours.textContent = "0" + hoursUpdater;
                }
                observer.next(hoursUpdater);
            }
        });
    });

    if (buttonStarted) {
        countdown.style.display = "flex";
        HoursObservable.subscribe((Hours) => {
            if (Hours == 0 && minutesUpdater == 0 && secondsUpdater == 0) {
                buttonStarted = false;
                buttonText.textContent = "START COUNTDOWN";
            }
        });
    } else if (!buttonStarted) {
        HoursObservable.unsubscribe();
        return;
    }

}
