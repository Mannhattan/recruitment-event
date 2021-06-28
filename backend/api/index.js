const express = require("express");
const router = express.Router();



// very simple API access key check, it won't protect against a 5 minutes lookaround in devtools network tab
router.use((req, res, next) => {
    if (req.body.accessKey == process.env.BACKEND_ACCESS_KEY) {
        next();
    } else {
        res.status(401).json({
            data: {},
            errors: ["UNAUTHORIZED"],
            meta: {
                time: new Date()
            }
        });
    }
});



router.use('/event', require('./event'));
router.use('/registration', require('./registration'));

module.exports = router;