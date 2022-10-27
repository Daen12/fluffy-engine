const images=[
    "0.jpg",
    "1.jpg",
    "2.jpg",
];
const chosenImage = images[Math.floor(Math.random()*images.length)];

console.log(chosenImage)

const bgImage = document.createElement("img");//CreateElement has all the tags you put in html. Here we select which tag we create in order to add to html.

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage); //appendChild adds the tag at the end. Remember!