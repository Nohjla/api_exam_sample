const express = require('express')
const app = express()
const userRoute = require('./routes/user-route')

/* 
* parse form data
*/
app.use(express.urlencoded({extended: false}))

/* 
* parse json data
*/
app.use(express.json())

/* 
* Pass routes to use method
*/
app.use('/api/v1/user', userRoute)

/* 
* Server listening on port 5000
*/
app.listen(5000, () => {
    console.log('Server listening on port 5000')
})

module.exports = app