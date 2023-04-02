const count = document.querySelector(".count");
const buttons = document.querySelector(".buttons");


buttons.addEventListener("click", (event) => {
    if(event.target.classList.contains("add")){
        count.innerHTML++;
    }
    if(event.target.classList.contains("reset")){
        count.innerHTML =0;
    }
    if(event.target.classList.contains("subtract")){
        count.innerHTML--;
    }
    setColor();
});

function setColor() {
    if(count.innerHTML < 0){
        count.style.color = "orange";
    }
    if(count.innerHTML > 0){
        count.style.color = "yellow";
    }
    if(count.innerHTML == 0){
        count.style.color = "white";
    }
}