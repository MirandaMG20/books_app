import { useState, useEffect } from 'react'
import Form from "./components/Form"


function Books() {

  const [book, setBook] = useState(null);

  const url = 'https://book-finder1.p.rapidapi.com/api/search?title=the%20notebook&author=Nicholas%20Sparks&book_type=Fiction&results_per_page=10&page=1';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
      'X-RapidAPI-Host': 'book-finder1.p.rapidapi.com'
    }
  };

  // Function to getBooks
  const getBook = async (searchBookTerm) => {
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
    getBook("The Notebook");
    console.log('useEffect is called')
  }, []);


  return (
    <>
      <h1>Books</h1>
      <Form bookSearch={getBook} />
    </>
  )
}

export default Books
