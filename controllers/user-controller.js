const { User } = require ('../models');

const userController = {
    //get all user
    getAllUser(req, res) {
        User.find({})
        .populate({
            path: 'thoughts',
            select: '-__v'
        })
        .select('-__v')
        .sort({ _id:-1})
        .then(dbUserData => removeEventListener.json(dbUserData))
        .catch (err => {
            console.log(err);
            res.sendStatus(400);
        });
    },

    //get one user by id
    getUserById({ params }, res) {
        User.findOne({ _id: params.id })
          .populate({
            path: 'thought',
            select: '-__v'
          })
          .select('-__v')
          .then(dbUserData => res.json(dbUserData))
          .catch(err => {
            console.log(err);
            res.sendStatus(400);
          });
      },


    //create (POST) user
    createUser({ body }, res) {
        User.create(body)
          .then(dbUserData => res.json(dbUserData))
          .catch(err => res.json(err));
      },


    //update (PUT)user by id
    updateUser({ params, body }, res) {
        User.findOneAndUpdate({ _id: params.id }, body, { new: true })
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
    deleteUser({ params }, res) {
        User.findOneAndDelete({ _id: params.id })
          .then(dbUserData => res.json(dbUserData))
          .catch(err => res.json(err));
      }


    //BONUS: Remove a user's associated thoughts when deleted.




}

module.exports = userController;

   