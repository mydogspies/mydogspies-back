const express = require('express');

const {
    createSession
} = require('../controller/sessions');

const router = express.Router();

router
    .route('/')
    .post(createSession);

module.exports = router;
