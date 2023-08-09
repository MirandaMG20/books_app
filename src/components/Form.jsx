import React from "react";
import { useState } from "react";
import { Button } from "./styles/Form.styled"
import { StyledHeader, StyledTitle } from "./styles/Header.styled";


function Form({ bookSearch }) {

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
            
            <form >

                <input
                    type="text"
                    placeholder="Title"
                    value={form.searchBookTerm}
                    onChange={handleChange} />

                <br />
                <span style={{ color: "#0d0d0d" }}> or </span>
                <br />

                <input
                    type="text"
                    placeholder="Author" />
                <br />

                <Button
                    type="submit"
                    value="Submit"
                    onClick={handleClick}> Search </Button>

            </form>

        </StyledHeader>

    )
}

export default Form;