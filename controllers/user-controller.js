'use strict'

const models = require('../models')
const transformData = require('../utils/prepare-data')

/* 
* Get all user
*/
const getList = (req, res)=> {

    models.User.findAll().then(result => {
        res.status(200).json(result)
      }).catch( error => {
        res.status(400).json({
            message: "Invalid Request",
            result: 0
        })
    })
}

/* 
* Get user data by using id 
*/
const getUserByID = (req, res)=> {

    models.User.findByPk(Number(req.params.id)).then(result => {
        let message = (result=== null) ? "No data found" : "Success";
        res.status(200).json({
            message: message,
            result: result
        })
      }).catch( error => {
          res.status(400).json({
              message: "Invalid ID Request",
              result: 0
          })
      })
}


/* 
* Add new user
*/
const addUser = (req, res) => {

    const user = transformData(req)

    models.User.create(user).then(result => {
        res.status(200).json({
            message: "User added successfully",
            result: result
        });
    }).catch(error =>{
        res.status(400).json({
            message: "Invalid Request",
            result: error.errors[0].message
        })
    })
}


/* 
* Update existing user
*/
const updateUser = (req, res) => {

    const user = transformData(req)

    models.User.update(user, {where: {id:Number(req.params.id)}})
    .then( result => {
        let message = (result[0] === 0) ? "ID not found" : "User updated successfully";
        res.status(200).json({
            message: message,
            result: result
        })
    }).catch( error => {
        res.status(400).json({
            message: "Invalid Request",
            result: error
        })
    })

}

/* 
* Delete user by ID
*/
const deleteUser = (req, res) => {

        models.User.destroy({where:{id: Number(req.params.id)}})
        .then(result => {
            let message = (result === 0) ? "ID not found" : "User deleted successfully";
            res.status(200).json({
                message: message,
                result: result
            })
        }).catch(error => {
            res.status(400).json({
                message: "Invalid Request",
                result: error
            })
        })

}

/* 
* Delete multiple user using ID's
*/
const deleteMultipleUser = (req, res) => {

    models.User.destroy({where:{id: req.query.id.split(',').map(Number)}})
        .then(result => {
            let message = (result === 0) ? "ID's not found" : "Multiple user deleted successfully";
            res.status(200).json({
                message: message,
                result: result
            })
        }).catch(error => {
            res.status(400).json({
                message: "Invalid Request",
                result: error
            })
        })

}

module.exports = {
    getList,
    addUser,
    getUserByID,
    updateUser,
    deleteUser,
    deleteMultipleUser,
}