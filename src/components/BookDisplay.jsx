import React from "react";
import styled from "styled-components";
import { StyledBookCard } from "./styles/BookDisplay.styled";


function BookDisplay({ books }) {
    const loaded = () => {

        // console.log(books)

        return (
            <>
                {books.results.map((book) =>
                (
                    <StyledBookCard key={book.canonical_isbn}>

                        <img src={book.published_works[0].cover_art_url} alt="Book Cover" />
                        
                        <div>
                            <h2>{book.title || book.title_search || 'None'}</h2>
                            <h3>Author: {book.authors || book.author_last_names || 'None'}</h3>
                            <h3>Categories: {book.subcategories[0] || book.categories[0] || 'None'}</h3>
                            <h3>Page Count: {book.published_works[0].page_count || 'None'}</h3>
                            <h3>Published: {book.copyright || book.published_works[0].copyright || 'None'}</h3>
                        </div>

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