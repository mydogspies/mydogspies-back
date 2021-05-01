const express = require('express');

const {
    getServerStatus,
    updateServerStatus
} = require('../controller/status');

const router = express.Router();

router
    .route('/')
    .get(getServerStatus)
    .put(updateServerStatus);

module.exports = router;
