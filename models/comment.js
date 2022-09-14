const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
    name: {
        type: String,
        ref: "User",
        require: true,
    },
    email: {
        type: String,
        required: true,
    },
    movie_id: {
        type: mongoose.Types.ObjectId,
        ref: "Movie",
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
    date: { type: Date },
});

module.exports = mongoose.model("Comment", commentSchema);
