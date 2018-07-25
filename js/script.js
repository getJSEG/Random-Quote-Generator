//getting html elements
var start = document.querySelector(".startAnimation");
var quoteBox = document.getElementById("quote-box");
var changeQuote = null;

//creating array of quote objects
var quotes = [
{
	quote: "You know you\’re in love when you can\’t fall asleep because reality is finally better than your dreams.",
	source:"Dr. Suess",
	citation:"",
	year:"",
},
{
	quote: "It is hard to fail, but it is worse never to have tried to succeed.",
	source: "Theodore Roosevelt",
	citation:"",
	year:"",
},
{
	quote: "You can do anything but not everything",
	source: "David Allen",
	citation:"Making It All Work",
	year:"2009",
},
{
	quote: "Learning never exhausts the mind.",
	source: "Leonardo da Vinci",
	citation:"",
	year:"",
},
{
	quote: "You only live once, but if you do it right, once is enough.",
	source: "Mae West",
	citation:"",
	year:"",
}
];

//returning a random object from the array
function getRandomQuote(){
	var randomObject = Math.floor(Math.random() * (0 + quotes.length) + 0);
	return quotes[randomObject];
}

//getting the value from the object and printing it to html
function printQuote(){
	var object = getRandomQuote();
	var message = "";
	
	message = '<p class="quote">' + object["quote"] + '</p>';	
	message += '<p class="source">' + object["source"];	
	
	//if citation or year is not empty print it
	if(object["citation"] !== ""){
		message += '<span class="citation">' + object["citation"] + '</span>';
	}
	if(object["year"] !== ""){
		message += '<span class="year">' + object["year"] + '</span>';
	}
	
	quoteBox.innerHTML = message + '</p>';
}

//change color of body background to a random color
function randomColor(){
	var r = Math.ceil(Math.random() * (0 + 255) + 0);
	var g = Math.ceil(Math.random() * (0 + 255) + 0);
	var b = Math.ceil(Math.random() * (0 + 255) + 0);
	
	document.querySelector("body").style.backgroundColor = "rgb(" + r + "," + g +","+ b +")";
}

//animating quote from left to center
function animation(){	
	start.classList.remove("startAnimation");
	//triggers a reflow	of animation
	void start.offsetWidth;	
	start.classList.add("startAnimation");	
}

function randomQuotes(){		
	printQuote();
	randomColor();
	animation();	
}

//change quote every 10 sec
changeQuote = setInterval(randomQuotes, 10000);

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", function(){randomQuotes();}, false);
//when mouse is hovering over (loadQuote)button it stops calling changeQuote
document.getElementById('loadQuote').addEventListener("mouseover", function(){ clearInterval(changeQuote); }, false);
//When mouse is out of (loadQuote)button it starts calling randomQuote() every 10 sec 
document.getElementById('loadQuote').addEventListener("mouseout", function(){ changeQuote = setInterval(randomQuotes, 10000); }, false);