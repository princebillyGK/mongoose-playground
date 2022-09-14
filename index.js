const playGround = require("./playground/playground");
const mongoExecute = require("./config/config");

mongoExecute(playGround).then();
