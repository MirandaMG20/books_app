import React from "react";
// import styled from "styled-components";



function BookDisplay({ book }) {
    const loaded = () => {
        console.log(book)

        return (
            <>
                {/* <img src={ || "N/A"} alt={book.Title} /> */}

                {book.results.map((bk) =>
                (
                    <div>
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