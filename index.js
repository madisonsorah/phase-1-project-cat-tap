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

    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("#timer").innerHTML = minutes + "m " + seconds + "s ";