const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const db = require('../models/');
const SiteStatus = db.SiteStatus;
const Op = db.Sequelize.Op;


// @desc    Get server status
// @route   GET /api/v1/status
// @access  Public
exports.getServerStatus = asyncHandler(async (req, res, next) => {
    await SiteStatus.findAll().then(data=> {
        res.status(200).json({
            success: true,
            online: data[0].dataValues.online
        });
    });
});

// @desc    Update server status
// @route   PUT /api/v1/status
// @access  Private
exports.updateServerStatus = asyncHandler(async (req, res, next) => {
    const status = await SiteStatus.update(
        { online: req.body.online},
        {where: { id: 1 } }
    );res.status(200).json({
        success: true,
    });

});
