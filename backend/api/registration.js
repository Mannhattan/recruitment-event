const express = require("express");
const router = express.Router();

const { registerParticipant } = require(__controllers + "/registration.controller");



router.post('/', async (req, res) => {
    try {
        const { firstName, lastName, email, eventDate } = req.body;

        const newRegistration = await registerParticipant(firstName, lastName, email, eventDate);

        res.status(200).json({
            data: {
                registration: newRegistration
            },
            errors: [],
            meta: {
                time: new Date()
            }
        });
    } catch (errors) {
        res.status(errors.includes("ERROR_CREATING_RECORD") ? 500 : 400).json({
            data: {},
            errors: [...errors],
            meta: {
                time: new Date()
            }
        });
    }
});



module.exports = router;