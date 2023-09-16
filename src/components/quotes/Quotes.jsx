import React, { useEffect, useState } from 'react';
import './quotes.css';

const apiUrl = process.env.REACT_APP_API_URL;
const apiKey = process.env.REACT_APP_API_KEY;

const Quotes = () => {
  const [quotes, setQuotes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const getData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
          'X-Api-Key': apiKey,
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      setQuotes(data[0]);
      setIsLoading(false);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      setIsError(true);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const message = isError ? 'There must be some error' : 'Loading...';
  if (isLoading || isError) {
    return <p className="message">{message}</p>;
  }
  return (
    <div className="container">
      <div className="quotesDiv">
        <h2>Quotes</h2>
        <ul className="quotesList">
          <li key={quotes.id}>
            <span>
              {' "'}
              {quotes.quote}
              {'" '}
            </span>
            <span>
              Author:
              {' '}
              {quotes.author}
            </span>
            <span>
              Category:
              {quotes.category}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Quotes;
