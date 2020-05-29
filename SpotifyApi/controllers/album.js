module.exports = (app) => {
    
    const Album = app.models.Album;
    
    function getAll(req, res) {
        Album.find({}, function (err, docs) {
            if(err){
                console.log(err);
                }else{
                    res.send(docs)
                }
            }); 
        }
    
    function create(req, res) {
        const nouvelleAlbum = req.body;
        Album.create(nouvelleAlbum, function(err, nouvelleAlbum){
            if(err){
                console.log(err)
            }else{
                res.send(nouvelleAlbum);
            }
        })
    }
    
    function getById(req, res) {
        Album.findById(req.body.id, function (err, docs) {
            if(err){
                console.log(err);
            }else{
                res.send(docs);
            }
        })
      };

    function update(req, res) {
        Album.updateOne(req.body.id, function(err, docs){
            if(err){
                res.send(err + "une erreur a été produite");
            }else{
                res.send(docs + "l'abum a bien été mise à jour");
            }
        });
    }
      
    function delet(req, res) {
        Album.deleteOne(req.body.id, function(err){
            if(err){
                console.log(err)
            }else{
                res.send("L'élement a bien été supprimé");
            }
        });
    }
    
    
    return { getAll , create, getById, update, delet }; 
};

