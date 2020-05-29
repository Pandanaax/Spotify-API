module.exports = (app) => {
    const Tag = app.models.Tag;
    
    function getAll(req, res) {
        Tag.find({}, function (err, docs) {
            if(err){
                console.log(err);
                }else{
                    res.send(docs)
                }
            }); 
        }
    
    function create(req, res) {
        const nouvelleTag = req.body;
        Tag.create(nouvelleTag, function(err, nouvelleTag){
            if(err){
                console.log(err)
            }else{
                res.send(nouvelleTag);
            }
        })
    }

    function getById(req, res) {
        Tag.findById(req.body.id, function (err, docs) {
            if(err){
                console.log(err);
            }else{
                res.send(docs);
            }
        })
      };

    function update(req, res) {
        Tag.updateOne(req.body.id, function(err, docs){
            if(err){
                res.send(err + "une erreur a été produite");
            }else{
                res.send(docs + "le tag a bien été mise à jour");
            }
        });
    }
      
    function delet(req, res) {
        Tag.deleteOne(req.body.id, function(err){
            if(err){
                console.log(err)
            }else{
                res.send("L'élement a bien été supprimé");
            }
        });
    }
    
    
    return { getAll , create, getById, update, delet }; 
};