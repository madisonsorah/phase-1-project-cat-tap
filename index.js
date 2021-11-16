const catImagesUrls = [];
const menu = document.getElementById("cat-menu")
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


// DOMContentLoaded that loads the API data once the page loads
document.addEventListener('DOMContentLoaded', initialize);
function initialize() {

}
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

{/* <button id="start-game" type="text">START GAME</button> */}
const startGame = document.getElementById("start-game")

startGame.addEventListener("click", gameStarted)

function gameStarted() {
// console.log(gameStarted)const newImage = document.createElement('img')
        // const newImage = document.createElement('img')
        // newImage.src = catImagesUrls[1]
        
        const img = document.querySelector("img"); 
        img.src = catImagesUrls[0]

        img.document.querySelector('img').addEventListener("click", clicked)
        function clicked() {
          likes.innerHTML = parseInt(likes.innerHTML) +1 + " likes"
        
}}

// function clickCat(){
//   }
// }








// const likeBtn = document.getElementById("like-button")
// // // //add by one
const likes = document.getElementById("like-count")
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
    
//     “Start game” button click event 
//     Cat image click event that increases the player’s score by 1 per click
//     Set timeout on cat image; when cat image disappears, another cat image reappears somewhere different on the game board
//     Game board click event that erases a player’s score if clicked
    
