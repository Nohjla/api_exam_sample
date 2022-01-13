'use strict'
const generate = require('chance').Chance()
const bcrypt = require('bcrypt')

const userData = []
for (let i=0; i<10; i++) {
    userData.push({
        firstName: generate.first(),
        lastName: generate.last(),
        address: generate.address(),
        postcode: generate.postcode(),
        contactNumber: generate.phone(),
        email: generate.email(),
        userName: generate.string({ length: 5 }),
        password:  bcrypt.hashSync('password', 12)

    })
}
console.log(userData)
module.exports = {userData}