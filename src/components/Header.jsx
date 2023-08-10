import React from "react";
import { useState } from "react";
import { StyledHeader, StyledTitle, FormStyles, Button, Span, Input, Quote, BookIcon } from "./styles/Header.styled"


function Header({ bookSearch }) {

    const [form, setForm] = useState({
        searchBookTerm: ""
    })

    const handleChange = (e) => {
        // console.log(e.target.value)
        setForm({
            ...form,
            searchBookTerm: e.target.value
        })
    }

    const handleClick = (e) => {
        e.preventDefault();
        bookSearch(form.searchBookTerm);
        form.searchBookTerm = "";
    }

    return (
        <StyledHeader>

            <StyledTitle>Books</StyledTitle>

            <FormStyles >

                <Span style={{ color: "#0d0d0d" }}> Title: </Span>

                <Input
                    type="text"
                    placeholder=""
                    value={form.searchBookTerm}
                    onChange={handleChange} />

                <Button
                    type="submit"
                    value="Submit"
                    onClick={handleClick}> Search </Button>

            </FormStyles>

            <Quote>
                <BookIcon><i class="fas fa-book-reader fa-2x"></i></BookIcon>
                <h2 style={{ color: "#939393" }}>Reading is a magical getaway!</h2>
            </Quote>

        </StyledHeader>
    )
}

export default Header;