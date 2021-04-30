let playerTarget = document.getElementById("playerCard");
let computerTarget = document.getElementById("cpuCard");
let messageTarget = document.getElementById("message");

let suits = ["spades", "diamonds", "clubs", "hearts"];
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
    console.log(someCard);
    console.log(someCard["Value"]);
    playerTarget.innerHTML += someCard.Value;
});

document.getElementById("stand").addEventListener("click", function () {

});

function randomCard(arr) {

    return arr[Math.floor(Math.random() * arr.length)];
}