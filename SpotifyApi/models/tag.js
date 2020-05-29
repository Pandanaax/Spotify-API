const mongoose = require("mongoose");

var Schema = mongoose.Schema;

var tagSchema = new Schema({
    libelle: String
    
});



module.exports = mongoose.model("Tag", tagSchema);

