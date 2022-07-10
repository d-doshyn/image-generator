let menu = document.querySelector(".menu");
let edit = document.querySelector(".edit-image");
let burger = document.querySelector(".burger");
let cross = document.querySelector(".cross");

burger.onclick = function () {
	menu.classList.toggle("active");
};

cross.onclick = function () {
	menu.classList.remove("active");
};

edit.onclick = function () {
	menu.classList.toggle("active");
};