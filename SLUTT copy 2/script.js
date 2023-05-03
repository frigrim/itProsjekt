/* Lager en funksjon med tre objekter */
function generateImage() {
	let images = [
		"lasagne.webp",
		"vegetarisk-taco.jpeg",
		"halloumisalat.jpeg",
		"blomkål.webp",
		
	];

    let info = [
        "Lasagne",
        "Taco",
        "Halloumisalat",
        "Blomkålsalat"

    ]
    let link=[
       "https://meny.no/oppskrifter/Pasta/Lasagne/vegetar-lasagne/" , 
       "//meny.no/oppskrifter/vegetar/vegetarisk-taco-i-hjertesalat/",
       "https://meny.no/oppskrifter/vegetar/halloumisalat-med-grillet-frukt/",
       "https://meny.no/oppskrifter/salat/blomkalsalat/",
       
    ]
/* Setter en random index */
	let randomIndex = Math.floor(Math.random() * images.length);

    /* random image, får objektet med random index */
	let randomImage = images[randomIndex];
    /* henter id random-image*/
	let imgElement = document.getElementById("random-image"); 
    /* sier at img elementet går inn i bildemappen og bruker sourcen til objektet images */
    imgElement.src = `./Bilder/${randomImage}`;
    
    /*  henter id image text*/
    let imgText = document.getElementById("image-text")
    /* Endrer den til å bli det objektet */
    imgText.innerHTML= info[randomIndex]

    /* Henter linkOppskkrif */
    let linkText=document.getElementById("linkOppskrift")
    /* Endrer innholdet til å bli linken */
    linkText.href= link[randomIndex]
	
    /* Har en klasse som har hide, fjerner den */
    linkText.classList.remove("hide")

    

}

