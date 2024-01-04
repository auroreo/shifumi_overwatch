// ********************** PROJET JS - SHIFUMI **********************

/* 
Stone = Fatale
Paper = Winston
Scissors = Pharah

à changer si possible :
Scissors = Fatale
Stone = Winston
Paper = Pharah
*/

let signs = ['stone','paper','scissors'];

// *** Initialisation variables ***
// points joueur
let playerPoints = 0;
// points ordi
let computerPoints = 0;
// rounds
let rounds = 10;
// choix du joueur 
let playerChoice = '';
// choix de l'ordi
let computerChoice = '';

// *** Informations affichées ***
// affichage choix du joueur
let showPlayerChoice = document.querySelector('.player-choice');
// affichage choix de l'ordi
let showComputerChoice = document.querySelector('.computer-choice');
// affichage résultat du round
let showRoundResult = document.querySelector('.result-round')
// affichage points joueur
let playerScore = document.querySelector('.score-player');
playerScore.textContent = playerPoints;
// affichage points ordi
let computerScore = document.querySelector('.score-computer');
computerScore.textContent = computerPoints;
// affichage rounds restants
let roundsCountdown = document.querySelector('.rounds');
roundsCountdown.textContent = rounds;


// FONCTION1 qui récupère le choix du joueur
let getPlayerChoice = function(e) {
    // on récupère dans une variable le choix du joueur, donc l'id du bouton qui a déclenché l'event
    playerChoice = e.target.id;
    if (playerChoice == 'scissors') {
        showPlayerChoice.textContent = 'Fatale';
    }
    else if (playerChoice == 'stone') {
        showPlayerChoice.textContent = 'Winston';
    }
    else {
        showPlayerChoice.textContent = 'Pharah'
    }
    getComputerChoice();
}

// FONCTION2 qui fait choisir l'ordinateur
let getComputerChoice = function() {
    let i = Math.floor(Math.random() * signs.length);
    computerChoice = signs[i];
    if (computerChoice == 'scissors') {
        showComputerChoice.textContent = 'Fatale';
    }
    else if (computerChoice == 'stone') {
        showComputerChoice.textContent = 'Winston';
    }
    else {
        showComputerChoice.textContent = 'Pharah'
    }
    compareChoices();
}

// FONCTION3 qui compare les 2 choix
let compareChoices = function() {
    if (playerChoice == computerChoice) {
        showRoundResult.style.color = 'aqua';
        showRoundResult.textContent = 'Égalité';
        if (playerChoice == 'scissors') {
            let widow = document.querySelector('.gifs #widow-draw.hidden');
            widow.classList.replace('hidden','show');
            disableButton();
            widow.addEventListener('click',removeGif);
        }
        else if (playerChoice == 'stone') {
            let winston = document.querySelector('.gifs #winston-draw.hidden');
            winston.classList.replace('hidden','show');
            disableButton();
            winston.addEventListener('click',removeGif);
        }
        else {
            let pharah = document.querySelector('.gifs #pharah-draw.hidden');
            pharah.classList.replace('hidden','show');
            disableButton();
            pharah.addEventListener('click',removeGif);
        }
    }
    else if ((playerChoice == 'stone' && computerChoice == 'scissors') || (playerChoice == 'paper' && computerChoice == 'stone') || (playerChoice == 'scissors' && computerChoice == 'paper')) {
        showRoundResult.style.color = 'yellow';
        showRoundResult.textContent = 'Gagné !';
        playerPoints++;
        playerScore.textContent = playerPoints;
        if (playerChoice == 'scissors') {
            let widow = document.querySelector('.gifs #widow-win.hidden');
            widow.classList.replace('hidden','show');
            disableButton();
            widow.addEventListener('click',removeGif);
        }
        else if (playerChoice == 'paper') {
            let pharah = document.querySelector('.gifs #pharah-win.hidden');
            pharah.classList.replace('hidden','show');
            disableButton();
            pharah.addEventListener('click',removeGif);
        }
        else {
            let winston = document.querySelector('.gifs #winston-win.hidden');
            winston.classList.replace('hidden','show');
            disableButton();
            winston.addEventListener('click',removeGif);
        }
    }
    else {
        showRoundResult.style.color = 'red';
        showRoundResult.textContent = 'Perdu !';
        computerPoints++;
        computerScore.textContent = computerPoints;
        if (playerChoice == 'scissors') {
            let winston = document.querySelector('.gifs #widow-lose.hidden');
            winston.classList.replace('hidden','show');
            disableButton();
            winston.addEventListener('click',removeGif);
        }
        else if (playerChoice == 'stone') {
            let pharah = document.querySelector('.gifs #winston-lose.hidden');
            pharah.classList.replace('hidden','show');
            disableButton();
            pharah.addEventListener('click',removeGif);
        }
        else {
            let widow = document.querySelector('.gifs #pharah-lose.hidden');
            widow.classList.replace('hidden','show');
            disableButton();
            widow.addEventListener('click',removeGif);
        }
    };
    rounds--;
    roundsCountdown.textContent = rounds;
    // si le nombre de parties atteint 10, alors le jeu se termine en affichant les résultats
    if (rounds == 0) {
        setTimeout( () => {showResult()}, 1000);
    };
};

// FONCTION4 qui affiche les résultats
let showResult = function() {
    let game = document.querySelector('.game.show');
    game.classList.replace('show','hidden');
    let result = document.querySelector('.result.hidden');
    result.classList.replace('hidden','show');
    let playerFinalScore = document.querySelector('.final-score-player');
    playerFinalScore.textContent = playerPoints;
    playerFinalScore.style.color = 'skyblue';
    let computerFinalScore = document.querySelector('.final-score-computer');
    computerFinalScore.textContent = computerPoints;
    computerFinalScore.style.color = 'red';
    if (playerPoints == computerPoints) {
        let draw = document.querySelector('.final-result');
        draw.style.color = 'aqua';
        draw.textContent = 'ÉGALITÉ !';
    }
    else if (playerPoints > computerPoints) {
        let win = document.querySelector('.final-result');
        win.style.color = 'yellow';
        win.textContent = 'VICTOIRE !';
    }
    else {
        let lose = document.querySelector('.final-result');
        lose.style.color = 'red';
        lose.textContent = 'DÉFAITE !';
    }
}

// FONCTION5 qui lance le jeu donc fait passer du screen 1 au screen 2
let playGame = function() {
    let menu = document.querySelector('.menu.show');
    menu.classList.replace('show','hidden');
    let game = document.querySelector('.game.hidden')
    game.classList.replace('hidden','show');
}

// FONCTION6 qui montre les règles
let showRules = function() {
    let rulesReminder = document.querySelector('.reminder.hidden');
    rulesReminder.classList.replace('hidden','show');
}

// FONCTION7 qui permet de rejouer
let playAgain = function() {
    // on cache le résultat
    let result = document.querySelector('.result.show')
    result.classList.replace('show','hidden');
    let game = document.querySelector('.game.hidden')
    game.classList.replace('hidden','show');
    resetDatas();
}

// FONCTION8 qui permet de quitter l'écran résultat et fait revenir au menu
let leaveGame = function() {
    let result = document.querySelector('.result.show')
    result.classList.replace('show','hidden');
    let menu = document.querySelector('.menu.hidden')
    menu.classList.replace('hidden','show');
    resetDatas();
}

// FONCTION9 qui reset les données
let resetDatas = function() {
    // reset des points player/computer et des rounds + leur affichage
    playerPoints = 0;
    playerScore.textContent = playerPoints;
    computerPoints = 0;
    computerScore.textContent = computerPoints;
    rounds = 10;
    roundsCountdown.textContent = rounds;
    // reset de l'affichage du résultat
    showRoundResult.textContent = 'Choisis...'
    showRoundResult.style.color = 'white';
    removeGif();
}

// FONCTION10 qui enlève le gif affiché et réactive les boutons
let removeGif = function() {
    let gifShowed = document.querySelector('.gifs .show');
    gifShowed.classList.replace('show','hidden');
    buttonScissors.classList.replace('inactive','active');
    buttonStone.classList.replace('inactive','active');
    buttonPaper.classList.replace('inactive','active');
}

// FONCTION11 qui désactive les boutons de choix 
let disableButton = function() {
    buttonScissors.classList.replace('active','inactive');
    buttonStone.classList.replace('active','inactive');
    buttonPaper.classList.replace('active','inactive');
}

// *** BOUTONS ***

// Bouton Jouer
let buttonPlay = document.querySelector('#play');
buttonPlay.addEventListener('click', playGame);
// Bouton Rejouer
let buttonReplay = document.querySelector('#replay');
buttonReplay.addEventListener('click', playAgain)
// Bouton Quitter
let buttonLeave = document.querySelector('#leave');
buttonLeave.addEventListener('click', leaveGame)

// Bouton Fatale (scissors)
let buttonScissors = document.querySelector('#scissors');
buttonScissors.addEventListener('click', getPlayerChoice);
// Bouton Winston (stone)
let buttonStone = document.querySelector('#stone');
buttonStone.addEventListener('click', getPlayerChoice);
// Bouton Pharah (paper)
let buttonPaper = document.querySelector('#paper');
buttonPaper.addEventListener('click', getPlayerChoice);

// Bouton Rappel des règles
let buttonRules = document.querySelector('#rules-button');
buttonRules.addEventListener('click', showRules);