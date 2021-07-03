import React, { useEffect, useState } from 'react';

import config from '@root/config.json';

import "./styles.scss";

import valorantLogo from '@assets/images/valorant.webp';
import successImg from '@assets/images/success.png';
import sovaImg from '@assets/images/sova.jpg';

import Input from '@components/Form/Input';
import DatePicker from '@components/Form/DatePicker';



const Register = () => {
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [eventDate, setEventDate] = useState(null);

    const [isRegistered, setIsRegistered] = useState(false);
    const [isFormValid, setIsFormValid] = useState(false);
    const [isServerError, setIsServerError] = useState(false);
    const [isServerRequestError, setIsServerRequestError] = useState(false);

    const firstNameRegex = /^\w{2,50}$/;
    const lastNameRegex = /^\w{2,100}$/;
    const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // const dateRegex = /^[0-9ZT\-.:]{1,}$/;



    useEffect(() => {
        if (firstName && lastName && email && eventDate) setIsFormValid(true);
        else setIsFormValid(false);
    }, [firstName, lastName, email, eventDate]);

    const registerParticipant = async () => {
        if (!isFormValid) return;

        try {
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
            if (!response.ok) {
                if (response.status === 400) {
                    // internal server error
                    setIsServerRequestError(true);
                } else {
                    setIsServerError(true);
                }
            } else setIsRegistered(true);
        } catch (err) {
            setIsServerError(true);
        }
    }

    return (
        <section className="c-register">
            <div className="register-wrapper">
                <img src={valorantLogo} alt="tournament logo" className="tournament-logo" />
                <h2>Multi-edition tournament</h2>

                {!isRegistered ?
                    <div className="register-form">
                        <h3>Register to edition</h3>
                        {isServerError && <p className="global-error">Something went wrong! Please refresh this page and try again.</p>}
                        {isServerRequestError && <p className="global-error">Entered data is invalid! Please refresh this page and try again.</p>}

                        <div className="horizontal-wrapper">
                            <Input
                                label="First name"
                                id="firstName"
                                type="text"
                                size="small"
                                onChange={setFirstName}
                                regexValidator={firstNameRegex}
                                errorMessage="Invalid first name"
                                required
                            />
                            <Input
                                label="Last name"
                                id="lastName"
                                type="text"
                                size="small"
                                onChange={setLastName}
                                regexValidator={lastNameRegex}
                                errorMessage="Invalid last name"
                                required
                            />
                        </div>

                        <Input
                            label="Email"
                            id="email"
                            type="email"
                            onChange={setEmail}
                            regexValidator={emailRegex}
                            errorMessage="Invalid email address"
                            required
                        />

                        <DatePicker
                            label="Tournament edition date"
                            id="eventDate"
                            onChange={setEventDate}
                            required
                        />

                        <button className={isFormValid ? "button-register" : "button-register disabled"} onClick={registerParticipant}>Register</button>
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