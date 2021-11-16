// DOMContentLoaded that loads the API data once the page loads
document.addEventListener('DOMContentLoaded', initialize);
function initialize() {

}

// Fetch API data
const catImagesUrls = [];
// <<<<<<< HEAD
const menu = document.getElementById("cat-menu")

// =======
// const menu = document.getElementById("cat-menu")
// >>>>>>> 4319a1a (score)
fetch("https://cataas.com/api/cats?tags=cute")
    .then ((response) => response.json())
    .then ((catImages) => catImages.map((catImage) => catImage.id))
    .then((catIds) => {
        catIds.forEach((catId) => {
            catImagesUrls.push(`https://cataas.com/cat/${catId}`)
        })
        catImagesUrls.splice(1,80)
        // console.log(catImagesUrls);
        // const newImage = document.createElement('img')
        // newImage.src = catImagesUrls[1]
        
        // const img = document.querySelector("img"); 
        // img.src = catImagesUrls[0]
    })


// “Player Name” form that enables player to submit a username
const playerNameForm = document.querySelector("#username-input")
const playerName = document.querySelector("#username")

playerNameForm.addEventListener('submit', (e) => {
    e.preventDefault();
    playerNameInput(playerName.value);
    playerNameForm.reset();
    })

// “Player Name” form that submits a username of the player’s choice to the bottom of the page
function playerNameInput(userName) {
    playerName.innerHTML = "";
    playerName.textContent = `${userName}`;
    const nameContainer = document.querySelector("#username-container");
    nameContainer.innerHTML = "";
    nameContainer.textContent = `${userName}`;
    playerNameForm.style.display = "none";
}

// “Start game” button click event 
// "Start game" button disappears once clicked and game starts
// {/* <button id="start-game" type="text">START GAME</button> */}
const startGame = document.getElementById("start-game")
const score = document.querySelector("#score-count")
startGame.addEventListener("click", gameStarted)

// Cat image click event that increases the player’s score by 1 per click
// Update number of clicks in the "#score-count" element
// Set timeout on cat image; when cat image disappears, another cat image reappears somewhere different on the game board
// Resize cat images to fit on the game board
function gameStarted() {
// console.log(gameStarted)const newImage = document.createElement('img')
        // const newImage = document.createElement('img')
        // newImage.src = catImagesUrls[1]
        
        const img = document.querySelector("img"); 
        img.src = catImagesUrls[0]
        startGame.style.display = "none";
        // playerNameForm.style.display = "none";


        img.addEventListener("click", clicked)
        function clicked() {
            console.log(clicked)
            const scoreCount = parseInt(score.textContent.split(" ")[1])
          score.textContent = `Score: ${scoreCount + 1 }`
}
setTimeout(function(){img.style.display = "none"}, 3000)

}


// function clickCat(){
//   }
// }

// const likeBtn = document.getElementById("like-button")
// // // //add by one
// // if(likeBtn){
// // likeBtn.addEventListener('click', swapper, false);
// // }
// const timer = document.getElementById("timer")
// const winner = document.getElementById("winner")
// likeBtn.addEventListener('click', myfunction)

// function myfunction() {
//     likes.innerHTML = parseInt(likes.innerHTML) +1 + " likes" 
// }
    
// function move() {
//     let seconds = 2;
//     let id = setInterval(function() {
//     timer.innerHTML = parseInt(seconds--) + " seconds"
//     if(likes.innerHTML == 5 + " likes") {
//         clearInterval(id)
//         winner.textContent = "Winner"
//         console.log(winner)
//     } else if(seconds == -1) {
//         clearInterval(id)
//         winner.textContent = "Loser"
//         console.log(winner)
//     }
//     }, 1000)};

// Create a game board click event that stops the game if the space outside of cat images is clicked
// Once game stops, player score is displayed in middle of screen + retry button is shown underneath
// Once retry button is clicked, the game resets with the user's original Player Name


const gameBoard = document.querySelector("#game-board");
const resetButton = document.querySelector("#retry")

gameBoard.addEventListener('click', gameBoardClick)

function gameBoardClick() {
    // Clear images
    // Display player score at center of screen
    // Display retry button
    gameBoard.style.display = "block"
    gameBoard.addEventListener('click', gameRestarted)
}

function gameRestarted() {
    // console.log(gameStarted)const newImage = document.createElement('img')
            // const newImage = document.createElement('img')
            // newImage.src = catImagesUrls[1]
            
            const img = document.querySelector("img"); 
            img.src = catImagesUrls[0]
    
            img.document.querySelector('img').addEventListener("click", clicked)
            function clicked() {
              likes.innerHTML = parseInt(likes.innerHTML) +1 + " likes"
            
    }}