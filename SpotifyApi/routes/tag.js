const router = require("express").Router();

module.exports = (app) => {

    let tag = require("../tag.json");

    router.get("/", app.controllers.tag.getAll)
    
    router.post("/create", app.controllers.tag.create);
    
    router.post("/getById", app.controllers.tag.getById);
    
    router.post("/update", app.controllers.tag.update);
    
    router.post("/delete", app.controllers.tag.delet);

    
   
    return router;
  };