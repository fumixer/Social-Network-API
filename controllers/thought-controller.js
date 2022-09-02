const { Thought, User } = require('../models');

const thoughtController = {

   // POST to create a new thought (don't forget to push the created thought's _id to the associated user's thoughts array field)

   createThought({ body }, res) {
    Thought.create(body)
      .then(dbPizzaData => res.json(dbPizzaData))
      .catch(err => res.json(err));
  },

  // GET to get all thoughts
  getAllThought(req, res) {
    User.find({})
      .populate({
        path: 'thoughts',
        select: '-__v'
      })
      .select('-__v')
      .sort({ _id: -1 })
      .then(dbPizzaData => removeEventListener.json(dbUserData))
      .catch(err => {
        console.log(err);
        res.sendStatus(400);
      });
  },

  // GET to get a single thought by its _id
  getThoughtsById({ params }, res) {
    Thought.findOne({ _id: params.id })
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
// Update a current thought by ID
updateThought({params, body}, res) {
  Thought.findOneAndUpdate({_id: params.id}, body, {new: true, runValidators: true})
  .populate({path: 'reactions', select: '-__v'})
  .select('-___v')
  .then(dbThoughtsData => {
      if (!dbThoughtsData) {
          res.status(404).json({message: 'No thoughts with this particular ID!'});
          return;
      }
          res.json(dbThoughtsData);
  })
  .catch(err => res.json(err));
},

// Delete a current thought by ID
deleteThought({params}, res) {
  Thought.findOneAndDelete({_id: params.id})
  .then(dbThoughtsData => {
      if (!dbThoughtsData) {
          res.status(404).json({message: 'No thoughts with this particular ID!'});
          return;
      }
      res.json(dbThoughtsData);
      })
      .catch(err => res.status(400).json(err));
},

// Add a new Reaction
addReaction({params, body}, res) {
  Thought.findOneAndUpdate({_id: params.thoughtId}, {$push: {reactions: body}}, {new: true, runValidators: true})
  .populate({path: 'reactions', select: '-__v'})
  .select('-__v')
  .then(dbThoughtsData => {
  if (!dbThoughtsData) {
      res.status(404).json({message: 'No thoughts with this particular ID!'});
      return;
  }
  res.json(dbThoughtsData);
  })
  .catch(err => res.status(400).json(err))

},

// Delete a reaction by ID
deleteReaction({params}, res) {
  Thought.findOneAndUpdate({_id: params.thoughtId}, {$pull: {reactions: {reactionId: params.reactionId}}}, {new : true})
  .then(dbThoughtsData => {
      if (!dbThoughtsData) {
          res.status(404).json({message: 'No thoughts with this particular ID!'});
          return;
      }
      res.json(dbThoughtsData);
  })
  .catch(err => res.status(400).json(err));
}

}

module.exports = thoughtController;


