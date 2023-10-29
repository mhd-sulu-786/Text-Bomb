
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let text = "";
let range = 0;
// Set the length of the text (number of characters)
const textLength = 10000;

// Create a string with repeated characters
const largeText = "Bomber (mhd-sulu-786)".repeat(textLength / 20);

// Log the large text to the console
console.log(largeText);



function initializeGame() {
    getUserInput();
}

function getUserInput() {
    readline.question("Enter Your Enemy name: ", (enemyName) => {
        text = enemyName;

        readline.question("Enter Text for Enemy: ", (textForEnemy) => {
            text += textForEnemy;

            readline.question("Choose bomb text level (1.Low, 2.MEDIUM, 3.HIGH, 4.EXTRA-HIGH): ", (input) => {
                range = parseInt(input);

                if (range >= 1 && range <= 4) {
                    bomb(text, range);
                } else {
                    console.log("Wrong input. Try again...");
                }

                readline.close();
            });
        });
    });
}

initializeGame();
function bomb(text, range) {
    let limit;

    switch (range) {
        case 1:
            limit = 100;
            break;
        case 2:
            limit = 500;
            break;
        case 3:
            limit = 1000;
            break;
        case 4:
            limit = 1750;
            break;
        default:
            limit = 250;
            break;
    }

    console.log("Starting");
    text = run(text); // Assign the result of run() to the 'text' variable

    function start() {
        console.log("1.");
        for (let index = 1; index <= limit * 10; index++) {
            for (let y = 1; y <= limit; y++) {
                console.log(text);
            }
            console.log(index + 1 + ".");
        }
    }

    start();
}

function run(text) {
    let Text = ""; // Initialize Text as an empty string
    for (let index = 0; index < text.length * 10; index++) {
        for (let y = 0; y < text.length; y++) {
            Text += text + " Fuck you \t  "; // Concatenate text to Text
        }
        Text += "what is Fuck*** \n";
    }
    return Text;
}





