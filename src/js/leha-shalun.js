let image = document.querySelector('.content-image');

let inputs = {
    width: document.querySelector('#width'),
    height: document.querySelector('#height'),
    bg: document.querySelector('#background'),
    textColor: document.querySelector('#color'),
    format: document.querySelector('#extension'),
    text: document.querySelector('#text')
}

for (let input in inputs) {
    inputs[input].oninput = function () {
        image.setAttribute('src', 
        'https://dummyimage.com/' +
        inputs.width.value +
        'x' +
        inputs.height.value +
        '/' +
        inputs.bg.value.replace(/#/, '') +
        '/' +
        inputs.textColor.value.replace(/#/, '') +
        '/' +
        inputs.format.value +
        '?text=' +
        inputs.text.value.replace(/ /g, '+')
        )
    }
}