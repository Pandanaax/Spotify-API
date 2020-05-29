module.exports = (app) => {
    app.controllers = {
        musique : require("./musique")(app),
        user: require("./user")(app),
        album: require("./album")(app),
        playlist: require("./playlist")(app),
        artiste: require("./artiste")(app),
        tag: require("./tag")(app)
    };
}