// DOMContentLoaded that loads the API data once the page loads

document.addEventListener('DOMContentLoaded', initialize);
function initialize() {
    fetchData();
}

// Fetch API data

const catImagesUrls = [];
const menu = document.getElementById('cat-menu')

function fetchData() {
    fetch('https://cataas.com/api/cats?tags=cute')
     .then ((response) => response.json())
     .then ((catImages) => catImages.map((catImage) => catImage.id))
     .then((catIds) => {
        catIds.forEach((catId) => {
            catImagesUrls.push(`https://cataas.com/cat/${catId}`)
        })
    })
}

// “Player Name” form that enables player to submit a username

const playerNameForm = document.querySelector('#username-input')
const playerName = document.querySelector('#username')

playerNameForm.addEventListener('submit', (e) => {
    e.preventDefault();
    playerNameInput(playerName.value);
    playerNameForm.reset();
})

// “Player Name” form that submits a username of the player’s choice to the bottom of the page

function playerNameInput(userName) {
    playerName.innerHTML = '';
    playerName.textContent = `${userName}`;
    const nameContainer = document.querySelector('#username-container');
    nameContainer.innerHTML = '';
    nameContainer.textContent = `player name: ${userName}`;
    playerNameForm.style.display = 'none';
    gameInstructions.style.display = 'none';
    okButton.style.display = 'none';
}

// "How to play" button click event
// "How to play" button disappears once game starts
// "How to play" instructions dissapear once game starts

const gameInstructionsButton = document.querySelector("#dropup-info")
const gameInstructions = document.querySelector("#dropup-content")

gameInstructionsButton.addEventListener('click', function () {
    gameInstructions.style.display = 'block';
    okButton.style.display = 'block';
})

const okButton = document.querySelector("#ok-button")

okButton.addEventListener('click', function() {
    gameInstructions.style.display = 'none';
    okButton.style.display = 'none';
})

// “Start game” button click event 
// "Start game" button disappears once clicked and game starts

const startGame = document.getElementById('start-game')
const score = document.querySelector('#score-count')
const finalScore = document.querySelector('#final-score')
const resetButton = document.querySelector('#retry')
const randomTimeout = Math.floor((Math.random() + 1) * 1500)
startGame.addEventListener('click', gameStarted)

// Cat image click event that increases the player’s score by 1 per click
// Update number of clicks in the "#score-count" element
// Set timeout on cat image; when cat image disappears, another cat image reappears somewhere different on the game board
// Resize cat images to fit on the game board

function gameStarted(e) {
    e.stopPropagation();
    gameInstructionsButton.style.display = 'none';
    gameInstructions.style.display = 'none';
    okButton.style.display = 'none';
    playerNameForm.style.display = 'none';
    startGame.style.display = 'none';
    resetButton.style.display = 'none';
    score.textContent = 'score: 0';
    finalScore.textContent = 'score: 0';
    finalScore.style.display = 'none';
    const firstRandomImageNumber = Math.floor(Math.random() * catImagesUrls.length);
    const firstCatImg = document.createElement('img');
    const firstCatContainer = document.querySelector('#cat-menu');
    firstCatImg.src = catImagesUrls[firstRandomImageNumber];
    firstCatImg.style.position = 'absolute';
    firstCatImg.style.top = firstCatContainer.clientHeight * Math.random() + 'px';
    firstCatImg.style.right = firstCatContainer.clientWidth * Math.random() + 'px';
    firstCatImg.style.bottom = firstCatContainer.clientHeight * Math.random() + 'px';
    firstCatImg.style.left = firstCatContainer.clientWidth * Math.random() + 'px';
    firstCatContainer.appendChild(firstCatImg);
    setTimeout(function() {firstCatImg.style.display = 'none'}, 1000);

    const interval = setInterval(function() {
        const randomImageNumber = Math.floor(Math.random() * catImagesUrls.length);
        const catImageContainer = document.querySelector('#cat-menu'); 
        const img = document.createElement('img');
        img.src = catImagesUrls[randomImageNumber];
        img.style.position = 'absolute';
        img.style.top = catImageContainer.clientHeight * Math.random() + 'px';
        img.style.right = catImageContainer.clientWidth * Math.random() + 'px';
        img.style.bottom = catImageContainer.clientHeight * Math.random() + 'px';
        img.style.left = catImageContainer.clientWidth * Math.random() + 'px';
        catImageContainer.appendChild(img);
    
        img.addEventListener('click', clicked)
        function clicked(e) {
            e.stopPropagation();
            const scoreCount = parseInt(score.textContent.split(' ')[1]);
            score.textContent = `score: ${scoreCount + 1 }`;
            finalScore.textContent = `final score: ${scoreCount + 1 }`;
        };
        
        setTimeout(function() {img.style.display = 'none'}, randomTimeout);
    }, 4000);

    const backgrounds = document.getElementById('main-game-board')
    backgrounds.addEventListener('click', outsideClick)

    function outsideClick() {
        // Clear images
        clearInterval(interval);
        // Display player score at center of screen
        finalScore.style.display= 'block';
        // Display retry button
        resetButton.style.display= 'block';
        // Restart game
        resetButton.addEventListener('click', gameRestarted);
    };
}

// Create a game board click event that stops the game if the space outside of cat images is clicked
// Once game stops, player score is displayed in middle of screen + retry button is shown underneath
// Once retry button is clicked, the game resets with the user's original Player Name

function gameRestarted(e) {
    e.stopPropagation();
    resetButton.style.display = 'none';
    finalScore.style.display = 'none';
    gameStarted(e);
}

//button for random image
// let randomImages = document.getElementById("images")
// randomImages.addEventListener('click', randomCats)

function randomCats(e) {
    const randomImageNumber = Math.floor(Math.random() * catImagesUrls.length);
    const img = document.createElement('img');
    img.src = catImagesUrls[randomImageNumber]
    randomImages.append(img)
    console.log(randomCats)
    setTimeout(function() {img.style.display = 'none'}, randomTimeout);
}