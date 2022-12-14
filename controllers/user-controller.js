const { User, Thought } = require('../models');

const userController = {
  //create (POST) user
  createUser({ body }, res) {
    User.create(body)
      .then(dbUserData => res.json(dbUserData))
      .catch(err => res.json(err));
  },


  //get all user
  getAllUser(req, res) {
    User.find()
      .select('-__v')
      .sort({ _id: -1 })
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
        console.log(err);
        res.sendStatus(400);
      });
  },

  //get one user by id
  getUserById({ params }, res) {
    User.findOne({ _id: params.id })
      .populate('thoughtText')// connected to user model thoughts ln21
      .populate('friends')
      .select('-__v')
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
        console.log(err);
        res.sendStatus(400);
      });
  },


  //update (PUT)user by id
  updateUser({ params, body }, res) {
    User.findOneAndUpdate({ _id: params.id }, { $set: body }, { new: true })
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No user found with this id!' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => res.json(err));
  },


  //delete user by id
  //BONUS: Remove a user's associated thoughts when deleted.
  deleteUser({ params }, res) {
    User.findOneAndDelete({ _id: params.id })
      .then(dbUserData => {
        return Thought.deleteMany({
          _id: { $in: dbUserData.thoughts }
        })

      })
      .then(() => {
        res.json({ message: 'The user and thoughts were deleted' })
      })
      .catch(err => res.json(err));
  },

  //add friend
  addFriend({ params, body }, res) {
    User.findOneAndUpdate(
      { _id: params.userId },
      { $addToSet: { friends: params.friendId } },
      { new: true })
      .then(dbUserData => res.json(dbUserData))
      .catch(err => res.json(err));
  },

  //delete friend
  deleteFriend({ params, body }, res) {
    User.findOneAndUpdate(
      { _id: params.userId },
      { $pull: { friends: params.friendId } },
      { new: true })
      .then(dbUserData => res.json(dbUserData))
      .catch(err => res.json(err));
  },


}

module.exports = userController;

