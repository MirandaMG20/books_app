import { useState, useEffect } from 'react'
import Form from "./components/Form"
import BookDisplay from './components/BookDisplay';


function App() {

  const [book, setBook] = useState(null);

  // Function to getBooks
  const getBook = async (searchBookTerm) => {
    const url = `https://book-finder1.p.rapidapi.com/api/search?title=${searchBookTerm}&author=Nicholas%20Sparks&page=1&results_per_page=2`;
    //https://book-finder1.p.rapidapi.com/api/search?title=the%20notebook&author=Nicholas%20Sparks&results_per_page=2&page=1
    //  title=${searchBookTerm}
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
      setBook(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBook("Dracula");
    // console.log('useEffect is called')
  }, []);


  return (
    <>
      <h1>Books</h1>
      <Form bookSearch={getBook} />
      <BookDisplay book={book} />
    </>
  )
}

export default App
