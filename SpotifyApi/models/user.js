const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
    nom: String,
    prenom: String,
    email: String,
    motDePasse: String,
    UrlPhotoDeProfil: String, 
    favorisMusique: [
        {
            type: Schema.Types.ObjectId,
            ref : 'Musique',
        },
    ],
    favorisPlaylist: [
        {
            type: Schema.Types.ObjectId,
            ref : 'Playliste',
        },
    ],
    favorisAlbum: [
        {
            type: Schema.Types.ObjectId,
            ref : 'Album',
        },
    ],
    favorisArtiste: [
        {
            type: Schema.Types.ObjectId,
            ref : 'Artiste',
        },
    ]
});


module.exports = mongoose.model("User", userSchema);