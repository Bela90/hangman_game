var leftArmHtml = '<div class="leftarm"></div>';
var rightArmHtml = '<div class="rightarm"></div>';
var torsoHtml = '<div class="torso"></div>';
var leftLegHtml = '<div class="leftleg"></div>';
var rightLegHtml = '<div class="rightleg"></div>';
var pelvisHtml = '<div class="pelvis"></div>';
var headHtml = '<div class="head"></div>';

var missedCounter = 0;
const MAX_MISSED = 7;


var words = [
    "javascript",
    "monkey",
    "amazing",
    "pancake",
    "ana"
];


// Pick a random word
var word = words[Math.floor(Math.random() * words.length)];


// Set up the answer array
var answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}



var remainingUnguessedLetters = word.length;



document.getElementById("crtice").innerHTML = answerArray.join(" ");


var previousLetters = [];

document.getElementById("id1")
    .addEventListener("keypress", function(event) {

        if (event.keyCode == 13) {

            document.getElementById("id2").click();
            event.preventDefault();

        }
    });

function myFunction(form) {

    var isUpated = false;
    var inputLetter = form.slovo.value;
    
    inputLetter = inputLetter.toLowerCase();
    
    document.getElementById('id1').value = "";

    if (inputLetter.length !== 1) {
        return;
    }

    if (previousLetters.includes(inputLetter)) {
        return;
    } else {
        previousLetters.push(inputLetter);
    }


    for (var j = 0; j < word.length; j++) {
        if (word[j] === inputLetter) {
            answerArray[j] = inputLetter;
            remainingUnguessedLetters--;
            isUpated = true;
        }
    }

    if (isUpated === false) {
        missedCounter++;
        if (missedCounter == 1) {

            document.getElementById("head-id").innerHTML += headHtml;

        }
        if (missedCounter == 2) {
            document.getElementById("armbox-id").innerHTML += leftArmHtml;
        }
        if (missedCounter == 3) {
            document.getElementById("armbox-id").innerHTML += rightArmHtml;
        }
        if (missedCounter == 4) {
            document.getElementById("armbox-id").innerHTML += torsoHtml;
        }

        if (missedCounter == 5) {
            document.getElementById("legbox-id").innerHTML += pelvisHtml;
        }

        if (missedCounter == 6) {
            document.getElementById("legbox-id").innerHTML += leftLegHtml;
        }
        if (missedCounter == 7) {
            document.getElementById("legbox-id").innerHTML += rightLegHtml;
        }

    }


    if (missedCounter == MAX_MISSED) {
        var timeUp = function() {
            alert("You failed! The answer was " + word);
        };
        setTimeout(timeUp, 400);
    }


    document.getElementById("crtice").innerHTML = answerArray.join(" ");

    if (remainingUnguessedLetters == 0) {

        var timeUp = function() {
            alert("Good job! The answer was " + word);
        };
        setTimeout(timeUp, 400);
    }
}
