let width = document.querySelector('#width');
let height = document.querySelector('#height');
let plchImg = document.querySelector('.content-image');
let imgSize = 0

function imgGenerate () {
    let widthValue = width.value;
    let heightValue = height.value;
    imgSize = widthValue + 'x' + heightValue;

    plchImg.src = plchImg.src.replace("1000x1000", imgSize)
    console.log(plchImg.src);
}

// width.onclick = imgGenerate
// height.onclick = imgGenerate

width.onkeydown = function (event) {
    if (event.keyCode == 13) {
        imgGenerate
    }
}

height.onkeydown = function (event) {
    if (event.keyCode == 13) {
        imgGenerate
    }
}