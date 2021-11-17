// DOMContentLoaded that loads the API data once the page loads
document.addEventListener('DOMContentLoaded', initialize);
function initialize() {

}

// Fetch API data
const catImagesUrls = [];
const catImagesUrls2 = [];
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
            catImagesUrls2.push(`https://cataas.com/cat/${catId}`)
        })
        catImagesUrls.splice(1,80)
        catImagesUrls2.splice(1,80)

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
        startGame.style.display = "none";
        const randomNumber = Math.floor(Math.random() * catImagesUrls.length)
        const firstImg = document.createElement('img')
        const firstCatImageContainer = document.querySelector('#cat-menu')
        firstImg.src = catImagesUrls[randomNumber];
        const left = Math.floor((Math.random() * 200) + 1)+"px";
        const top = Math.floor((Math.random() * 200) + 1)+"px";
        firstImg.style.position = "absolute";
        firstImg.style.top = top;
        firstImg.style.left = left;
        firstCatImageContainer.appendChild(firstImg)
        setTimeout(function() {firstImg.style.display = 'none'}, 1000);
        setTimeout(function(){firstImg.style.display = "none"}, randomTimer(5000, 7000))

        firstImg.addEventListener('click', clicked)
        function clicked() {
        console.log(clicked)
        const scoreCount = parseInt(score.textContent.split(' ')[1])
        score.textContent = `Score: ${scoreCount + 1 }`
        // finalScore.textContent = `Final Score: ${scoreCount + 1 }`
        };
    
        const interval = setInterval(function() {
            startGame.style.display = "none";
            const randomNumber = Math.floor(Math.random() * catImagesUrls.length)
            const img = document.createElement('img')
            const catImageContainer = document.querySelector('#cat-menu')
            img.src = catImagesUrls[randomNumber];
            const left = Math.floor((Math.random() * 200) + 1)+"px";
            const top = Math.floor((Math.random() * 200) + 1)+"px";
            img.style.position = "absolute";
            img.style.top = top;
            img.style.left = left;
            catImageContainer.appendChild(img)
            setTimeout(function() {img.style.display = 'none'}, 1000);

            img.addEventListener('click', clicked)
            function clicked() {
            console.log(clicked)
            const scoreCount = parseInt(score.textContent.split(' ')[1])
            score.textContent = `Score: ${scoreCount + 1 }`
        // finalScore.textContent = `Final Score: ${scoreCount + 1 }`
        };
        }, 3000);

        function outsideClick() {
            // Clear images
            clearInterval(interval);
            // Display player score at center of screen
            finalScore.style.display= 'block'
            // Display retry button
            resetButton.style.display= 'block'
            // Restart game
            resetButton.addEventListener('click', gameRestarted)
        }        

    }


function gameRestarted() {
    resetButton.style.display = "none";
    const randomNumber = Math.floor(Math.random() * catImagesUrls.length)
    const firstImg = document.createElement('img')
    const firstCatImageContainer = document.querySelector('#cat-menu')
    firstImg.src = catImagesUrls[randomNumber];
    const left = Math.floor((Math.random() * 200) + 1)+"px";
    const top = Math.floor((Math.random() * 200) + 1)+"px";
    firstImg.style.position = "absolute";
    firstImg.style.top = top;
    firstImg.style.left = left;
    firstCatImageContainer.appendChild(firstImg)
    setTimeout(function() {firstImg.style.display = 'none'}, 1000);
    setTimeout(function(){firstImg.style.display = "none"}, randomTimer(5000, 7000))

    firstImg.addEventListener('click', clicked)
    function clicked() {
    console.log(clicked)
    const scoreCount = parseInt(score.textContent.split(' ')[1])
    score.textContent = `Score: ${scoreCount + 1 }`
    // finalScore.textContent = `Final Score: ${scoreCount + 1 }`
    };

    const interval = setInterval(function() {
        startGame.style.display = "none";
        const randomNumber = Math.floor(Math.random() * catImagesUrls.length)
        const img = document.createElement('img')
        const catImageContainer = document.querySelector('#cat-menu')
        img.src = catImagesUrls[randomNumber];
        const left = Math.floor((Math.random() * 200) + 1)+"px";
        const top = Math.floor((Math.random() * 200) + 1)+"px";
        img.style.position = "absolute";
        img.style.top = top;
        img.style.left = left;
        catImageContainer.appendChild(img)
        setTimeout(function() {img.style.display = 'none'}, 1000);

        img.addEventListener('click', clicked)
        function clicked() {
        console.log(clicked)
        const scoreCount = parseInt(score.textContent.split(' ')[1])
        score.textContent = `Score: ${scoreCount + 1 }`
    // finalScore.textContent = `Final Score: ${scoreCount + 1 }`
    };
    }, 3000);
    
    // backgrounds.forEach(background => {
    //     background.addEventListener('click', outsideClick)
    // })

    function outsideClick() {
        clearInterval(interval);
        resetButton.classList.remove('behind');
        // Clear images
        // Display player score at center of screen
        finalScore.style.display= 'block'
        // Display retry button
        resetButton.style.display= 'block'
        // Restart game
        resetButton.addEventListener('click', gameRestarted)
    }





    // clearInterval()

    

        // img.src = catImagesUrls[0]
        // playerNameForm.style.display = "none";
        // const randomNumber = Math.floor(Math.random() * catImagesUrls.length);
        // img.src = catImagesUrls[randomNumber];

        // const loopCat = catImagesUrls.forEach(el => {
        //    el = catImagesUrls[randomNumber]
        // })

    //second image
        // img2.addEventListener("click", clicked)
        // function clicked() {
        //     console.log(clicked)
        //     const scoreCount = parseInt(score.textContent.split(" ")[1])
        //   score.textContent = `Score: ${scoreCount + 1 }`
    

// const loopCat = catImagesUrls.forEach(el => {
//     el = catImagesUrls[randomNumber]
//  })
// loop thru 3 times

// floor - round down to the nearest number.
// random - decimal.
const randomTimer = (min, max) => { return Math.floor(Math.random() * (max - min + 1)) + min}

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


function outsideClick() {
    // Clear images
    // Display player score at center of screen
    finalScore.style.display= 'block'
    // Display retry button
    resetButton.style.display= 'block'
    // Restart game
    resetButton.addEventListener('click', gameRestarted)
}

function gameRestarted() {
    startGame.style.display = "none";
        const randomNumber = Math.floor(Math.random() * catImagesUrls.length)
        const img = document.createElement('img')
        const catImageContainer = document.querySelector('#cat-menu')
        img.src = catImagesUrls[randomNumber];
        catImageContainer.appendChild(img)
        setTimeout(function() {firstCatImg.style.display = 'none'}, 1000);

        img.addEventListener('click', clicked)
        function clicked() {console.log(clicked)
        const scoreCount = parseInt(score.textContent.split(' ')[1])
        score.textContent = `Score: ${scoreCount + 1 }`
        finalScore.textContent = `Final Score: ${scoreCount + 1 }`
        };
        
        setTimeout(function() {img.style.display = 'none'}, 
        randomTimeout);
        
        const backgrounds = document.querySelectorAll('.behind')
    
        backgrounds.forEach(background => {
        background.addEventListener('click', outsideClick)
    })}, 4000);
    
    // backgrounds.forEach(background => {
    //     background.addEventListener('click', outsideClick)
    // })

    function outsideClick() {
        clearInterval(interval);
        resetButton.classList.remove('behind');
        // Clear images
        // Display player score at center of screen
        finalScore.style.display= 'block'
        // Display retry button
        resetButton.style.display= 'block'
        // Restart game
        resetButton.addEventListener('click', gameRestarted)
    }

    