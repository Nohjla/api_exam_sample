'use strict'

const bcrypt = require('bcrypt')

/* 
* Check the password and encrypt using bcrypt method
*/
const checkPassword = (req, res, next) => {

    if(!req.body.password || req.body.password !== '') {
        req.body.password = bcrypt.hashSync(req.body.password, 12)
        next()
    } else {
        res.status(400).send('Password is empty')
    }
    
}

module.exports = checkPassword