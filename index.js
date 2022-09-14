const mongoose = require("mongoose");
const playGround = require("./playground/playground");

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

setupDB().then(async () => {
    await playGround();
    await mongoose.disconnect();
});
