import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import './quotes.css';

const ShowQuotes = () => {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    const apiUrl = process.env.REACT_APP_API_URL;
    const apiKey = process.env.REACT_APP_API_KEY;

    Swal.fire({
      title: 'Fetching Quotes...',
      html: '<div class="sweet-alert-loading-spinner"><div class="spinner"></div></div>',
      allowOutsideClick: false,
      showConfirmButton: false,
    });

    fetch(apiUrl, {
      method: 'GET',
      headers: {
        'X-Api-Key': apiKey,
      },
    }).then((response) => response.json()).then((responseData) => {
      Swal.close();
      setQuotes(responseData);
    }).catch((error) => {
      Swal.close();
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'There was a problem with the fetch operation',
      });
      throw new Error('Something wrong happened', error);
    });
  }, []);

  return (
    <div className="container">
      <div className="quotesDiv">
        <h2>Quotes</h2>
        <ul className="quotesList">
          {quotes.map((quote, index) => (
            <li key={quote.id}>
              <span>
                {index + 1}
                {'. '}
                {quote.quote}
              </span>
              <span>
                Author:
                {' '}
                {quote.author}
              </span>
              <span>
                Category:
                {quote.category}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ShowQuotes;
