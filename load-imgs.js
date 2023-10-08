// import { readdir } from 'node:fs';
const fs = require('fs');
const dir = '/images';

fs.readdir(dir, (err, files) => {
  console.log(files);
});

var path = window.location.pathname;
var page = path.split("/").pop();
var shoot = page.slice(0,-5);
console.log( shoot );

var imageThumbs = document.getElementById("image-thumbs");

for (var i = 1; i <= 23; i++) {
    var thumb = document.createElement("img");

    thumb.src = "images/" + shoot + "/" + shoot + i + ".jpg";
    thumb.alt = "Image " + i;

    thumb.classList.add("thumb");
    imageThumbs.appendChild(thumb);
}