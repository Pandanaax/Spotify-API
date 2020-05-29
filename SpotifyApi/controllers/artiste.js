module.exports = (app) => {
    const Artiste = app.models.Artiste;
    
    function getAll(req, res) {
        Artiste.find({}, function (err, docs) {
            if(err){
                console.log(err);
                }else{
                    res.send(docs)
                }
            }); 
        }
    
    function create(req, res) {
        const nouvelleArtiste = req.body;
        Artiste.create(nouvelleArtiste, function(err, nouvelleArtiste){
            if(err){
                console.log(err)
            }else{
                res.send(nouvelleArtiste);
            }
        })
    }

    function getById(req, res) {
        Artiste.findById(req.body.id, function (err, docs) {
            if(err){
                console.log(err);
            }else{
                res.send(docs);
            }
        })
      };

    function update(req, res) {
        Artiste.updateOne(req.body.id, function(err, docs){
            if(err){
                res.send(err + "une erreur a été produite");
            }else{
                res.send(docs + "l'artiste a bien été mise à jour");
            }
        });
    }
      
    function delet(req, res) {
        Artiste.deleteOne(req.body.id, function(err){
            if(err){
                console.log(err)
            }else{
                res.send("L'élement a bien été supprimé");
            }
        });
    }
    
    
    return { getAll , create, getById, update, delet }; 
};