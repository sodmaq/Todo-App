import { useEffect, useState } from "react";

function Quote() {
  const [quote, setQuote] = useState("");
  const url = "https://api.quotable.io/quotes/random";

  useEffect(function () {
    const fetchQuote = async function () {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const data = await response.json();
      setQuote(data[0]);
      console.log(data);
    };

    fetchQuote().catch(console.error);
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold">{quote.content}</h1>
      <button
        onClick={() => setQuote(quote)}
        type="button"
        className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        Purple to Blue
      </button>
    </div>
  );
}

export default Quote;
