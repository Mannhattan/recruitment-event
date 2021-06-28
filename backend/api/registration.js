const express = require("express");
const router = express.Router();

const { registerParticipant } = require(__controllers + "/registration.controller");



router.post('/', async (req, res) => {
    try {
        const { firstName, lastName, email, eventDate } = req.body;

        const newRegistration = await registerParticipant(firstName, lastName, email, eventDate);

        res.json({
            data: {
                registration: newRegistration
            },
            errors: [],
            meta: {
                time: new Date()
            }
        });
    } catch (errors) {
        res.json({
            data: {},
            errors: [...errors],
            meta: {
                time: new Date()
            }
        });
    }
});



module.exports = router;