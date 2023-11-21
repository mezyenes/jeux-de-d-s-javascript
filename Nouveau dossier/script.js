

// nom de joueur 
var player1 = "joueur 1";
var player2 = "joueur 2";

// Function pour changer le nom des joueurs
function editNames() {
    player1 = prompt("Change Player1 name");
    player2 = prompt("Change player2 name");

    document.querySelector("p.Player1")
        .innerHTML = player1;

    document.querySelector("p.Player2")
        .innerHTML = player2;
}

// Function pour lancer le des
function rollTheDice() {
    setTimeout(function () {
        var randomNumber1 = Math.floor(Math.random() * 6) + 1;
        var randomNumber2 = Math.floor(Math.random() * 6) + 1;

        document.querySelector(".img1").setAttribute("src",
            "dice" + randomNumber1 + ".png");

        document.querySelector(".img2").setAttribute("src",
            "dice" + randomNumber2 + ".png");

        if (randomNumber1 === randomNumber2) {
            document.querySelector("h1").innerHTML = "match-nul";
        }

        else if (randomNumber1 < randomNumber2) {
            document.querySelector("h1").innerHTML
                = (player2 + " a gagner");
        }

        else {
            document.querySelector("h1").innerHTML
                = (player1 + " a gagner");
        }
    }, 2500);
}

