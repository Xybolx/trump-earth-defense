const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const scoresSchema = new Schema({
    initials: {
        type: String,
        maxlength: [3, "Initials must be no more than 3 characters"],
        minlength: [2, "Initials must be at least 2 characters"]
    },

    score: {
        type: Number
    },

    date: {
        type: Date,
        default: Date.now,
        index: {
            unique: true
        }
    }

});

const Scores = mongoose.model("Scores", scoresSchema);

module.exports = Scores;
