const hex = document.querySelector(".hex");
const button = document.querySelector(".generate");


const randomColor = () => {
        const randomColor= Math.random().toString(16).substring(2,8);
        console.log(randomColor)
        document.body.style.backgroundColor = '#' + randomColor;
        hex.innerHTML = '#' + randomColor;
}

button.addEventListener("click", randomColor);

randomColor();
