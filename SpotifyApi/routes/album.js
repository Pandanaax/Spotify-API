const router = require("express").Router();

module.exports = (app) => {

    let album = require("../album.json");

    router.get("/", app.controllers.album.getAll);
    
    router.post("/create", app.controllers.album.create);
    
    router.post("/getById", app.controllers.album.getById);
    
    router.post("/update", app.controllers.album.update);
    
    router.post("/delete", app.controllers.album.delet);
    
   
    return router;
  };