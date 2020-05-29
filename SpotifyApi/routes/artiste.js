const router = require("express").Router();

module.exports = (app) => {

    let artiste = require("../artiste.json");

    router.get("/", app.controllers.artiste.getAll);
    
    router.post("/create", app.controllers.artiste.create);
    
    router.post("/getById", app.controllers.artiste.getById);
    
    router.post("/update", app.controllers.artiste.update);
    
    router.post("/delete", app.controllers.artiste.delet);
    
   
    return router;
  };