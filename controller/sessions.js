const asyncHandler = require("../middleware/async");

exports.createSession = asyncHandler(async (req, res) => {
    await Session.createNewSession(res, "test-user", {}, {})
    res.send({
        "message": "New user session created"
    })
});
