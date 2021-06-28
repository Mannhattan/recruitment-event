import React, { useState } from 'react';

import { Link } from "react-router-dom";

import './styles.scss';



const Input = ({ label, id, type, required = false, size = "medium", onChange, hasError }) => {
    return (
        <div className={`form-input-wrapper ${size}`}>
            <label htmlFor={id}>{label} {required && <span>*</span>}</label>
            <input type={type} name={id} id={id} onChange={(event) => onChange(event.target.value)} className={hasError ? "error" : ""} />
        </div>
    )
}



export default Input;