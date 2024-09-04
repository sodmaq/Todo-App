import { useEffect, useState } from "react";

function Quote() {
  const [quote, setQuote] = useState({ content: "", author: "" });
  const url = "https://api.quotable.io/random";

  const fetchQuote = async function () {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const data = await response.json();
      setQuote(data);
    } catch (error) {
      console.error("Error fetching the quote:", error);
    }
  };

  useEffect(() => {
    fetchQuote(); // Fetch quote when the component mounts
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold">{quote.content}</h1>
      <p className="text-lg">- {quote.author}</p>
      <button
        onClick={fetchQuote} // Fetches a new quote when the button is clicked
        type="button"
        className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        Get New Quote
      </button>
    </div>
  );
}

export default Quote;
