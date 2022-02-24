let addVoucher = JSON.parse(localStorage.getItem("allVouchers"));
let voucher;
function generate() {
    let numOfCard = num.value;
    let network = networks.value;
    let amount = amounts.value;

    for (let i = 0; i < numOfCard; i++) {
        let card = Math.floor(Math.random() * 100000000000000000);
        output.innerHTML += `<div style="background-color:white;"> <span style="font-size:16px;font-weight:bolder;">${network}</span><span style="color:green;font-size:14px;font-weight:bolder;">unused</span> <span style="font-size:16px;font-weight:bolder;">${amount}</span><hr><span style="text-align:center;color:green;font-size:16px;font-weight:bolder;margin-bottom:50px;">${card}</span></div> </br>`;
        voucher = {
            cardType: network,
            cardAmount: amount,
            cardNo: card,
        }
        if (addVoucher) {
            addVoucher = [...addVoucher, voucher];
            localStorage.setItem("allVouchers", JSON.stringify(addVoucher));
        }
        else {
            localStorage.setItem("allVouchers", JSON.stringify([voucher]));
        }
    }
}
function display() {
    let all = JSON.parse(localStorage.getItem("allVouchers"));
    console.log((all[0].cardNo));
    for (let i = 0; i < all.length; i++) {
        const element = all[i];
        output.innerHTML += `<div style="background-color:white;height:100px"> <span style="font-size:16px;font-weight:bolder;">${element.cardType}</span><span style="color:green;font-size:15px;font-weight:bolder;">unused</span> <span style="font-size:16px;font-weight:bolder;">${element.cardAmount}</span><hr><span style="text-align:center;color:green;font-size:16px;font-weight:bolder;margin-bottom:50px;">${element.cardNo}</span></div> </br>`;
    }
}
function run() {
    let defaultDate = new Date;
    let defaultHour = defaultDate.getHours();
    let defaultMinute = defaultDate.getMinutes();
    let defaultSeconds = defaultDate.getSeconds();

    if (defaultHour == 24 || defaultHour < 12) {
        currentHr.innerText = defaultHour;
        currentMin.innerHTML = defaultMinute + " " + `<sub style="font-size:10px;margin-left:-8px;">AM</sub>`;
        // currentSec.innerText = defaultSeconds;
        currentHrs.innerText = defaultHour;
        currentMins.innerHTML = defaultMinute + " " + `<sub style="font-size:10px;margin-left:-8px;">AM</sub>`;
        // currentSec.innerText = defaultSeconds;
        currentHours.innerText = defaultHour;
        currentMinutes.innerHTML = defaultMinute;
    }
    else {
        currentHr.innerText = defaultHour;
        currentMin.innerHTML = defaultMinute + " " + `<sub style="font-size:10px;margin-left:-8px;">PM</sub>`;
        // currentSec.innerText = defaultSeconds;
        currentHrs.innerText = defaultHour;
        currentMins.innerHTML = defaultMinute + " " + `<sub style="font-size:10px;margin-left:-8px;">PM</sub>`;
        // currentSec.innerText = defaultSeconds;
    }
}
setInterval("run()", 1000);

function unlock() {
    lockScreen.hidden = true;
    homeScreen.hidden = false;
}
function menue() {
    homeScreen.hidden = true;
    menuScreen.hidden = false;
}
function calLog() {
    homeScreen.hidden = true;
    menuScreen.hidden = true;
    callScreen.hidden = false;
}
function Voucher() {
    menuScreen.hidden = true;
    voucherScreen.hidden = false;
}
function inserts(e) {
    keyScreen.value += e;
    console.log(keyScreen.value);
}
function clearIt() {
    var input = keyScreen.value;
    var b = input.substring(0, input.length - 1);
    var c = input.substring(0, input.length - 1);
    keyScreen.value = c;
}
function back() {
    homeScreen.hidden = true;
    menuScreen.hidden = false;
    callScreen.hidden = true;
    voucherScreen.hidden = true;
    gameScreen.hidden = true;
    alarmScreen.hidden = true;
}
function home() {
    homeScreen.hidden = false;
    menuScreen.hidden = true;
    callScreen.hidden = true;
    voucherScreen.hidden = true;
    gameScreen.hidden = true;
    alarmScreen.hidden =true;''
}
function alarmSet() {
    homeScreen.hidden = true;
    menuScreen.hidden = true;
    alarmScreen.hidden = false;
}
function game() {
    menuScreen.hidden = true;
    gameScreen.hidden = false;
}

let hr;
let min;
let sec;
let sound = new Audio();
sound.src = "audio/alarm.mp3";
function myCount() {
    let defaultDate = new Date;
    let defaultHour = defaultDate.getHours();
    let defaultMinute = defaultDate.getMinutes();
    let defaultSeconds = defaultDate.getSeconds();

    alarmHr.innerText = defaultHour;
    alarmMin.innerText = defaultMinute;
    alarmSec.innerText = defaultSeconds;

    if (hr == defaultHour && min == defaultMinute && sec == defaultSeconds) {
        sound.play();
        sound.loop = true;
    }
}
function setAlarm() {
    hr = hours.value;
    min = minutes.value;
    sec = seconds.value;
    console.log(hr + min + sec);
}
function stopAlarm() {
    alert("What is the answer to this mathematics arithmetic? 19 + 12");
    alarminp.hidden = false;
    sub.hidden = false;
}
function submit() {
    let answer = 31;
    let input = alarminp.value;
    if (answer == input) {
        sound.pause();
        sound.loop = false;
        inp.hidden = true;
        sub.hidden = true;
    }
    else {
        alert("Try again");
    }
}
setInterval("myCount()", 1000)

let check = true;
let win = "wow! You won ";
let lose = "oops! You lose ";
let draw = " You draw with "
let sounds = new Audio();
sounds.src = "audio/Right_Said_Fred_-_Stand_Up_For_The_Champions__[NaijaGreen.Com]_.mp3";
function startGame() {
    let firstPlayer = first.value;
    let secondPlayer = second.value;
    if (start.innerText == "Start" && firstPlayer && secondPlayer) {
        start.innerText = "End";
        outputs.innerHTML = firstPlayer + " is X and " + secondPlayer + " is O Start the game!";
        user_1.innerText = firstPlayer;
        user_2.innerText = secondPlayer;
        one.disabled = false;
        two.disabled = false;
        three.disabled = false;
        four.disabled = false;
        five.disabled = false;
        six.disabled = false;
        seven.disabled = false;
        eight.disabled = false;
        nine.disabled = false;
    }
    else if (start.innerText == "End" && firstPlayer && secondPlayer) {
        start.innerText = "Start";
        outputs.innerHTML = "";
        first.value = "";
        second.value = "";
        user_1.innerText = "",
            user_2.innerText = "",
            user1.innerText = "0";
        user2.innerText = "0";
        sounds.pause();
        sounds.loop = false;
        one.disabled = true;
        two.disabled = true;
        three.disabled = true;
        four.disabled = true;
        five.disabled = true;
        six.disabled = true;
        seven.disabled = true;
        eight.disabled = true;
        nine.disabled = true;
        one.innerHTML = "";
        two.innerHTML = "";
        three.innerHTML = "";
        four.innerHTML = "";
        five.innerHTML = "";
        six.innerHTML = "";
        seven.innerHTML = "";
        eight.innerHTML = "";
        nine.innerHTML = "";
    }
    else {
        start.innerText = "Start";
        outputs.innerHTML = "Please enter your name..."
        one.innerHTML = "";
        two.innerHTML = "";
        three.innerHTML = "";
        four.innerHTML = "";
        five.innerHTML = "";
        six.innerHTML = "";
        seven.innerHTML = "";
        eight.innerHTML = "";
        nine.innerHTML = "";
    }

}

function play(e) {
    if (e.target.innerText != "") return;
    if (check == true) {
        e.target.innerText = "X";
        check = false;
        outputs.innerHTML = " ";
    }
    else {
        e.target.innerText = "O";
        check = true;
    }
    if (one.innerHTML == "X" && two.innerHTML == "X" && three.innerHTML == "X" || four.innerHTML == "X" && five.innerHTML == "X" && six.innerHTML == "X" || seven.innerHTML == "X" && eight.innerHTML == "X" && nine.innerHTML == "X" || one.innerHTML == "X" && four.innerHTML == "X" && seven.innerHTML == "X" || two.innerHTML == "X" && five.innerHTML == "X" && eight.innerHTML == "X" || three.innerHTML == "X" && six.innerHTML == "X" && nine.innerHTML == "X" || one.innerHTML == "X" && five.innerHTML == "X" && nine.innerHTML == "X" || three.innerHTML == "X" && five.innerHTML == "X" && seven.innerHTML == "X") {
        user1.innerText++;
        outputs.innerText = win + first.value + ", but " + lose + second.value;
        sounds.play();
        sounds.loop = true;
        one.disabled = true;
        two.disabled = true;
        three.disabled = true;
        four.disabled = true;
        five.disabled = true;
        six.disabled = true;
        seven.disabled = true;
        eight.disabled = true;
        nine.disabled = true;
    }
    else if (one.innerHTML == "O" && two.innerHTML == "O" && three.innerHTML == "O" || four.innerHTML == "O" && five.innerHTML == "O" && six.innerHTML == "O" || seven.innerHTML == "O" && eight.innerHTML == "O" && nine.innerHTML == "O" || one.innerHTML == "O" && four.innerHTML == "O" && seven.innerHTML == "O" || two.innerHTML == "O" && five.innerHTML == "O" && eight.innerHTML == "O" || three.innerHTML == "O" && six.innerHTML == "O" && nine.innerHTML == "O" || one.innerHTML == "O" && five.innerHTML == "O" && nine.innerHTML == "O" || three.innerHTML == "O" && five.innerHTML == "O" && seven.innerHTML == "O") {
        user2.innerText++;
        outputs.innerText = win + second.value + ", but " + lose + first.value;
        sounds.play();
        sounds.loop = true;
        one.disabled = true;
        two.disabled = true;
        three.disabled = true;
        four.disabled = true;
        five.disabled = true;
        six.disabled = true;
        seven.disabled = true;
        eight.disabled = true;
        nine.disabled = true;
    }
    else if ((one.innerHTML == "O" || one.innerHTML == "X") && (two.innerHTML == "O" || two.innerHTML == "X") && (three.innerHTML == "O" || three.innerHTML == "X") && (four.innerHTML == "O" || four.innerHTML == "X") && (five.innerHTML == "O" || five.innerHTML == "X") && (six.innerHTML == "O" || six.innerHTML == "X") && (seven.innerHTML == "O" || seven.innerHTML == "X") && (eight.innerHTML == "O" || eight.innerHTML == "X") && (nine.innerHTML == "O" || nine.innerHTML == "X")) {
        outputs.innerText = "oops! " + first.value + draw + second.value;
    }
}

function replay() {
    sounds.pause();
    sounds.currentTime = 0;
    outputs.innerHTML = " ";
    one.disabled = false;
    two.disabled = false;
    three.disabled = false;
    four.disabled = false;
    five.disabled = false;
    six.disabled = false;
    seven.disabled = false;
    eight.disabled = false;
    nine.disabled = false;
    one.innerHTML = " ";
    two.innerHTML = " ";
    three.innerHTML = " ";
    four.innerHTML = " ";
    five.innerHTML = " ";
    six.innerHTML = " ";
    seven.innerHTML = " ";
    eight.innerHTML = " ";
    nine.innerHTML = " ";
}

function insert(num) {
    displayOutput.value += num;
}
function equall() {
    displayOutput.value = eval(displayOutput.value);
}
function clears() {
    displayOutput.value = " ";
}
function del() {
    var a = displayOutput.value;
    var b = a.substring(0, a.length - 1);
    var c = a.substring(0, a.length - 1);
    displayOutput.value = c
}
let myLocalStore = JSON.parse(localStorage.getItem("allVouchers"));
function callOne() {
    let loadCard = keyScreen.value.includes("*555*");
    let myData = myLocalStore.find((val, i) => val.numOfCard)
    console.log(myData);
    // if (loadCard + myData == keyScreen.value + "#") {

    //     acctBalance.hidden = false;
    // }
}
// console.log(myLocalStore);
// function login() {
//     let myArray = myLocalStore.find((val, i) => val.fName == username.value && val.pwrd == logPwrd.value)
//     if (!myArray) {
//         alert('user does not exist');
//     }
//     else {
//         location.href = 'index.html';
//     }
//     console.log(myArray);
// }
