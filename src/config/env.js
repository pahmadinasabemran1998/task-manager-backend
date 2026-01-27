const dotenv = require("dotenv");

dotenv.config();

const env = {
    port: process.env.PORT,
    nodeEnv: process.env.NODE_ENV,
};

module.exports = env;