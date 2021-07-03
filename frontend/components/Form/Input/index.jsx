import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Link } from "react-router-dom";

import './styles.scss';



const Input = ({ label, id, type, size = "medium", onChange, required = false, errorMessage, regexValidator }) => {
    const [hasError, setHasError] = useState(false);

    const handleInput = (event) => {
        if (regexValidator.test(event.target.value)) {
            onChange(event.target.value);
            setHasError(false);
        } else {
            onChange(null);
            setHasError(true);
        }
    }

    return (
        <div className={`form-input-wrapper ${size}`}>
            <label htmlFor={id}>{label} {required && <span>*</span>}</label>
            <input type={type} name={id} id={id} onChange={handleInput} className={hasError ? "error" : ""} />
            <p className="error-message">{hasError && errorMessage}</p>
        </div>
    )
}

Input.propTypes = {
    label: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    type: PropTypes.oneOf(["email", "text"]).isRequired,
    size: PropTypes.oneOf(["small", "medium"]),
    onChange: PropTypes.func.isRequired,
    required: PropTypes.bool,
    errorMessage: PropTypes.string
}



export default Input;