module.exports = (app) => {
    const User = app.models.User;
    const jwt = require('jsonwebtoken');
    // var privateKey = fs.readFileSync('private.key');
    // var token =  jwt.sign({ foo: 'bar' }, privateKey, { algorithm: 'RS256'});

    
    function getAll(req, res) {
        User.find({}, function (err, docs) {
            if(err){
                console.log(err);
            }else{
                res.send(docs)
            }
        }); 
    }
    
    function create(req, res) {
        const nouvelleUser = req.body;
        User.create(nouvelleUser, function(err, nouvelleUser){
            if(err){
                console.log(err)
            }else{
                res.send(nouvelleUser);
            }
        })
    }
    
    function getById(req, res) {
        User.findById(req.body.id, function (err, docs) {
            if(err){
                console.log(err);
            }else{
                res.send(docs);
            }
        })
    };
    
    function update(req, res) {
        User.updateOne(req.body.id, function(err, docs){
            if(err){
                res.send(err + "une erreur s\est produite");
            }else{
                res.send(docs + "l\'utilisateur a bien été mise à jour");
            }
        });
    }
    
    function delet(req, res) {
        User.deleteOne(req.body.id, function(err){
            if(err){
                console.log(err)
            }else{
                res.send("L'élement a bien été supprimé");
            }
        });
    }
    
    function connect(req, res) {
        User.findOne({email: req.body.email}, function(err, user) {
            if (err) throw err;
            if (!req.body.email) {
              res.status(401).json({ message: "Impossible de se connecter. Mauvais email." });
            } else if (user) {
              if (!req.body.motDePasse) {
                res.status(401).json({ message: 'Impossible de se connecter. Mauvais mot de passe.' });
              } else {
                return res.json({token: jwt.sign({ email: user.email, id: user.id}, 'Cacher')});
              }
            }
          });
        };
    
    return { getAll , create, getById, update, delet, connect }; 
};

