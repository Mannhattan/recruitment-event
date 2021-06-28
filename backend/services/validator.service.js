const validateParticipant = (participantObject) => {
    let errors = [];

    let firstNameRegex = /^\w{2,50}$/;
    let lastNameRegex = /^\w{2,100}$/;
    let emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let dateRegex = /^[0-9ZT\-.:]{1,}$/;

    if (!participantObject.firstName || !firstNameRegex.test(participantObject.firstName)) errors.push("INVALID_FIRST_NAME");
    if (!participantObject.lastName || !lastNameRegex.test(participantObject.lastName)) errors.push("INVALID_LAST_NAME");
    if (!participantObject.email || !emailRegex.test(participantObject.email)) errors.push("INVALID_EMAIL");
    if (!participantObject.eventDate || !dateRegex.test(participantObject.eventDate)) errors.push("INVALID_DATE");

    return errors;
}



module.exports = { validateParticipant };