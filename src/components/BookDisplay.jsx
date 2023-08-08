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

                        <h2>{bk.title || bk.title_search || 'None'}</h2>
                        <h3>Author: {bk.authors || bk.author_last_names || 'None'}</h3>
                        <h3>Categories: {bk.subcategories[0] || bk.categories[0] || 'None'}</h3>
                        <h3>Page Count: {bk.published_works[0].page_count || 'None'}</h3>
                        <h3>Published: {bk.copyright || bk.published_works[0].copyright || 'None'}</h3>
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