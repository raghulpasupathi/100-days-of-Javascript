const btn = document.querySelector(".get-quotes");
const quotes = document.querySelector(".quotes");
const input = document.querySelector("#number")

btn.addEventListener("click", getQuotes);

function getQuotes(e){
    e.preventDefault();

    if(input.value.length === 0){
        return alert("Please enter a number");
    }

    const http = new XMLHttpRequest(); // creating http obj

    http.open("GET", "https://type.fit/api/quotes", true);  // calling api which gives quotes and author details

    http.onload = function(){
        if(this.status === 200){
            console.log(this.responseText)
            const data = JSON.parse(this.responseText);

            let output = '';


            for(let i=0; i< Number(input.value); i++ ) {
                const RI = Math.floor(Math.random() * data.length);   // Get random index of data for random quotes

                output += `
                <li>Quote: ${data[RI].text}</li>
                <li>Author: ${data[RI].author}</li>
                <hr/>
                `
            };

            quotes.innerHTML = output;
        }
    }

    http.send()
}
