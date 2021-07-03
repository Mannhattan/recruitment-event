import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';

import Calendar from 'react-calendar';

import Store from '@components/Store';

import './styles.scss';



const DatePicker = ({ label, id, onChange, required = false }) => {
    const store = useContext(Store);

    const [selectedDate, setSelectedDate] = useState("");
    const [isCalendarOpened, setIsCalendarOpened] = useState(false);

    const onCalendarChange = (value) => {
        setSelectedDate(value);
        onChange(value);
        setIsCalendarOpened(false);
    }

    const tileDisabled = ({ date, view }) => {
        if (view === 'month') {
            return !store.availableDates.find(item => { return new Date(item).getTime() == date.getTime() });
        }
    }

    return (
        <div className={`form-datepicker-wrapper`}>
            <label htmlFor={id}>{label} {required && <span>*</span>}</label>

            <div className="input-wrapper">
                <input type="text" name={id} id={id} readOnly onClick={() => setIsCalendarOpened(!isCalendarOpened)} value={selectedDate != "" ? selectedDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : ""} />
                <button className="button-dp-opener" onClick={() => setIsCalendarOpened(!isCalendarOpened)}>
                    <svg className="svg-inline--fa fa-calendar-alt fa-w-14" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="calendar-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M400 64h-48V12c0-6.6-5.4-12-12-12h-8c-6.6 0-12 5.4-12 12v52H128V12c0-6.6-5.4-12-12-12h-8c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM48 96h352c8.8 0 16 7.2 16 16v48H32v-48c0-8.8 7.2-16 16-16zm352 384H48c-8.8 0-16-7.2-16-16V192h384v272c0 8.8-7.2 16-16 16zM148 320h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm96 0h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm96 0h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm-96 96h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm-96 0h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm192 0h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12z"></path></svg>
                </button>

                {isCalendarOpened && <Calendar
                    onChange={onCalendarChange}
                    locale="en-US"
                    maxDetail="month"
                    minDetail="month"
                    tileDisabled={tileDisabled}
                    prev2Label={null}
                    next2Label={null}
                    navigationLabel={({ date, label, locale, view }) => `${date.toLocaleString('en-us', { month: 'long' })}`}
                />}
            </div>
        </div>
    )
};

DatePicker.propTypes = {
    label: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    required: PropTypes.bool
};



export default DatePicker;