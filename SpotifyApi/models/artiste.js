const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var artisteSchema = new Schema({
    nom: String,
    prenom: String,
    label: String,
    tag:[
        {
            type: Schema.Types.ObjectId,
            ref : 'Tag',
        },
    ]
});


module.exports = mongoose.model("Artiste", artisteSchema);