const number = document.querySelector(".number");
const button = document.querySelector(".generate");


const randomNumber = () => {
        number.innerHTML = Math.floor(Math.random() * 100 + 1);
}

button.addEventListener("click", randomNumber);

randomNumber();
