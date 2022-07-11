// my preloader UwU
document.body.onload = function () {
  setTimeout(function () {
    let preloader = document.querySelector(".preloader");
    if (!preloader.classList.contains("done")) {
      preloader.classList.add("done");
    }
  }, 1000);
};
// total inputs
let inputs = {
  width: document.querySelector("#width"),
  height: document.querySelector("#height"),
  color: document.querySelector("#color"),
  background: document.querySelector("#background"),
  text: document.querySelector("#text"),
  extention: document.querySelector("#extension"),
  download: document.querySelector("#download"),
};
let download = document.querySelector("#download");
let image = document.querySelector("#image");
// src example
// https://dummyimage.com/1920x1080/000/fff/.png?text=Damirka+Full+HD
for (let input in inputs) {
  inputs[input].oninput = function () {
    image.setAttribute(
      "src",
      "https://dummyimage.com/" +
        inputs.width.value +
        "x" +
        inputs.height.value +
        "/" +
        inputs.background.value +
        "/" +
        inputs.color.value +
        "/" +
        inputs.extention.value +
        "?text=" +
        inputs.text.value
    );
  };
}

// change value
color.value.replace(/#/, "");

text.value.replace(/ /, "+");
download.onclick = function () {
  image.setAttribute(
    "src",
    "https://dummyimage.com/" +
      inputs.width.value +
      "x" +
      inputs.height.value +
      "/" +
      inputs.background.value +
      "/" +
      inputs.color.value +
      "/" +
      inputs.extention.value +
      "?text=" +
      inputs.text.value
  );
};

