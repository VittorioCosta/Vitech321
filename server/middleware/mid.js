
const jwt = require('../middleware/jwt');


// MIDDLEWARE CHE VERIFICA SE SIAMO AUTENTICATI
const checkAuth = (req, res, next)=> {

    
    try {

        if(req.headers['authorization'] == null) {

            res.sendStatus(401)

        }else {
    
            let token = req.headers['authorization'];

            token = token.slice(7, token.length)
            
            jwt.checktoken(token)
            
            next()
        }
           
    }catch(err) {
        
        console.log(err.message);
        res.sendStatus(401)
    }
};

module.exports = {
    
    checkAuth
}