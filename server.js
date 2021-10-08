const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');
// const errorHandler = require('./middleware/error');
const db = require('./models');
const helmet = require('helmet');

let supertokens = require("supertokens-node");
let Session = require("supertokens-node/recipe/session");
let {middleware} = require("supertokens-node/framework/express");
let {errorHandler} = require("supertokens-node/framework/express");

supertokens.init({
    framework: "express",
    supertokens: {
        // These are the connection details of the app you created on supertokens.io
        connectionURI: "https://a5b0b8c1285b11ecb62d0bb2c7f955a0-eu-west-1.aws.supertokens.io:3571",
        apiKey: "UcNIFhqAmpVZenZ4BpZN9anl8uoD=P",
    },
    appInfo: {
        // learn more about this on https://supertokens.io/docs/session/appinfo
        appName: "Mydogspies",
        apiDomain: "https://api.mydogspies.com",
        websiteDomain: "https://mydogspies.com"
    },
    recipeList: [
        Session.init()
    ]
});

// test stuff 1234

// load env vars
dotenv.config({path: './config/config.env'});

// connect to db
db.sequelize.sync();

// import the routes
const status = require('./routes/status');
const sessions = require('./routes/sessions');

// define express app
const app = express();

// cors
app.use(cors({
    origin: "http://localhost:3007",
    allowedHeaders: ["content-type", ...supertokens.getAllCORSHeaders()],
    credentials: true,
}));

// supertokens
app.use(middleware());

// helmet
app.use(helmet());

// define body parser
app.use(express.json());

// http logging during development
app.use(morgan('short'));

// mount routers
app.use('/api/v1/status', status);
app.use('api/v1/create-session', sessions);

// supertokens error handler
app.use(errorHandler);

// server start
const PORT = process.env.PORT || 5011;
const server = app.listen(
    PORT,
    () => console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.blue.bold) // TODO refactor out console.log
);

// handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`.red); // TODO refactor out console.log
    // close server and exit
    server.close(() => process.exit(1));
});
