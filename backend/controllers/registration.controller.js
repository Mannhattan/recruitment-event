const REGISTRATION_MODEL = require(__models + "/registration.model");

const { validateParticipant } = require(__services + "/validator.service");



const registerParticipant = async (firstName, lastName, email, eventDate) => {
    let errors = validateParticipant({ firstName, lastName, email, eventDate });

    if (errors.length > 0) throw errors;

    let parsedDate = new Date(eventDate);
    // for Europe Berlin timezone shift
    parsedDate.setHours(parsedDate.getHours() + 2);

    const registration = new REGISTRATION_MODEL({
        firstName: firstName,
        lastName: lastName,
        email: email,
        eventDate: parsedDate
    });

    try {
        const newRegistration = await registration.save();

        return newRegistration;
    } catch (err) {
        throw "ERROR_CREATING_RECORD";
    }
}



module.exports = { registerParticipant };