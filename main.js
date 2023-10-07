const quoteApiUrl =
	"https://api.quotable.io/random?minLength=80&maxLength=100";

const quoteSelection = document.getElementById("quote"),
	userInput = document.getElementById("quote-input");

let quote = "";
let time = 60;
let timer = "";
let mistake = "";

const renderNewQuote = async () => {
    // fetch the api url content
    const response = await fetch(quoteApiUrl);

    // store response
    let data = await response.json()
    
    // access quotes
    quote = data.content;

    let arr = quote.split("").map((value) => {
        // wrap the characters in a span 
        return "<span class='quote-chars'>" + value + "</span>"
    });

    // join the array
    quoteSelection.innerHTML += arr.join("");
}


window.onload = () => {
    userInput.value = "";
    document.getElementById("start-test").style.display = "block";
    document.getElementById("stop-test").style.display = "none";
    userInput.disabled = true;
    renderNewQuote();
} 
