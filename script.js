console.log("Welcome to Superstar: Tic Tac Toe")
let music = new Audio("backg.mp3")
let aturn = new Audio("select.mp3")
let over = new Audio("over4.mp3")
let winn = new Audio("winmu.mp3")
let turn = "X"
let c = 0
let k = 0
let gameover = false;
const changeTurn = () => {
    return turn === "X" ? "O" : "X"
}
const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2, 3.5, 4.0, 0],
        [3, 4, 5, 3.5, 12.2, 0],
        [6, 7, 8, 3.5, 20.4, 0],
        [0, 3, 6, -4.5, 12, 90],
        [1, 4, 7, 3.6, 12, 90],
        [2, 5, 8, 11.6, 12, 90],
        [0, 4, 8, 3.8, 12, 45],
        [2, 4, 6, 3.4, 12, 135],
    ]
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won!!! Press Reset to Play Again..."
            gameover = true
            winn.play();
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector(".line").style.width = "17vw";
            document.querySelector(".line").style.height = "2px";
        }
    })
}
const checkDraw = () => {
        c = 0;
        k = 0;
        let boxtextt = document.getElementsByClassName('boxtext');
        let ch = [
            [0, 1, 2, 5, 9, 0],
            [3, 4, 5, 3, 35, 0],
            [6, 7, 8, 5, 25, 0],
            [0, 3, 6, -5, 15, 90],
            [1, 4, 7, 5, 15, 90],
            [2, 5, 8, 15, 15, 90],
            [0, 4, 8, 18, 28, 45],
            [2, 4, 6, 5, 15, 135],
        ]
        ch.forEach(e => {
            if ((boxtextt[e[0]].innerText === '') || (boxtextt[e[1]].innerText === '') || (boxtextt[e[2]].innerText === '')) {
                c = 1;
            }
        })
        if (c === 0) {
            let boxtextr = document.getElementsByClassName('boxtext');
            Array.from(boxtextr).forEach(element => {
                element.innerText = ""
                turn = "X";
                gameover = true;
                document.querySelector('.info').innerText = "Draw between X and O. Press Reset to Start Over again";
            });
        }
    }
    //music.play();
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            aturn.play();
            if (!gameover) {
                document.getElementsByClassName("info")[0].innerText = "Turn for Player who chose " + turn;
            }
            checkWin();
            checkDraw();
        }
    })
})
reset.addEventListener('click', () => {
    let boxtexts = document.getElementsByClassName('boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = "X";
    gameover = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for Player who chose " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
    document.querySelector(".line").style.width = "0vw";
})
