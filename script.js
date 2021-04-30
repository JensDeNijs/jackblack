let playerTarget = document.getElementById("playerCard");
let computerTarget = document.getElementById("cpuCard");
let messageTarget = document.getElementById("message");
let totalTarget = document.getElementById("totalPlayer");
let totalCPUTarget = document.getElementById("totalCPU");
let som = 0;
let cpuSom = 0;

let suits = ["♠", "♡", "♣", "♢"];
let values = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

// function getDeck() {
let deck = new Array();

for (let i = 0; i < suits.length; i++) {
    for (let x = 0; x < values.length; x++) {
        let card = {Value: values[x], Suit: suits[i]};
        deck.push(card);
    }
}
console.log(randomCard(deck));
// return deck;
// }


document.getElementById("hit").addEventListener("click", function () {
    let someCard = randomCard(deck);
    let cpuCard = randomCard(deck)
    if (som >= 21 || cpuSom >= 21) {
        reset()
    }
    som = +som + +someCard.Value;
    cpuSom = +cpuSom + +cpuCard.Value;

    playerTarget.innerHTML += " " + someCard.Value + someCard.Suit;
    totalTarget.innerHTML = som;

    if (som < 21) {
        setTimeout(function () {
            computerTarget.innerHTML += " " + cpuCard.Value + cpuCard.Suit;
            totalCPUTarget.innerHTML = cpuSom;
            if (cpuSom > 21) {
                messageTarget.innerHTML = "YOU WON!"
            }
        }, 400);

    } else if (som > 21) {
        messageTarget.innerHTML = "YOU LOST!";

    } else {
        messageTarget.innerHTML = "BLACKJACK!!!!"
    }
});

document.getElementById("stand").addEventListener("click", function () {
    let cpuCard = randomCard(deck)
    if (som < cpuSom) {
        messageTarget.innerHTML = "YOU LOST!"

    } else if (som === cpuSom && cpuSom > 15) {
        messageTarget.innerHTML = "ITS A TIE!"

    } else {
        cpuSom = +cpuSom + +cpuCard.Value;

            computerTarget.innerHTML += " " + cpuCard.Value + cpuCard.Suit;
            totalCPUTarget.innerHTML = cpuSom;

        if (som < cpuSom && cpuSom < 21) {
            messageTarget.innerHTML = "YOU LOST!";

        } else if (som === cpuSom && cpuSom < 21) {
            messageTarget.innerHTML = "YOU LOST";

        } else if (cpuSom < som) {
            while (cpuSom < som) {
                cpuSom = +cpuSom + +cpuCard.Value;
                setTimeout(function () {
                        computerTarget.innerHTML += " " + cpuCard.Value + cpuCard.Suit;
                        totalCPUTarget.innerHTML = cpuSom;
                    }
                    , 400);
                cpuSom= 22;
            }
            if (cpuSom <21){
                messageTarget.innerHTML = "YOU WON!";
                cpuSom= 22;
            }else{
                messageTarget.innerHTML = "YOU LOST";
            }
            cpuSom= 22;
        } else {
            messageTarget.innerHTML = "YOU WON!";
            cpuSom= 22;
        }
    }
});

function randomCard(arr) {

    return arr[Math.floor(Math.random() * arr.length)];
}

function reset() {
    som = 0;
    cpuSom = 0;
    messageTarget.innerHTML = "play again";
    playerTarget.innerHTML = "Your cards:";
    computerTarget.innerHTML = "CPUs cards:";
    totalTarget.innerHTML = "0";
    totalCPUTarget.innerHTML = "0";

}