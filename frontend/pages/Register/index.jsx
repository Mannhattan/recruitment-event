import React, { useEffect, useState } from 'react';

import config from '@root/config.json';

import "./styles.scss";

import valorantLogo from '@assets/images/valorant.webp';
import successImg from '@assets/images/success.png';
import sovaImg from '@assets/images/sova.jpg';

import Input from '@components/Form/Input';
import DatePicker from '@components/Form/DatePicker';



const Register = () => {
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState(false);

    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState(false);

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState(false);

    const [eventDate, setEventDate] = useState("");
    const [eventDateError, setEventDateError] = useState(false);

    const [isRegistered, setIsRegistered] = useState(false);



    const registerParticipant = async () => {
        let response = await fetch(`${config.API_URL}/api/registration`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstName, lastName, email, eventDate, accessKey: config.API_ACCESS_KEY
            })
        });
        response = await response.json();

        if (response.errors.length > 0) {
            setFirstNameError(response.errors.includes("INVALID_FIRST_NAME") ? true : false);
            setLastNameError(response.errors.includes("INVALID_LAST_NAME") ? true : false);
            setEmailError(response.errors.includes("INVALID_EMAIL") ? true : false);
            setEventDateError(response.errors.includes("INVALID_DATE") ? true : false);
        } else setIsRegistered(true);
    }

    return (
        <section className="c-register">
            <div className="register-wrapper">
                <img src={valorantLogo} alt="tournament logo" className="tournament-logo" />
                <h2>Multi-edition tournament</h2>

                {!isRegistered ?
                    <div className="register-form">
                        <h3>Register to edition</h3>
                        <div className="horizontal-wrapper">
                            <Input label="First name" id="firstName" type="text" size="small" onChange={setFirstName} hasError={firstNameError} required />
                            <Input label="Last name" id="lastName" type="text" size="small" onChange={setLastName} hasError={lastNameError} required />
                        </div>

                        <Input label="Email" id="email" type="email" onChange={setEmail} hasError={emailError} required />

                        <DatePicker label="Tournament edition date" id="eventDate" onChange={setEventDate} hasError={eventDateError} required />

                        <button className="button-register" onClick={registerParticipant}>Register</button>
                    </div>
                    :
                    <div className="register-success">
                        <img src={successImg} alt="success image" className="success-image" />
                        <p>Your registration has been successful!</p>
                    </div>
                }
            </div>

            <img src={sovaImg} alt="background image" className="background" />
        </section>
    )
}



export default Register;