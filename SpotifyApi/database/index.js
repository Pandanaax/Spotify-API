const mongoose = require("mongoose");
module.exports = (app) => {
    mongoose.connect(
        "mongodb://localhost:27017/spotify",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        },
        (err) => {
            if(err) {
                console.errors(err);
            }else {
                console.log("connexion à la base de données reussi ");
            }
        }
    );
};