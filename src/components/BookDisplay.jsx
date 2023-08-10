import React from "react";
import { useState } from 'react'
import { StyledBookCard, Span, Img, Details, Overlay, Container, Info, Summary, Button } from "./styles/BookDisplay.styled";

// Defining the BookDisplay component which takes 'books' as a prop
function BookDisplay({ books }) {

    // State to hold the selected book for overlay
    const [selectedBook, setSelectedBook] = useState(null);

    // Function to handle card click and show overlay
    const handleCardClick = (book) => {
        //    console.log(book)
        setSelectedBook(book);
    };

    // Function to close the overlay
    const handleCloseOverlay = () => {
        setSelectedBook("");
    };

    // Function to render the loaded content
    const loaded = () => {

        // console.log(books)

        return (

            <Container className="d-flex flex-wrap">

                {books.results.map((book) => (
                    // Rendering a book card for each book in the results
                    <StyledBookCard key={book.canonical_isbn} onClick={() => handleCardClick(book)}>

                        <Img src={book.published_works[0].cover_art_url} alt="Book Cover" />

                        {/* Displaying book details */}
                        <Details>
                            <h5 style={{ color: "#0d0d0d" }}>{book.title || book.title_search || 'None'}</h5>
                            <Span>Author: {book.authors || book.author_last_names || 'None'}</Span>
                            <br />
                            <Span>Categories: {book.subcategories[0] || book.categories[0] || 'None'}</Span>
                            <br />
                            <Span>Page Count: {book.published_works[0].page_count || 'None'}</Span>
                            <br />
                            <Span>Published: {book.copyright || book.published_works[0].copyright || 'None'}</Span>
                        </Details>

                    </StyledBookCard>
                ))}

                {/* Rendering an overlay when a book is selected */}
                {selectedBook && (
                    <Overlay>
                        <Img src={selectedBook.published_works[0].cover_art_url} alt="Book Cover" />
                        <Info>
                            <h3 style={{ color: "#0d0d0d" }}> Summary: </h3>
                            {/* Displaying book summary */}
                            <Summary>{selectedBook.summary || 'None'}</Summary>
                            <Button onClick={handleCloseOverlay}>Close</Button>
                        </Info>
                    </Overlay >
                )}

            </Container>
        );
    };

    // Function to render loading message if no books are found
    const loading = () => {
        return <h1>No books found... </h1>;
    };

    // Rendering content based on whether 'books' is available
    return books ? loaded() : loading();
}

// Exporting the BookDisplay component as the default export
export default BookDisplay;