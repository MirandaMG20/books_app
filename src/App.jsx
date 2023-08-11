// Importing necessary modules from React and custom components 
// import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react'
import Header from "./components/Header"
// import Favorites from './components/pages/Favorites';
import BookDisplay from './components/BookDisplay';
import Footer from './components/Footer';

function App() {
  // State to hold the fetched book data
  const [books, setBooks] = useState(null);

  // Function to fetch books based on the search term
  const getBooks = async (searchBookTerm) => {
    // API endpoint URL with the search term we use a "template literals" ${}
    const url = `https://book-finder1.p.rapidapi.com/api/search?title=${searchBookTerm}&page=1&results_per_page=25`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
        'X-RapidAPI-Host': 'book-finder1.p.rapidapi.com'
      }
    };

    try {
      // Sending the fetch request and awaiting the response
      const response = await fetch(url, options);
      const data = await response.json();
      // console.log(data)
      //Updating the state with fetched book data
      setBooks(data);
    } catch (error) {
      // Logging an error if the fetch request fails
      console.log(error);
    }
  };

  // Using useEffect to fetch books 
  useEffect(() => {
    // Calling the getBooks function with an initial search term
    getBooks("Code Girls");
    // console.log('useEffect is called')
  }, []);

  //Rendering the components of the app
  return (
    <>
      {/* Rendering the Header component and passing the getBooks function as a prop */}
      <Header bookSearch={getBooks} />
      
        {/* <Routes>
          <Route path='/favorites' element={<Favorites />} />
        </Routes> */}
      
      {/* Rendering the BookDisplay component and passing the fetched book data as a prop */}
      <BookDisplay books={books} />
      {/* Rendering the Footer component */}
      <Footer />
    </>
  )
}

// Exporting the App component as the default export
export default App
