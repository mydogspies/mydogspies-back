const express = require('express');
const authenticationRequired = require('../middleware/oktaAuthentication');

const {
    getServerStatus,
    updateServerStatus
} = require('../controller/status');

const router = express.Router();

router
    .route('/')
    .get(getServerStatus, authenticationRequired)
    .put(updateServerStatus, authenticationRequired);

module.exports = router;
