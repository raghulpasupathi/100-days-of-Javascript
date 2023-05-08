const input = document.querySelector("#search");


const search = () => {    // search for partial match of countries in list 
  const inputValue = input.value.toLowerCase();
  const li = document.getElementsByTagName("li");

  for(let i = 0; i < li.length; i++){
    if(li[i].innerHTML.toLowerCase().includes(inputValue)) li[i].style.display = "";
    else li[i].style.display = "none";
  }
}


input.addEventListener("keyup", search);