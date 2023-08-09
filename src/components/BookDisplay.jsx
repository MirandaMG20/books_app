import React from "react";
// import styled from "styled-components";
import { StyledBookCard, Span, Details } from "./styles/BookDisplay.styled";


function BookDisplay({ books }) {
    const loaded = () => {

        console.log(books)

        return (
            <>
                {books.results.map((book) =>
                (
                    <StyledBookCard key={book.canonical_isbn}>

                        <img src={book.published_works[0].cover_art_url} alt="Book Cover" />
                        
                        <Details>
                            <h3>{book.title || book.title_search || 'None'}</h3>
                            <Span>Author: {book.authors || book.author_last_names || 'None'}</Span>
                            <br />
                            <Span>Categories: {book.subcategories[0] || book.categories[0] || 'None'}</Span>
                            <br />
                            <Span>Page Count: {book.published_works[0].page_count || 'None'}</Span>
                            <br />
                            <Span>Published: {book.copyright || book.published_works[0].copyright || 'None'}</Span>
                        </Details>

                        <Span>Summary: {book.summary || 'None'}</Span>

                    </StyledBookCard>)
                )}
            </>
        );
    };

    const loading = () => {
        return <h1>No books found... </h1>;
    };

    return books ? loaded() : loading();
}

export default BookDisplay;