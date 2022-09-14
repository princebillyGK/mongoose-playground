const Movie = require("../models/movie");
const User = require("../models/user");
const Comment = require("../models/comment");

module.exports = async function playGround() {
    const movies = await Movie.find(null, null, { limit: 2, lean: true });
    const comments = await Comment.find(null, null, { limit: 2, lean: true });
    const users = await User.find(null, null, { limit: 2, lean: true });
    console.log(movies);
    console.log(comments);
    console.log(users);
};
