
let message = document.querySelector("h1");
let dices = document.querySelectorAll(".dice");


function game() {
    let x = [];
    dices.forEach(item => {
        let random_number = Math.floor(Math.floor(Math.random() * 6)) + 1;
        
        x.push(random_number);
        console.log(x)
        window.addEventListener("load", () => {
            item.firstElementChild.nextElementSibling.setAttribute("src", `./images/dice${random_number}.png`);
        })
    })

    function result() {
        let result = ""
        if (x[0] === x[1]) {
            result = "Draw"
        }
        else if (x[0] > x[1]) {
            result = "Player1 Wins!"
        }
        else {
            result = "Player2 Wins!"
        }
        return result;
    }

    message.innerHTML = result();   

}


game();