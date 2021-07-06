const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const db = require('../models/');
const ServerStats = db.ServerStats;
const Op = db.Sequelize.Op;


// @desc    Get server status
// @route   GET /api/v1/stats
// @access  Private
exports.getServerStats = asyncHandler(async (req, res, next) => {
    await ServerStats.findAll().then(data=> {
        res.status(200).json({
            success: true,
            serverDate: data[0].dataValues.serverDate
        });
    });
});
