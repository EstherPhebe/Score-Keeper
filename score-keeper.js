let playerOne = document.getElementById("p-one");
let playerTwo = document.getElementById("p-two");
let resetButton = document.getElementById("reset");
let num1 = document.getElementsByTagName("span")[0];
let num2 = document.getElementsByTagName("span")[1];
let upTo = document.getElementsByTagName("span")[2]
let input = document.getElementsByTagName("input")[0]
let p1Score = 0;
let p2Score = 0;
let winningScore = Number(input.value);
let gameOver = false;

input.addEventListener("change", function () {
    upTo.textContent = input.value//can also be this.value
    winningScore = Number(input.value);
})
playerOne.addEventListener("click", function (){
    if (!gameOver) {
        p1Score++;
        if (p1Score === winningScore){
            gameOver = true;
            num1.classList.add("color");
        }
        num1.textContent = p1Score;
    }
})

playerTwo.addEventListener("click", function (){
    if (!gameOver) {
        p2Score++;
        if (p2Score === winningScore){
            gameOver = true;
            num2.classList.add("color");
        }
        num2.textContent = p2Score;
    }
})

resetButton.addEventListener("click", function (){
    reset();
})

function reset() {
    p1Score = 0;
    p2Score = 0;
    num1.textContent = 0;
    num1.classList.remove("color");
    num2.textContent = 0;
    num2.classList.remove("color");
    gameOver = false;
}