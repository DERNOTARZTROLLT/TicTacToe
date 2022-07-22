let currentPlayer = "X";
let player1 = 0;
let player2 = 0;
let counter = 0;
let gamer = 2;
let kicounter = 0;
let zoomp1 = document.getElementById("player1")
let zoomp2 = document.getElementById("player2")
let kreise = document.getElementsByClassName("kreis")[0]
//symbole setzen
function setSymbol(btn) {
    if (btn.innerHTML == "") {
        btn.innerHTML = currentPlayer;
        btn.classList.add('animate__animated');
        btn.classList.add('animate__fadeIn');

        if (gamer == 1) {
            kitrain();
            checkWin();
        } else {
            checkWin();
            changeplayer();
        }
        counter = counter + 1;
    }
}
function nextround() {
    //symbole verschwinden display verschwindet
    document.getElementById("overlay").style.display = "none";
    document.getElementById("overlay2").style.display = "none";
    let felder = document.getElementsByClassName("feld");
    let x = felder.length;

    zoomp1.classList.remove('animate__animated');
    zoomp1.classList.remove('animate__zoomIn');
    zoomp2.classList.remove('animate__animated');
    zoomp2.classList.remove('animate__zoomIn');
    kreise.className = ("kreis")
    for (var i = 0; i < x; i++) {
        felder[i].innerHTML = "";
        felder[i].classList.remove("animate__animated");
        felder[i].classList.remove("animate__fadeIn");
    }
    counter = 0;
    kicounter = 0;
    currentPlayer = "X";

}
//function unentschieden?
function draw() {
    if (counter >= 8) {
        document.getElementById("overlay2").style.display = "block";
    }
}
//menue function
function resume() {
    document.getElementById("overlayh").style.display = "none";
}
function home() {
    if (document.getElementById("overlayh").style.display == "none") {
        document.getElementById("overlayh").style.display = "block";
    } else {
        document.getElementById("overlayh").style.display = "none";
    }
}
function restart() {
    document.getElementById("overlayh").style.display = "none";
    currentPlayer = "X";
    player1 = 0;
    player2 = 0;
    counter = 0;
    kicounter = 0;
    document.getElementById("player1").innerHTML = player1;
    document.getElementById("player2").innerHTML = player2;
    let felder = document.getElementsByClassName("feld");
    let x = felder.length;
    for (var i = 0; i < x; i++) {
        felder[i].innerHTML = ""
        felder[i].classList.remove("animate__animated");
        felder[i].classList.remove("animate__fadeIn");
        zoomp1.classList.remove('animate__animated');
        zoomp1.classList.remove('animate__zoomIn');
        zoomp2.classList.remove('animate__animated');
        zoomp2.classList.remove('animate__zoomIn');
        kreise.className = ("kreis")
    }

}
//function wechsele Spieler jeweils nach dem Zug
function changeplayer() {
    if (currentPlayer == "X") {
        currentPlayer = "O";
    }
    else {
        currentPlayer = "X";

    }
}
//function spielmodus setzen
function setGameMode(mode) {
    gamer = mode;
    restart();

}
//ueberpruefe ob jemand gewonnen Hat
function checkWin() {
    let felder = document.getElementsByClassName("feld")
    if (felder[0].innerHTML == felder[1].innerHTML && felder[1].innerHTML == felder[2].innerHTML && felder[0].innerHTML == "X" ||
        felder[3].innerHTML == felder[4].innerHTML && felder[4].innerHTML == felder[5].innerHTML && felder[3].innerHTML == "X" ||
        felder[6].innerHTML == felder[7].innerHTML && felder[7].innerHTML == felder[8].innerHTML && felder[6].innerHTML == "X" ||
        felder[0].innerHTML == felder[3].innerHTML && felder[3].innerHTML == felder[6].innerHTML && felder[0].innerHTML == "X" ||
        felder[1].innerHTML == felder[4].innerHTML && felder[4].innerHTML == felder[7].innerHTML && felder[1].innerHTML == "X" ||
        felder[2].innerHTML == felder[5].innerHTML && felder[5].innerHTML == felder[8].innerHTML && felder[2].innerHTML == "X" ||
        felder[0].innerHTML == felder[4].innerHTML && felder[4].innerHTML == felder[8].innerHTML && felder[0].innerHTML == "X" ||
        felder[2].innerHTML == felder[4].innerHTML && felder[4].innerHTML == felder[6].innerHTML && felder[2].innerHTML == "X") {
        player1 = player1 + 1;
        document.getElementById("player1").innerHTML = player1;
        checkwhy()
        document.getElementById("overlay").style.display = "block";
        document.getElementById("meldung").innerHTML = "X"
        zoomp1.classList.add('animate__animated');
        zoomp1.classList.add('animate__zoomIn');
    } else if (felder[0].innerHTML == felder[1].innerHTML && felder[1].innerHTML == felder[2].innerHTML && felder[0].innerHTML == "O" ||
        felder[3].innerHTML == felder[4].innerHTML && felder[4].innerHTML == felder[5].innerHTML && felder[3].innerHTML == "O" ||
        felder[6].innerHTML == felder[7].innerHTML && felder[7].innerHTML == felder[8].innerHTML && felder[6].innerHTML == "O" ||
        felder[0].innerHTML == felder[3].innerHTML && felder[3].innerHTML == felder[6].innerHTML && felder[0].innerHTML == "O" ||
        felder[1].innerHTML == felder[4].innerHTML && felder[4].innerHTML == felder[7].innerHTML && felder[1].innerHTML == "O" ||
        felder[2].innerHTML == felder[5].innerHTML && felder[5].innerHTML == felder[8].innerHTML && felder[2].innerHTML == "O" ||
        felder[0].innerHTML == felder[4].innerHTML && felder[4].innerHTML == felder[8].innerHTML && felder[0].innerHTML == "O" ||
        felder[2].innerHTML == felder[4].innerHTML && felder[4].innerHTML == felder[6].innerHTML && felder[2].innerHTML == "O") {
        player2 = player2 + 1;
        document.getElementById("player2").innerHTML = player2;
        checkwhy()
        document.getElementById("overlay").style.display = "block";
        document.getElementById("meldung").innerHTML = "O"
        zoomp2.classList.add('animate__animated');
        zoomp2.classList.add('animate__zoomIn');
    } else {
        draw()
    }


}
function checkwhy() {
    let felder = document.getElementsByClassName("feld")

    if (felder[0].innerHTML == felder[1].innerHTML && felder[1].innerHTML == felder[2].innerHTML && felder[0].innerHTML == "X" ||
        felder[0].innerHTML == felder[1].innerHTML && felder[1].innerHTML == felder[2].innerHTML && felder[0].innerHTML == "O") {
        kreise.classList.add("kreis--top")
    } else if (felder[3].innerHTML == felder[4].innerHTML && felder[4].innerHTML == felder[5].innerHTML && felder[3].innerHTML == "X" ||
        felder[3].innerHTML == felder[4].innerHTML && felder[4].innerHTML == felder[5].innerHTML && felder[3].innerHTML == "O") {
        kreise.classList.add("kreis--center")
    } else if (felder[6].innerHTML == felder[7].innerHTML && felder[7].innerHTML == felder[8].innerHTML && felder[6].innerHTML == "X" ||
        felder[6].innerHTML == felder[7].innerHTML && felder[7].innerHTML == felder[8].innerHTML && felder[6].innerHTML == "O") {
        kreise.classList.add("kreis--bottom")
    } else if (felder[0].innerHTML == felder[3].innerHTML && felder[3].innerHTML == felder[6].innerHTML && felder[0].innerHTML == "X" ||
        felder[0].innerHTML == felder[3].innerHTML && felder[3].innerHTML == felder[6].innerHTML && felder[0].innerHTML == "O") {
        kreise.classList.add("kreis--left")
    } else if (felder[1].innerHTML == felder[4].innerHTML && felder[4].innerHTML == felder[7].innerHTML && felder[1].innerHTML == "X" ||
        felder[1].innerHTML == felder[4].innerHTML && felder[4].innerHTML == felder[7].innerHTML && felder[1].innerHTML == "O") {
        kreise.classList.add("kreis--middle")
    } else if (felder[2].innerHTML == felder[5].innerHTML && felder[5].innerHTML == felder[8].innerHTML && felder[2].innerHTML == "X" ||
        felder[2].innerHTML == felder[5].innerHTML && felder[5].innerHTML == felder[8].innerHTML && felder[2].innerHTML == "O") {
        kreise.classList.add("kreis--right")
    } else if (felder[0].innerHTML == felder[4].innerHTML && felder[4].innerHTML == felder[8].innerHTML && felder[0].innerHTML == "X" ||
        felder[0].innerHTML == felder[4].innerHTML && felder[4].innerHTML == felder[8].innerHTML && felder[0].innerHTML == "O") {
        kreise.classList.add("kreis--diaright")
    } else if (felder[2].innerHTML == felder[4].innerHTML && felder[4].innerHTML == felder[6].innerHTML && felder[2].innerHTML == "X" ||
        felder[2].innerHTML == felder[4].innerHTML && felder[4].innerHTML == felder[6].innerHTML && felder[2].innerHTML == "O") {
        kreise.classList.add("kreis--dialeft")
    }
}
//künstliche intelligenz mit ueberpruefung von gesetzten x und abwehren
function kitrain() {
    kicounter = kicounter + 1
    currentPlayer = "X"
    counter = counter + 1
    let felder = document.getElementsByClassName("feld")


    if (felder[0].innerHTML == "O" && felder[1].innerHTML == "O" && felder[2].innerHTML == "") {
        felder[2].innerHTML = "O";
        felder[2].classList.add('animate__animated');
        felder[2].classList.add('animate__fadeIn');
    } else if (felder[1].innerHTML == "O" && felder[2].innerHTML == "O" && felder[0].innerHTML == "") {
        felder[0].innerHTML = "O";
        felder[0].classList.add('animate__animated');
        felder[0].classList.add('animate__fadeIn');

    } else if (felder[0].innerHTML == "O" && felder[2].innerHTML == "O" && felder[1].innerHTML == "") {
        felder[1].innerHTML = "O";
        felder[1].classList.add('animate__animated');
        felder[1].classList.add('animate__fadeIn');
    } else if (felder[3].innerHTML == "O" && felder[4].innerHTML == "O" && felder[5].innerHTML == "") {
        felder[5].innerHTML = "O";
        felder[5].classList.add('animate__animated');
        felder[5].classList.add('animate__fadeIn');
    } else if (felder[4].innerHTML == "O" && felder[5].innerHTML == "O" && felder[3].innerHTML == "") {
        felder[3].innerHTML = "O";
        felder[3].classList.add('animate__animated');
        felder[3].classList.add('animate__fadeIn');
    } else if (felder[3].innerHTML == "O" && felder[5].innerHTML == "O" && felder[4].innerHTML == "") {
        felder[4].innerHTML = "O";
        felder[4].classList.add('animate__animated');
        felder[4].classList.add('animate__fadeIn');
    } else if (felder[6].innerHTML == "O" && felder[7].innerHTML == "O" && felder[8].innerHTML == "") {
        felder[8].innerHTML = "O";
        felder[8].classList.add('animate__animated');
        felder[8].classList.add('animate__fadeIn');
    } else if (felder[7].innerHTML == "O" && felder[8].innerHTML == "O" && felder[6].innerHTML == "") {
        felder[6].innerHTML = "O";
        felder[6].classList.add('animate__animated');
        felder[6].classList.add('animate__fadeIn');
    } else if (felder[6].innerHTML == "O" && felder[8].innerHTML == "O" && felder[7].innerHTML == "") {
        felder[7].innerHTML = "O";
        felder[7].classList.add('animate__animated');
        felder[7].classList.add('animate__fadeIn');
    } else if (felder[0].innerHTML == "O" && felder[3].innerHTML == "O" && felder[6].innerHTML == "") {
        felder[6].innerHTML = "O";
        felder[6].classList.add('animate__animated');
        felder[6].classList.add('animate__fadeIn');
    } else if (felder[3].innerHTML == "O" && felder[6].innerHTML == "O" && felder[0].innerHTML == "") {
        felder[0].innerHTML = "O";
        felder[0].classList.add('animate__animated');
        felder[0].classList.add('animate__fadeIn');
    } else if (felder[0].innerHTML == "O" && felder[6].innerHTML == "O" && felder[3].innerHTML == "") {
        felder[3].innerHTML = "O";
        felder[3].classList.add('animate__animated');
        felder[3].classList.add('animate__fadeIn');
    } else if (felder[1].innerHTML == "O" && felder[4].innerHTML == "O" && felder[7].innerHTML == "") {
        felder[7].innerHTML = "O";
        felder[7].classList.add('animate__animated');
        felder[7].classList.add('animate__fadeIn');
    } else if (felder[4].innerHTML == "O" && felder[7].innerHTML == "O" && felder[1].innerHTML == "") {
        felder[1].innerHTML = "O";
        felder[1].classList.add('animate__animated');
        felder[1].classList.add('animate__fadeIn');
    } else if (felder[1].innerHTML == "O" && felder[7].innerHTML == "O" && felder[4].innerHTML == "") {
        felder[4].innerHTML = "O";
        felder[4].classList.add('animate__animated');
        felder[4].classList.add('animate__fadeIn');
    } else if (felder[2].innerHTML == "O" && felder[5].innerHTML == "O" && felder[8].innerHTML == "") {
        felder[8].innerHTML = "O";
        felder[8].classList.add('animate__animated');
        felder[8].classList.add('animate__fadeIn');
    } else if (felder[5].innerHTML == "O" && felder[8].innerHTML == "O" && felder[2].innerHTML == "") {
        felder[2].innerHTML = "O";
        felder[2].classList.add('animate__animated');
        felder[2].classList.add('animate__fadeIn');
    } else if (felder[2].innerHTML == "O" && felder[8].innerHTML == "O" && felder[5].innerHTML == "") {
        felder[5].innerHTML = "O";
        felder[5].classList.add('animate__animated');
        felder[5].classList.add('animate__fadeIn');
    } else if (felder[0].innerHTML == "O" && felder[4].innerHTML == "O" && felder[8].innerHTML == "") {
        felder[8].innerHTML = "O";
        felder[8].classList.add('animate__animated');
        felder[8].classList.add('animate__fadeIn');
    } else if (felder[4].innerHTML == "O" && felder[8].innerHTML == "O" && felder[0].innerHTML == "") {
        felder[0].innerHTML = "O";
        felder[0].classList.add('animate__animated');
        felder[0].classList.add('animate__fadeIn');
    } else if (felder[0].innerHTML == "O" && felder[8].innerHTML == "O" && felder[4].innerHTML == "") {
        felder[4].innerHTML = "O";
        felder[4].classList.add('animate__animated');
        felder[4].classList.add('animate__fadeIn');
    } else if (felder[2].innerHTML == "O" && felder[4].innerHTML == "O" && felder[6].innerHTML == "") {
        felder[6].innerHTML = "O";
        felder[6].classList.add('animate__animated');
        felder[6].classList.add('animate__fadeIn');
    } else if (felder[4].innerHTML == "O" && felder[6].innerHTML == "O" && felder[2].innerHTML == "") {
        felder[2].innerHTML = "O";
        felder[2].classList.add('animate__animated');
        felder[2].classList.add('animate__fadeIn');
    } else if (felder[2].innerHTML == "O" && felder[6].innerHTML == "O" && felder[4].innerHTML == "") {
        felder[4].innerHTML = "O";
        felder[4].classList.add('animate__animated');
        felder[4].classList.add('animate__fadeIn');
    } else if (felder[0].innerHTML == "X" && felder[1].innerHTML == "X" && felder[2].innerHTML == "") {
        felder[2].innerHTML = "O";
        felder[2].classList.add('animate__animated');
        felder[2].classList.add('animate__fadeIn');
    } else if (felder[1].innerHTML == "X" && felder[2].innerHTML == "X" && felder[0].innerHTML == "") {
        felder[0].innerHTML = "O";
        felder[0].classList.add('animate__animated');
        felder[0].classList.add('animate__fadeIn');
    } else if (felder[0].innerHTML == "X" && felder[2].innerHTML == "X" && felder[1].innerHTML == "") {
        felder[1].innerHTML = "O";
        felder[1].classList.add('animate__animated');
        felder[1].classList.add('animate__fadeIn');
    } else if (felder[3].innerHTML == "X" && felder[4].innerHTML == "X" && felder[5].innerHTML == "") {
        felder[5].innerHTML = "O";
        felder[5].classList.add('animate__animated');
        felder[5].classList.add('animate__fadeIn');
    } else if (felder[4].innerHTML == "X" && felder[5].innerHTML == "X" && felder[3].innerHTML == "") {
        felder[3].innerHTML = "O";
        felder[3].classList.add('animate__animated');
        felder[3].classList.add('animate__fadeIn');
    } else if (felder[3].innerHTML == "X" && felder[5].innerHTML == "X" && felder[4].innerHTML == "") {
        felder[4].innerHTML = "O";
        felder[4].classList.add('animate__animated');
        felder[4].classList.add('animate__fadeIn');
    } else if (felder[6].innerHTML == "X" && felder[7].innerHTML == "X" && felder[8].innerHTML == "") {
        felder[8].innerHTML = "O";
        felder[8].classList.add('animate__animated');
        felder[8].classList.add('animate__fadeIn');
    } else if (felder[7].innerHTML == "X" && felder[8].innerHTML == "X" && felder[6].innerHTML == "") {
        felder[6].innerHTML = "O";
        felder[6].classList.add('animate__animated');
        felder[6].classList.add('animate__fadeIn');
    } else if (felder[6].innerHTML == "X" && felder[8].innerHTML == "X" && felder[7].innerHTML == "") {
        felder[7].innerHTML = "O";
        felder[7].classList.add('animate__animated');
        felder[7].classList.add('animate__fadeIn');
    } else if (felder[0].innerHTML == "X" && felder[3].innerHTML == "X" && felder[6].innerHTML == "") {
        felder[6].innerHTML = "O";
        felder[6].classList.add('animate__animated');
        felder[6].classList.add('animate__fadeIn');
    } else if (felder[3].innerHTML == "X" && felder[6].innerHTML == "X" && felder[0].innerHTML == "") {
        felder[0].innerHTML = "O";
        felder[0].classList.add('animate__animated');
        felder[0].classList.add('animate__fadeIn');
    } else if (felder[0].innerHTML == "X" && felder[6].innerHTML == "X" && felder[3].innerHTML == "") {
        felder[3].innerHTML = "O";
        felder[3].classList.add('animate__animated');
        felder[3].classList.add('animate__fadeIn');
    } else if (felder[1].innerHTML == "X" && felder[4].innerHTML == "X" && felder[7].innerHTML == "") {
        felder[7].innerHTML = "O";
        felder[7].classList.add('animate__animated');
        felder[7].classList.add('animate__fadeIn');
    } else if (felder[4].innerHTML == "X" && felder[7].innerHTML == "X" && felder[1].innerHTML == "") {
        felder[1].innerHTML = "O";
        felder[1].classList.add('animate__animated');
        felder[1].classList.add('animate__fadeIn');
    } else if (felder[1].innerHTML == "X" && felder[7].innerHTML == "X" && felder[4].innerHTML == "") {
        felder[4].innerHTML = "O";
        felder[4].classList.add('animate__animated');
        felder[4].classList.add('animate__fadeIn');
    } else if (felder[2].innerHTML == "X" && felder[5].innerHTML == "X" && felder[8].innerHTML == "") {
        felder[8].innerHTML = "O";
        felder[8].classList.add('animate__animated');
        felder[8].classList.add('animate__fadeIn');
    } else if (felder[5].innerHTML == "X" && felder[8].innerHTML == "X" && felder[2].innerHTML == "") {
        felder[2].innerHTML = "O";
        felder[2].classList.add('animate__animated');
        felder[2].classList.add('animate__fadeIn');
    } else if (felder[2].innerHTML == "X" && felder[8].innerHTML == "X" && felder[5].innerHTML == "") {
        felder[5].innerHTML = "O";
        felder[5].classList.add('animate__animated');
        felder[5].classList.add('animate__fadeIn');
    } else if (felder[0].innerHTML == "X" && felder[4].innerHTML == "X" && felder[8].innerHTML == "") {
        felder[8].innerHTML = "O";
        felder[8].classList.add('animate__animated');
        felder[8].classList.add('animate__fadeIn');
    } else if (felder[4].innerHTML == "X" && felder[8].innerHTML == "X" && felder[0].innerHTML == "") {
        felder[0].innerHTML = "O";
        felder[0].classList.add('animate__animated');
        felder[0].classList.add('animate__fadeIn');
    } else if (felder[0].innerHTML == "X" && felder[8].innerHTML == "X" && felder[4].innerHTML == "") {
        felder[4].innerHTML = "O";
        felder[4].classList.add('animate__animated');
        felder[4].classList.add('animate__fadeIn');
    } else if (felder[2].innerHTML == "X" && felder[4].innerHTML == "X" && felder[6].innerHTML == "") {
        felder[6].innerHTML = "O";
        felder[6].classList.add('animate__animated');
        felder[6].classList.add('animate__fadeIn');
    } else if (felder[4].innerHTML == "X" && felder[6].innerHTML == "X" && felder[2].innerHTML == "") {
        felder[2].innerHTML = "O";
        felder[2].classList.add('animate__animated');
        felder[2].classList.add('animate__fadeIn');
    } else if (felder[2].innerHTML == "X" && felder[6].innerHTML == "X" && felder[4].innerHTML == "") {
        felder[4].innerHTML = "O";
        felder[4].classList.add('animate__animated');
        felder[4].classList.add('animate__fadeIn');
    } else if (felder[4].innerHTML == "") {
        felder[4].innerHTML = "O";
        felder[4].classList.add('animate__animated');
        felder[4].classList.add('animate__fadeIn');
    } else if (felder[1].innerHTML == "") {
        felder[1].innerHTML = "O";
        felder[1].classList.add('animate__animated');
        felder[1].classList.add('animate__fadeIn');
    } else if (felder[5].innerHTML == "") {
        felder[5].innerHTML = "O";
        felder[5].classList.add('animate__animated');
        felder[5].classList.add('animate__fadeIn');
    } else if (felder[7].innerHTML == "") {
        felder[7].innerHTML = "O";
        felder[7].classList.add('animate__animated');
        felder[7].classList.add('animate__fadeIn');
    } else if (felder[3].innerHTML == "") {
        felder[3].innerHTML = "O";
        felder[3].classList.add('animate__animated');
        felder[3].classList.add('animate__fadeIn');
    } else if (felder[0].innerHTML == "") {
        felder[0].innerHTML = "O";
        felder[0].classList.add('animate__animated');
        felder[0].classList.add('animate__fadeIn');
    } else if (felder[2].innerHTML == "") {
        felder[2].innerHTML = "O";
        felder[2].classList.add('animate__animated');
        felder[2].classList.add('animate__fadeIn');
    } else if (felder[6].innerHTML == "") {
        felder[6].innerHTML = "O";
        felder[6].classList.add('animate__animated');
        felder[6].classList.add('animate__fadeIn');
    } else if (felder[8].innerHTML == "") {
        felder[8].innerHTML = "O";
        felder[8].classList.add('animate__animated');
        felder[8].classList.add('animate__fadeIn');
    }
}
/*künstliche intelligenz in nem Zufallsgenerator.
function kitrain() {
    kicounter = kicounter + 1
    if (ki()) {
        currentPlayer = "X";
    }
}
function ki() {
    if (kicounter < 5) {
        let felder = document.getElementsByClassName("feld");
        let Zufallszahl = generateRandomInt(0, 8);
        if (felder[Zufallszahl].innerHTML == "") {
            felder[Zufallszahl].innerHTML = "O";
            counter = counter + 1;
            return true
        } else {
            ki()
        }
    }
}

function generateRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor((Math.random() * (max - min)) + min)
}
*/
