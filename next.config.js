require("dotenv").config();
module.exports = {
  reactStrictMode: true,
  env: {
    COHERE_API_KEY: process.env.COHERE_API_KEY,
  },
};
