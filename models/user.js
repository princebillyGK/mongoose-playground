const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        required: true,
        alias: "username",
        immutable: true,
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
});

/**
 * Saves password into database
 */
userSchema.pre("save", async function (next) {
    if (this.password == undefined) {
        return next();
    }
    this.password = await bcrypt.hash(this.password, 10);
});

/**
 * Returns true if the password is correct
 *
 * @async
 * @param {String} password - User input password
 * @returns {Promise<true>} true if password is matched otherwise false
 */
userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

userSchema.virtual("comments", {
    ref: "Comment",
    localField: "_id",
    foreignField: "name",
});

module.exports = mongoose.model("User", userSchema);
