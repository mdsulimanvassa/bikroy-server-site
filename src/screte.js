require('dotenv').config()
const serverPort = process.env.SERVER_PORT || 4000;
const mongodbURL = process.env.MONGO_DB_URL;
const imageURL = process.env.IMAGE_URL;
const screteJsonWebToken = process.env.JWT_SECRET || eretfddfdfbhsdh23423;
const cookieName = process.env.COOKIE_NAME;

module.exports = {serverPort, mongodbURL, imageURL, screteJsonWebToken, cookieName};