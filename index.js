// const catImagesUrls = [];
// // const menu = document.getElementById("cat-menu")
// fetch("https://cataas.com/api/cats?tags=cute")
//     .then ((response) => response.json())
//     .then ((catImages) => catImages.map((catImage) => catImage.id))
//     .then((catIds) => {
//         catIds.forEach((catId) => {
//             catImagesUrls.push(`https://cataas.com/cat/${catId}`)
//         })
//         // catImagesUrls.splice(1,80)
//         console.log(catImagesUrls);
//         // const newImage = document.createElement('img')
//         // newImage.src = catImagesUrls[1]
        
//         // const img = document.querySelector("img"); 
//         // img.src = catImagesUrls[1]
//     })







    const likeBtn = document.getElementById("like-button")
    // // //add by one
    const likes = document.getElementById("like-count")
    // if(likeBtn){
      // likeBtn.addEventListener('click', swapper, false);
    // }
    const timer = document.getElementById("timer")
    const winner = document.getElementById("winner")
    likeBtn.addEventListener('click', myfunction)

    function myfunction() {
      likes.innerHTML = parseInt(likes.innerHTML) +1 + " likes" 
    }
    
    function move() {
    let seconds = 2;
let id = setInterval(function() {
  timer.innerHTML = parseInt(seconds--) + " seconds"
  if(likes.innerHTML == 5 + " likes") {
    clearInterval(id)
    winner.textContent = "Winner"
    console.log(winner)
  } else if(seconds == -1) {
    clearInterval(id)
    winner.textContent = "Loser"
    console.log(winner)
  }
}, 1000)};
    
    // Event listeners: 
    // DOMContentLoaded that loads the API data once the page loads
    // “Player Name” form that enables player to submit a username
    // “Player Name” form that submits a username of the player’s choice to the bottom of the page
    // “Start game” button click event that triggers the timer
    // Cat image click event that increases the player’s score by 1 per click
    // Game board click event that erases a player’s score if clicked
    
