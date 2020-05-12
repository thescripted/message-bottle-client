import mongoose from "mongoose";
const dotenv = require('dotenv').config();

const dbURL = process.env.DB_URL
const dbOptions = {
    useNewUrlParser: true,
    useFindAndModify: false
}

mongoose.connect(dbURL, dbOptions);
const db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB Connection Error:'))
export default db;