const jwt = require('jsonwebtoken');
const fs = require('fs')  

// metodo per leggere il payload

options = {

    algorithm: 'RS256',
    expiresIn: '7200s'
}

const getPayload = (token)=> {

    let decoded = jwt.decode(token, {compile:true}) 

    return decoded
}

const setToken = (id,email) => {

    const payaload = {id: id, email: email}
    const privateKey = fs.readFileSync(__dirname + '/rsa.key')
    const token = jwt.sign(payaload, privateKey, options)

    return token
}

const checktoken = (token)=> {

    const publicKey = fs.readFileSync(__dirname + '/rsa.pem')

    jwt.verify(token, publicKey,)   
                                    
};

module.exports = {

    setToken,
    getPayload,
    checktoken
}