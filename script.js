console.log("welcome to tic tac toe");

let turn = "X";
let gameover = false;
//logic to change turn
const changeTurn = () => {
  return turn == "X" ? "0" : "X";
};

// logic to check win

const checkWin = () => {
  let boxtexts = document.getElementsByClassName("boxText");
  let e = 0;
  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < wins.length; i++) {
    e = wins[i];
    if (
      boxtexts[e[0]].innerText === boxtexts[e[1]].innerText &&
      boxtexts[e[2]].innerText === boxtexts[e[1]].innerText &&
      boxtexts[e[0]].innerText !== ""
    ) {
      info = document.querySelector(".info").innerText =
        boxtexts[e[0]].innerText + "  " + "is the winner";
      gameover = true;
      document
        .querySelector(".imgCont")
        .getElementsByTagName("img")[0].style.width = "100px";
    }
  }
};

//game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  let boxtexts = element.querySelector(".boxText");
  element.addEventListener("click", () => {
    if (boxtexts.innerText === "") {
      boxtexts.innerText = turn;
      turn = changeTurn();
      checkWin();
      if (!gameover) {
        let info = (document.getElementsByClassName("info")[0].innerText =
          "Turn For" + " " + turn);
      } else turn = "";
    }
  });
});

// reset btn logic

const reset = document.getElementById("reset");
reset.addEventListener("click", () => {
  let boxtexts = document.querySelectorAll(".boxText");
  Array.from(boxtexts).forEach((element) => {
    element.innerText = "";
  });
  turn = "X";
  let info = (document.getElementsByClassName("info")[0].innerText =
    "Turn For" + " " + turn);
  gameover = false;
  document
    .querySelector(".imgCont")
    .getElementsByTagName("img")[0].style.width = "0px";
});
