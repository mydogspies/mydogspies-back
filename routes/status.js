const express = require('express');
const authenticationRequired = require('../middleware/oktaAuthentication');

const {
    getServerStatus,
    updateServerStatus
} = require('../controller/status');

const router = express.Router();

router
    .route('/')
    .get(authenticationRequired, getServerStatus)
    .put(updateServerStatus);

module.exports = router;
