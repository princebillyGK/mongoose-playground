const { playGroundV1, playGroundV2 } = require("./playground");
const mongoExecute = require("../config/config");

test("populate", async () => {
    await mongoExecute(playGroundV1);
});

test("aggregate", async () => {
    await mongoExecute(playGroundV2);
});
