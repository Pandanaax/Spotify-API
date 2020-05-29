const mongoose = require("mongoose");

var Schema = mongoose.Schema;

var playlistSchema = new Schema({
    title: String,
    createur: [
        {
            type: Schema.Types.ObjectId,
            ref : 'User',
        },
    ],
    musique: [
        {
            type: Schema.Types.ObjectId,
            ref : 'Musique',
        },
    ],
    dateCreation: Date,
    UrlPhoto: String,
    tag: [
        {
            type: Schema.Types.ObjectId,
            ref : 'Tag',
        },
    ]
});

module.exports = mongoose.model("PLaylist", playlistSchema);
