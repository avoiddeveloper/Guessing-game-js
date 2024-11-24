let won = 0;
let lose = 0;
for (let i = 1; i <= 5; i++) {
    // UserInput
    const input = parseInt(prompt("Enter A Number 1 to 5"));
    const randomNumber = Math.floor(Math.random() * 5) + 1;
    // Condition
    if (input === randomNumber) {
        console.log("Your Won " + "The Number Was " + randomNumber);
        won++;
    } else {
        console.log("Your Lose " + "The Number Was " + randomNumber);
        lose++;
    }
}
// Print In Document
document.write("You Won " + won + " Times <br>");
document.write("You Lose " + lose + " Times");