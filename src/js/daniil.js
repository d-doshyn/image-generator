let inputs = {
    width: document.querySelector("#width"),
    height: document.querySelector("#height"),
    backgroundColor: document.querySelector("#background"),
    textColor: document.querySelector("#color"),
    format: document.querySelector("#extension"),
    text: document.querySelector("#text"),
}

let image = document.querySelector("#image");

function createSrc() {
    image.setAttribute(
        "src",
        "https://dummyimage.com/" +
        inputs.width.value +
        "x" +
        inputs.height.value +
        "/" +
        inputs.backgroundColor.value.replace(/#/, '') +
        "/" +
        inputs.textColor.value.replace(/#/, '') +
        "/" +
        inputs.format.value +
        "?text=" +
        inputs.text.value.replace(/ /g, '+')
    );
}

for (let input in inputs) {
    inputs[input].oninput = createSrc;
}

let downloadButton = document.querySelector("#download");

function download(){
    let words = ['generated', 'image', 'placeholder', 'your image', 'generated image'];
    let random = Math.floor(Math.random() * (words.length));
    saveAs(image.src, words[random]);
}

downloadButton.onclick = download;


var typed = new Typed('.typed-text', {
    strings: ['Random image generator'],
    smartBackspace: true,
    loop: true,
    typeSpeed: 50,
    backSpeed: 50,
});