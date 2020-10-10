const router = require('express').Router();

const {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser
  } = require('../../controllers/user-controller');

//GET all and POST /api/users
router
  .route('/')
  .get(getAllUser)
  .post(createUser);

//GET one, PUT, and DELETE /api/users/:id
router
  .route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

module.exports = router; 