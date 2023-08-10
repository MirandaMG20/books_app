import React from "react";
import { useState } from 'react'
import { StyledBookCard, Span, Img, Details, Overlay, Summary, Button, Container } from "./styles/BookDisplay.styled";


function BookDisplay({ books }) {

    const [selectedBook, setSelectedBook] = useState(null);

    const handleCardClick = (book) => {
        //    console.log(book)
        setSelectedBook(book);
    };

    const handleCloseOverlay = () => {
        setSelectedBook("");
    };

    // const handleSelectedBook = (selectedBook) => {
    //     console.log("Selected Book:", selectedBook);
    // };

    const loaded = () => {

        // console.log(books)

        return (

            <Container className="d-flex flex-wrap">

                {books.results.map((book) => (
                    <StyledBookCard key={book.canonical_isbn} onClick={() => handleCardClick(book)}>

                        <Img src={book.published_works[0].cover_art_url} alt="Book Cover" />

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
                {selectedBook && (
                    <Overlay>
                        <h3 style={{ color: "#0d0d0d" }}> Summary: </h3>
                        <Summary>{selectedBook.summary || 'None'}</Summary>
                        <Button onClick={handleCloseOverlay}>Close</Button>
                    </Overlay >
                )}

            </Container>
        );
    };

    const loading = () => {
        return <h1>No books found... </h1>;
    };

    return books ? loaded() : loading();
}

export default BookDisplay;