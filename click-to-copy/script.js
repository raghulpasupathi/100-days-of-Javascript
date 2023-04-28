const input = document.querySelector(".coupon");
const btn = document.querySelector(".btn");


const copyInput = (e) => {
  e.preventDefault();

  navigator.clipboard.writeText(input.value)
    .then(() => {
      btn.textContent = "Copied!!!";
      setTimeout(() => {
        btn.textContent = "Copy";
      }, 3000)
    });
}


btn.addEventListener("click", copyInput);


