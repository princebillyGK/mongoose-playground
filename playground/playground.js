const Movie = require("../models/movie");
const User = require("../models/user");
const Comment = require("../models/comment");
const util = require("util");

async function playGroundV1() {
    const users = await User.populate("comments");
    console.log(users);
    console.log(
        util.inspect(users, {
            depth: 100,
            colors: true,
        })
    );
}

async function playGroundV2() {
    const users = await User.aggregate([
        {
            $lookup: {
                from: "comments",
                localField: "name",
                foreignField: "name",
                as: "comments",
            },
            $match: {
                text: { $contains: "amet" },
            },
        },
    ]);
    console.log(users);
    console.log(
        util.inspect(users, {
            depth: 100,
            colors: true,
        })
    );
}

module.exports = { playGroundV1, playGroundV2 };
