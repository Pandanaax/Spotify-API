module.exports = (app) => {
    const Musique = app.models.Musique;
    
    function getAll(req, res) {
        Musique.find({}, function (err, docs) {
            if(err){
                console.log(err);
                }else{
                    res.send(docs)
            }
        }); 
    }
    
    function create(req, res) {
        const nouvelleMusique = req.body;
        // res.send(nouvelleMusique);
        Musique.create(nouvelleMusique, function(err, nouvelleMusique){
            if(err){
                console.log(err)
            }else{
                res.send(nouvelleMusique);
            }
        })
    }
    
    function getById(req, res) {
        Musique.findById(req.body.id, function (err, docs) {
            if(err){
                console.log(err);
            }else{
                res.send(docs);
            }
        })
      };

    function update(req, res) {
        Musique.updateOne(req.body.id, function(err, docs){
            if(err){
                res.send(err + "une erreur a été produite");
            }else{
                res.send(docs + "la musique a bien été mise à jour");
            }
        });
    }
      
    function delet(req, res) {
        Musique.deleteOne(req.body.id, function(err){
            if(err){
                console.log(err)
            }else{
                res.send("L'élement a bien été supprimé");
            }
        });
    }
    
    function favorite(req,res) {
        res.send("La musique " + req.body.id + " à été mise en favorie")
    }

    function deletFavorite(req,res) {
        res.send("La musique " + req.body.id + " à été retiré des favories")
    }
    
    return { getAll , create, getById, update, delet, favorite, deletFavorite }; 
};

