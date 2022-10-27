const quotes = [
    {
        quote: "You will face many defeats in life, but never let yourself be defeated.",
        author: "Maya Angelou"
    },
    {
        quote: "Discipline Beats Talent.",
        author: "From a Youtube clip"
    },
    {
        quote: "Everything has beauty, but not everyone sees it",
        author: "Confucius"
    },
    {
        quote: "Life is like riding a bicycle. To keep your balance, you must keep moving.",
        author: "Albert Einstein"
    },
    {
        quote: "Only in the darkness can you see the stars.",
        author: "Martin Luther King Jr."
    },
    {
        quote: "Keep your face always toward the sunshine - and shadows will fall behind you.",
        author: "Wait Whitman"
    },   
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)]
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

//Math.round()반올림기능 and Math.ceil() 올림기능 Math.floor()내림기능