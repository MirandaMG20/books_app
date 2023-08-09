import React from "react";
import { useState } from "react";
import { FormStyles, Button, Span, Input } from "./styles/Form.styled"
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

                <FormStyles >

                    <Span style={{ color: "#0d0d0d"}}> Title: </Span>
                    
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

        </StyledHeader>
    )
}

export default Form;