const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    plot: {
        type: String,
    },
    genres: {
        type: [String],
    },
    runtime: {
        type: Number,
    },
    cast: {
        type: [String],
    },
    num_mflix_comments: {
        type: Number,
    },
    title: {
        type: String,
        required: true,
    },
    fullplot: {
        type: String,
    },
    countries: {
        type: [String],
    },
    released: {
        type: Date,
    },
    directors: {
        type: [String],
    },
    rated: {
        type: String,
    },
    awards: {
        wins: { type: Number },
        nominations: { type: Number },
        text: { type: String },
    },
    lastupdated: { type: Date },
    year: { type: Number },
    imdb: {
        rating: { type: Number },
        votes: { type: Number },
        id: { type: Number },
    },
    type: { type: String },
    tomatoes: { lastUpdated: { type: Date } },
});

movieSchema.virtual("comments", {
    ref: "Comment",
    localField: "_id",
    foreignField: "movie_id",
});

module.exports = mongoose.model("Movie", movieSchema);
