const express = require("express");
const router = express.Router();



router.get('/', async (req, res) => {
    // sample dates provided for "event editions"
    res.json({
        data: {
            availableDates: [
                new Date(2021, 5, 1),
                new Date(2021, 5, 8),
                new Date(2021, 5, 15),
                new Date(2021, 5, 22),
                new Date(2021, 5, 29),
                new Date(2021, 6, 6),
                new Date(2021, 6, 13),
                new Date(2021, 6, 20),
                new Date(2021, 6, 27),
                new Date(2021, 5, 4),
                new Date(2021, 5, 11),
                new Date(2021, 5, 18),
                new Date(2021, 5, 25),
                new Date(2021, 6, 2),
                new Date(2021, 6, 9),
                new Date(2021, 6, 16),
                new Date(2021, 6, 23),
                new Date(2021, 6, 30),
            ]
        },
        errors: [],
        meta: {
            time: new Date()
        }
    });
});



module.exports = router;