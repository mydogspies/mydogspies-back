const express = require('express');

const {
    setSession
} = require('../controller/sessions');

const router = express.Router();

router
    .route('/')
    .post(setSession);

module.exports = router;
