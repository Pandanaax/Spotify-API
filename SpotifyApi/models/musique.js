const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var musiqueSchema = new Schema({
    title: String,
    duration: Number,
    date: Date,
    artistes: [
        {
            type: Schema.Types.ObjectId,
            ref : 'Artiste',
        },
    ],
    urlMusique: String,
    tag: [
        {
            type: Schema.Types.ObjectId,
            ref : 'Tag',
        },
    ]
});


module.exports = mongoose.model("Musique", musiqueSchema);

