// ERROR HANDLER - bringbackdada
// github.com/mydogspies/

const ErrorResponse = require('../utils/errorResponse')
const errorHandler = (err, req, res, next) => {

    let error = { ...err};
    error.message = err.message;

    console.log(err);

    res.status(error.statusCode || 500).json({
        success: false,
        error: error.message || 'Server error'
    });
}

module.exports = errorHandler;
