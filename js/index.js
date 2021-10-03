const handOptions = {
    rock: "assets/Rock.png",
    paper: "assets/Paper.png",
    scissors: "assets/Scissors.png",
};

let SCORE = 0;

const pickUserHand = (hand) => {
    // console.log(hand);
    // hide current page
    let hands = document.querySelector(".hands");
    hands.style.display = "none";
    // show the next page with hand you picked
    let contest = document.querySelector(".contest");
    contest.style.display = "flex";

    // set the user picked
    document.querySelector("#userPickImage").src = handOptions[hand];

    let cpHand = pickComputerHand();

    referee(hand, cpHand);
};

const pickComputerHand = () => {
    let hands = ["rock", "paper", "scissors"];
    let cpHand = hands[Math.floor(Math.random() * 3)];

    // set the computer picked
    document.querySelector("#computerPickImage").src = handOptions[cpHand];

    return cpHand;
};

const referee = (userHand, cpHand) => {
    if (userHand == "paper" && cpHand == "scissors") {
        setDecision("YOU LOSE!");
    } else if (userHand == "paper" && cpHand == "rock") {
        setDecision("YOU WIN!");
        setScore(SCORE + 1);
    } else if (userHand == "paper" && cpHand == "paper") {
        setDecision("It's a tie!");
    } else if (userHand == "rock" && cpHand == "paper") {
        setDecision("YOU LOSE!");
    } else if (userHand == "rock" && cpHand == "scissors") {
        setDecision("YOU WIN!");
        setScore(SCORE + 1);
    } else if (userHand == "rock" && cpHand == "rock") {
        setDecision("It's a tie!");
    } else if (userHand == "scissors" && cpHand == "rock") {
        setDecision("YOU LOSE!");
    } else if (userHand == "scissors" && cpHand == "paper") {
        setDecision("YOU WIN!");
        setScore(SCORE + 1);
    } else if (userHand == "scissors" && cpHand == "scissors") {
        setDecision("It's a tie!");
    }
};

const setDecision = (decision) => {
    document.querySelector(".decision h1").innerHTML = decision;
};

const setScore = (score) => {
    SCORE = score;
    document.querySelector(".score h1").innerHTML = score;
};

const restartGame = () => {
    // hide current page
    let hands = document.querySelector(".hands");
    hands.style.display = "flex";
    // show the next page
    let contest = document.querySelector(".contest");
    contest.style.display = "none";
};
