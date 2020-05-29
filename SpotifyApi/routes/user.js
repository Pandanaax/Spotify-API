const router = require("express").Router();

module.exports = (app) => {

    let user = require("../user.json");

    router.get("/", app.controllers.user.getAll)
    
    router.post("/create", app.controllers.user.create);
    
    router.post("/getById", app.controllers.user.getById);
    
    router.post("/update", app.controllers.user.update);
    
    router.post("/delete", app.controllers.user.delet);

    router.post("/connect", app.controllers.user.connect);
    
   
    return router;
  };