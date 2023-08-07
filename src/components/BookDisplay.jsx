import React from "react";
// import styled from "styled-components";



function BookDisplay({ book }) {
    const loaded = () => {
        console.log(book)

        return (
            <>
                {book.results.map((bk) =>
                (
                    <div key={bk.canonical_isbn}>
                        
                        <img src={bk.published_works[0].cover_art_url} alt="Book Cover" />
                        <h1>{bk.title}</h1>
                        <h1>{bk.authors}</h1>
                    </div>
                )
                )}

            </>
        );
    };

    const loading = () => {
        return <h1>No books found... </h1>;
    };

    return book ? loaded() : loading();
}

export default BookDisplay;