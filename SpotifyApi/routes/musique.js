const router = require("express").Router();

module.exports = (app) => {

    let musique = require("../data.json");

    router.get("/", app.controllers.musique.getAll)
    
    router.post("/create", app.controllers.musique.create);
    
    router.post("/getById", app.controllers.musique.getById);
    
    router.post("/update", app.controllers.musique.update);
    
    router.post("/delete", app.controllers.musique.delet);
    
    router.post("/favorite", app.controllers.musique.favorite);

    router.post("/deletFavorite", app.controllers.musique.deletFavorite);
   
    return router;
  };