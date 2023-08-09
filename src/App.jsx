import { useState, useEffect } from 'react'
import Form from "./components/Form"
import BookDisplay from './components/BookDisplay';


function App() {

  const [books, setBooks] = useState(null);

  // Function to getBooks
  const getBooks = async (searchBookTerm) => {
    const url = `https://book-finder1.p.rapidapi.com/api/search?title=${searchBookTerm}&page=1&results_per_page=20`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
        'X-RapidAPI-Host': 'book-finder1.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      // console.log(data)
      setBooks(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBooks("Dracula");
    // console.log('useEffect is called')
  }, []);


  return (
    <>
        <Form bookSearch={getBooks} />
        <BookDisplay books={books}  />
    </>
  )
}

export default App
