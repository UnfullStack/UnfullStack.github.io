// function to generate a random integer between min and max
function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setGreeting() {
    let now = new Date(); // built in class in js
   
    // good morning - < 12
    // good afternoon - < 6 pm
    // good night - otherwise

    const hours = now.getHours();
    let output = document.getElementById("greetingOutput");

    if (hours < 12) {
        output.textContent = "Good Morning!";
    } else if (hours < 6) {
        output.textContent = "Good Afternoon!";
    } else {
        output.textContent = "Good Night!";
    }
}
window.onload = function() {
    setGreeting();
}

function setButtonText() {
    const hello = "Hello! Thank you for clicking!";
    
    let output = document.getElementById("buttonClickText");
    let btn = document.getElementById("clickButton");

    if (output.textContent != hello) {
        output.textContent = hello;
        btn.textContent = "Click me again!"
    } else {
        output.textContent = "Goodbye!";
        btn.textContent = "Click me!";
    }
}

function setDateButtonText() {
    let now = new Date();
    document.getElementById("dateButtonClickText").textContent = now;
}

let pageText = new Map();
let scrambled = false;
function scrambleText() {
    const valid = ["H1","H2","H3","H4","P","DIV","BUTTON","LABEL"];
    // split this big string up into a list with all of these characters
    const lets = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()`~[]{}-_=+|/.,;:".split('');
    let items = document.querySelectorAll("*");

    // loop through items
    for (let i = 0; i < items.length; i++) {
        let item = items[i];

        // check that it is something we want to change
        if (valid.includes(item.tagName)) {
            // check if we are scrambling or unscrambling
            if (!scrambled) {
                // store text in a map for unscrambling later
                pageText.set(item,item.textContent);
                let text = "";
                // make scramble text as long as the original text
                for (let v = 0; v < item.textContent.length; v++) {
                    // pick a random item
                    text += lets[Math.floor(Math.random() * lets.length)];
                }
                item.textContent = text;
            } else {
                // grab the text from the map and use that
                item.textContent = pageText.get(item);
            }
        }
    }

    // flip value
    scrambled = !scrambled;
}

function sumNumbers() {
    /* grab values from number entries and convert to float */
    let n1 = parseFloat(document.getElementById("n1").value);
    let n2 = parseFloat(document.getElementById("n2").value);

    let out = (n1+n2).toString();

    /* check if they entered something invalid */
    if (out == "NaN") {
        out = "Please enter valid numbers in both boxes!";
    }

    document.getElementById("finalSum").textContent = out;
}

function textLength() {
    // grab the text and set the output text
    let txt = document.getElementById("textLengthInput").value;
    document.getElementById("textLengthOutput").textContent = `"${txt}" has ${txt.length} characters.`;
}

function updatePassword() {
    // define the elements being read/set
    let entry = document.getElementById("password");
    let box = document.getElementById("showPassword");

    // read if the box is checked and change outcome
    if (box.checked) {
        entry.type = "text";
    } else {
        entry.type = "password";
    }
}

function styleText() {
    // get element
    let elem = document.getElementById("styledText")
    // set color values
    const r = randInt(0,255);
    const g = randInt(0,255);
    const b = randInt(0,255);
    // set a random color and size
    elem.style = `color: rgb(${r},${g},${b}); font-size: ${randInt(8,20)/10}em`;
    // set background color to be inverted
    elem.style.setProperty("--bg",`rgb(${255-r},${255-g},${255-b})`);
}

function toggleElement() {
    document.getElementById("toggledElement").hidden = !document.getElementById("toggledElement").hidden
}