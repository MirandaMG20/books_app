import React from "react";
import { useState } from "react";
import { StyledHeader, StyledTitle, FormStyles, Button, Span, Input, Quote, BookIcon } from "./styles/Header.styled"


// Defining the Header component which takes 'bookSearch' as a prop
function Header({ bookSearch }) {

    // State to hold the form input value
    const [form, setForm] = useState({
        searchBookTerm: ""
    })

    // Function to handle input change
    const handleChange = (e) => {
        // console.log(e.target.value)
        setForm({
            ...form,
            searchBookTerm: e.target.value
        })
    }

    // Function to handle search button click
    const handleClick = (e) => {
        e.preventDefault();
        // Calling the bookSearch function with the search term
        bookSearch(form.searchBookTerm);
        // Clearing the input field after submission
        form.searchBookTerm = "";
        // setForm({
        //     ...form,
        //     searchBookTerm: ""
        // })
    }

    return (
        <StyledHeader>

            <StyledTitle>Books</StyledTitle>

            <FormStyles >

                <Span style={{ color: "#0d0d0d" }}> Title or Author </Span>

                {/* Input field for search */}
                <Input
                    type="text"
                    placeholder="Search"
                    value={form.searchBookTerm}
                    onChange={handleChange}></Input>

                {/* Search button */}
                <Button
                    type="submit"
                    value="Submit"
                    onClick={handleClick}>
                    <i class="fa fa-search"></i>
                </Button>

            </FormStyles>

            {/* Rendering the quote and book icon */}
            <Quote>
                <BookIcon><i class="fas fa-book-reader fa-2x"></i></BookIcon>
                <h2 style={{ color: "#939393" }}>Reading is a magical getaway!</h2>
            </Quote>

        </StyledHeader>
    )
}

export default Header;