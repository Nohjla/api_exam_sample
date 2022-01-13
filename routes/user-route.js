const express = require('express')
const checkPassword = require('../middleware/user-middleware')
const {getList, addUser, getUserByID, updateUser, deleteUser, deleteMultipleUser} = require('../controllers/user-controller')

const router = express.Router()

router.route('/').get(getList).post(checkPassword, addUser).delete(deleteMultipleUser)
router.route('/:id').get(getUserByID).patch(checkPassword, updateUser).delete(deleteUser)

module.exports = router
