

module.exports = (app) => {
    app.get('/',(req,res) => {
        res.send("hello word");
    })
    
    app.use("/musique", require("./musique")(app));

    app.use("/user", require("./user")(app));

    app.use("/album", require("./album")(app));
    
    app.use("/playlist", require("./playlist")(app));

    app.use("/artiste", require("./artiste")(app));

    app.use("/tag", require("./tag")(app));
};

