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
        .then(dbPizzaData => removeEventListener.json(dbUserData))
        .catch (err => {
            console.log(err);
            res.sendStatus(400);
        });
    },

    //get one user by id
    getUserByID(req. res) {
        User.findone({ _id})
    }



    //create (POST) user

    //update (PUT)user by id

    //delete user by id

    //BONUS: Remove a user's associated thoughts when deleted.

}

module.exports = userController;

   