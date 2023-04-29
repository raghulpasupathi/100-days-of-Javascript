const result = document.querySelector(".result");
let input = document.querySelector(".query");

const countOfInput = () => {
result.innerHTML = input.value.length;
console.log(input.value);
}

input.addEventListener("keyup", countOfInput);

