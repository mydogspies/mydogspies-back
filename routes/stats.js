const express = require('express');
const authenticationRequired = require('../middleware/oktaAuthentication');

const {
    getServerStats
} = require('../controller/stats');

const router = express.Router();

router
    .route('/')
    .get(authenticationRequired, getServerStats);

module.exports = router;
