'use strict'

const data = (req) => {
    return {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        address: req.body.address,
        postcode: req.body.postcode,
        contactNumber: req.body.contactNumber,
        email: req.body.email,
        userName: req.body.userName,
        password:  req.body.password
    }
}

module.exports = data