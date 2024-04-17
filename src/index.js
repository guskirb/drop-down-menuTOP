import './style.css';

const menu = document.querySelector(".menu");
const dropDown = document.querySelector(".menuDropDown");

function showDropDown(elem) {
    const showElem = elem;
    showElem.style.display = "block";
}

function hideDropDown(elem) {
    const hideElem = elem;
    hideElem.style.display = "none";
}


menu.addEventListener("mouseover", () => {
    showDropDown(dropDown)
})
menu.addEventListener("mouseout", () => {
    hideDropDown(dropDown)
})
dropDown.addEventListener("mouseover", () => {
    showDropDown(dropDown)
})
dropDown.addEventListener("mouseout", () => {
    hideDropDown(dropDown)
})
