const colorpicker = document.getElementById("color")
const textchange = document.getElementById("display")
const para = document.getElementById("content")
const countbtn = document.getElementById("clickme")
const colorbtn = document.getElementById("changebg")

para.textContent = "FemCodeAfrica JavaScript Class"

let count = 0;

countbtn.addEventListener("click", () => {
    count++;
    textchange.textContent = count;
})

colorbtn.addEventListener("click", () => {
    colorpicker.classList.remove("container");
    colorpicker.classList.add("color")
})