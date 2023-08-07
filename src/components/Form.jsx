import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { Button } from "./styles/Form.styled"


function Form({ bookSearch }) {

    const [form, setForm] = useState({ searchTerm: "" })

    const handleChange = (e) => {
        console.log(e.target.value)
        setForm({
            ...form,
            searchTerm: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault(); 
        bookSearch(form.searchTerm);  
        form.searchTerm = "";
    }

    return (

        <form>
            <input type="text" placeholder="Title" /> 
            <span> or </span> 
            <input type="text" placeholder="Author" />
            <Button type="submit" value="Submit" />
        </form>
    )
}

export default Form;