// Smurf Cat Meme extension

// Smurf Cat Meme
let BlueSmurfCatImage = "https://i.kym-cdn.com/photos/images/newsfeed/002/652/460/d70.jpg"

// Replace all images with Smurf Cat
const imgs = document.getElementsByTagName("img");
for(let i = 0; i < imgs.length; i++) {
    imgs[i].src = BlueSmurfCatImage;
}

// Smurf Cat text
let BlueSmurfCatText = "WE LIVE, WE LOVE, WE LIE"

// Replace all text with "WE LIVE, WE LOVE, WE LIE"
const pTags = document.getElementsByTagName("p");
for(let i = 0; i < pTags.length; i++) {
    pTags[i].innerHTML = BlueSmurfCatText;
}

const h1Tags = document.getElementsByTagName("h1");
for(let i = 0; i < h1Tags.length; i++) {
    h1Tags[i].innerHTML = BlueSmurfCatText;
}

const h2Tags = document.getElementsByTagName("h2");
for(let i = 0; i < h2Tags.length; i++) {
    h2Tags[i].innerHTML = BlueSmurfCatText;
}

const h3Tags = document.getElementsByTagName("h3");
for(let i = 0; i < h3Tags.length; i++) {
    h3Tags[i].innerHTML = BlueSmurfCatText;
}

const h4Tags = document.getElementsByTagName("h4");
for(let i = 0; i < h4Tags.length; i++) {
    h4Tags[i].innerHTML = BlueSmurfCatText;
}

const h5Tags = document.getElementsByTagName("h5");
for(let i = 0; i < h5Tags.length; i++) {
    h5Tags[i].innerHTML = BlueSmurfCatText;
}

const h6Tags = document.getElementsByTagName("h6");
for(let i = 0; i < h6Tags.length; i++) {
    h6Tags[i].innerHTML = BlueSmurfCatText;
}

const spanTags = document.getElementsByTagName("span");
for(let i = 0; i < spanTags.length; i++) {
    spanTags[i].innerHTML = BlueSmurfCatText;
}

// background image changes to Smurf Cat
document.body.style.backgroundImage = "url('" + BlueSmurfCatImage + "')";
