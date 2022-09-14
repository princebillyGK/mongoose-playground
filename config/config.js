const mongoose = require("mongoose");

async function setupDB() {
    try {
        await mongoose.connect("mongodb://localhost:27017", {
            dbName: "mflix",
            user: "princebillygk",
            pass: "M8TvzgCbPqkUgnElgYJozA21RAhLBPiPs62tvA67s",
        });
        console.log("Connected to MongoDB");
    } catch (err) {
        console.log(`Failed to connect database: ${err}`);
    }
}

async function mongoExecute(fn) {
    await setupDB();
    await fn();
    await mongoose.disconnect();
}

module.exports = mongoExecute;
