let catImagesUrls = [];

fetch("https://cataas.com/api/cats?tags=cute")
    .then ((response) => response.json())
    .then ((catImages) => catImages.map((catImage) => catImage.id))
    .then((catIds) => {
        catIds.forEach((catId) => {
            catImagesUrls.push(`https://cataas.com/api/cat/${catId}`)
        })
        console.log(catImagesUrls);
    })