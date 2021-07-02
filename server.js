const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');
const errorHandler = require('./middleware/error');
const db = require('./models');

// test stuff 12345

// load env vars
dotenv.config({path: './config/config.env'});

// connect to db
db.sequelize.sync();

// import the routes
const status = require('./routes/status');

// define express app
const app = express();

// cors
let corsOptions = null;
if (process.env.NODE_ENV === 'production') {
    console.log("Server cors mode set!".blue)
    const corsOptions = {
        origin: 'http://10.110.0.3',
        optionsSuccessStatus: 200
    };
}
app.use(cors(corsOptions));

// define body parser
app.use(express.json());

// http logging during development
app.use(morgan('short'));

// mount routers
app.use('/api/v1/status', status);

// error handler
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
