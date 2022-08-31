const { Thought, User } = require ('../models');

const thoughtController = {
// GET to get all thoughts
getAllThought(req, res) {
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

// GET to get a single thought by its _id
getPizzaById({ params }, res) {
    Pizza.findOne({ _id: params.id })
      .populate({
        path: 'comments',
        select: '-__v'
      })
      .select('-__v')
      .then(dbPizzaData => res.json(dbPizzaData))
      .catch(err => {
        console.log(err);
        res.sendStatus(400);
      });
  },

// POST to create a new thought (don't forget to push the created thought's _id to the associated user's thoughts array field)

createPizza({ body }, res) {
    Pizza.create(body)
      .then(dbPizzaData => res.json(dbPizzaData))
      .catch(err => res.json(err));
  },



}

