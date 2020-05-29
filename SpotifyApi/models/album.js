const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var albumSchema = new Schema({
    title: String,
    artiste: [
        {
            type: Schema.Types.ObjectId,
            ref : 'Artiste',
        },
    ],
    dateCreation: Date,
    UrlPhoto: String,
    tag: [
        {
            type: Schema.Types.ObjectId,
            ref : 'Tag',
        },
    ],
});

module.exports = mongoose.model("Album", albumSchema);