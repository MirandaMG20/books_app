import React from "react";
import { useState } from "react";
import { Button } from "./styles/Form.styled"


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

    const handleSubmit = (e) => {
        e.preventDefault(); 
        bookSearch(form.searchBookTerm);  
        form.searchBookTerm = "";
    }

    return (

        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            placeholder="Title" 
            value={form.searchBookTerm} 
            onChange={handleChange} /> 
            
            <span> or </span> 

            <input 
            type="text" 
            placeholder="Author" />

            <Button type="submit" value="Submit" onClick={bookSearch}> Search </Button>
        </form>
    )
}

export default Form;