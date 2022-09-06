const router = require('express').Router();

const {
  getAllUser,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend
} = require('../../controllers/User-controller');

// /api/User
router
  .route('/')
  .get(getAllUser)
  .post(createUser);

// /api/User/:id
router
  .route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

// /api/users/:userId/friends/:friendId
router
  .route('/:userId/friends/:friendId')
  // POST to add a new friend to a user's friend list
  .post(addFriend)
  // DELETE to remove a friend from a user's friend list
  .delete(deleteFriend)

module.exports = router;







