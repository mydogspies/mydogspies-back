const asyncHandler = require("../middleware/async");
let Session = require("supertokens-node/recipe/session");


exports.createSession = asyncHandler(async (req, res) => {
    await Session.createNewSession(res, "test-user", {}, {})
    res.send({
        "message": "New user session created"
    })
});
