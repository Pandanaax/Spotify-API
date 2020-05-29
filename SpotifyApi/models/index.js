module.exports = (app) => {
    app.models = {
        Musique : require("./musique.js"),
        User: require("./user.js"),
        Album: require("./album.js"),
        Playlist: require("./playlist.js"),
        Artiste: require("./artiste.js"),
        Tag: require("./tag.js"),
    };
}
