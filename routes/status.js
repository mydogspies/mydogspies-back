const express = require('express');

const {
    getServerStatus
} = require('../controller/status');

const router = express.Router();

router
    .route('/')
    .get(getServerStatus);

module.exports = router;
