let catImagesUrls = [];
// const menu = document.getElementById("cat-menu")
fetch("https://cataas.com/api/cats?tags=cute")
    .then ((response) => response.json())
    .then ((catImages) => catImages.map((catImage) => catImage.id))
    .then((catIds) => {
        catIds.forEach((catId) => {
            catImagesUrls.push(`https://cataas.com/cat/${catId}`)
        })
        console.log(catImagesUrls[1]);
        // const newImage = document.createElement('img')
        // newImage.src = catImagesUrls[1]
        
        const img = document.querySelector("img"); 
        img.src = catImagesUrls[1] 
    })

    // Event listeners: 
    // DOMContentLoaded that loads the API data once the page loads
    // “Player Name” form that enables player to submit a username
    // “Player Name” form that submits a username of the player’s choice to the bottom of the page
    // “Start game” button click event that triggers the timer
    // Cat image click event that increases the player’s score by 1 per click
    // Game board click event that erases a player’s score if clicked
    