// inputs
let width = document.querySelector("#width");
let height = document.querySelector("#height");
let color = document.querySelector("#color");
let background = document.querySelector("#background");
let text = document.querySelector("#text");
let extention = document.querySelector("#extension");
let download = document.querySelector("#download");
// image
let image = document.querySelector("#image");
// https://dummyimage.com/1920x1080/000/fff/.png?text=Damirka+Full+HD
// https://dummyimage.com/100x500/#77d935/#8f8f8f/.png?text=Damirka+Fulg
console.log(width);
console.log(height);
console.log(color);
console.log(background);
console.log(text);
console.log(extention);
console.log(download);
download.onclick = function () {
  image.setAttribute(
    "src",
    "https://dummyimage.com/" +
      width.value +
      "x" +
      height.value +
      "/" +
      background.value +
      "/" +
      color.value +
      "/" +
      extention.value +
      "?text=" +
      text.value
  );
};
// меняем решетку для цвета
color.value.replace(/#/, "");

text.value.replace(/ /, "+");
