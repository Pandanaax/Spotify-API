const router = require("express").Router();

module.exports = (app) => {

    let musique = require("../playlist.json");

    router.get("/", app.controllers.playlist.getAll);
    
    router.post("/create", app.controllers.playlist.create);
    
    router.post("/getById", app.controllers.playlist.getById);
    
    router.post("/update", app.controllers.playlist.update);
    
    router.post("/delete", app.controllers.playlist.delet);

    router.post("/favorite", app.controllers.playlist.favorite);

    router.post("/deletFavorite", app.controllers.playlist.deletFavorite);
    
   
    return router;
  };

