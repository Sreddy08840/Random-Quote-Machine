import React from "react";
import ReactDOM from "react-dom";
import './App.css';

const quotes = [
  {
    text: "The only limit to our realization of tomorrow is our doubts of today.",
    author: "Franklin D. Roosevelt"
  },
  {
    text: "Life is 10% what happens to us and 90% how we react to it.",
    author: "Charles R. Swindoll"
  },
  {
    text: "The best way to predict the future is to invent it.",
    author: "Alan Kay"
  },
  {
    text: "Do not wait to strike till the iron is hot; but make it hot by striking.",
    author: "William Butler Yeats"
  },
  {
    text: "Happiness is not something ready made. It comes from your own actions.",
    author: "Dalai Lama"
  }
];

function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

function App() {
  const [quote, setQuote] = React.useState(getRandomQuote());
  const [flipped, setFlipped] = React.useState(false);

  const handleNewQuote = () => {
    setFlipped(true);
    setTimeout(() => {
      setQuote(getRandomQuote());
      setFlipped(false);
    }, 600);
  };

  return (
    <div className="container">
      <div id="quote-box" className={`card ${flipped ? "flip" : ""}`}>
        <div className="card-inner">
          <div className="card-front">
            <p id="text">"{quote.text}"</p>
            <p id="author">- {quote.author}</p>
            <div className="buttons">
              <a
                id="tweet-quote"
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                  `"${quote.text}" - ${quote.author}`
                )}`}
                target="_blank"
                rel="noreferrer"
              >
                Tweet
              </a>
              <button id="new-quote" onClick={handleNewQuote}>
                New Quote
              </button>
            </div>
          </div>
          <div className="card-back"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
