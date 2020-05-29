module.exports = (app) => {
    const Playlist = app.models.Playlist;
    
    function getAll(req, res) {
        Playlist.find({}, function (err, docs) {
            if(err){
                console.log(err);
                }else{
                    res.send(docs)
                }
            }); 
        }
        
    function create(req, res) {
        const nouvellePlaylist = req.body;
        Playlist.create(nouvellePlaylist, function(err, nouvellePlaylist){
            if(err){
                console.log(err)
            }else{
                res.send(nouvellePlaylist);
            }
        })
    }
    
    function getById(req, res) {
        Playlist.findById(req.body.id, function (err, docs) {
            if(err){
                console.log(err);
            }else{
                res.send(docs);
            }
        })
      };

    function update(req, res) {
        Playlist.updateOne(req.body.id, function(err, docs){
            if(err){
                res.send(err + "une erreur a été produite");
            }else{
                res.send(docs + "la playlist a bien été mise à jour");
            }
        });
    }
      
    function delet(req, res) {
        Playlist.deleteOne(req.body.id, function(err){
            if(err){
                console.log(err)
            }else{
                res.send("L'élement a bien été supprimé");
            }
        });
    }
    
    function favorite(req,res) {
        res.send("La playlist " + req.body.id + " à été mise en favorie")
    }
    function deletFavorite(req,res) {
        res.send("La playlist " + req.body.id + " à été retiré des favories")
    }
    

    return { getAll , create, getById, update, delet, favorite, deletFavorite }; 
};

