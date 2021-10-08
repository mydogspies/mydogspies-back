const express = require('express');

const {
    setSession
} = require('../controller/sessions');

const router = express.Router();

router
    .route('/create-session')
    .post(setSession);

module.exports = router;
