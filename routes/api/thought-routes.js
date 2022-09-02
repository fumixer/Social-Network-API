const router = require('express').Router();

//requirement from thought-controller
const {
    getAllThought, 
    getThoughtsById, 
    createThought, 
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction
  } = require('../../controllers/thought-controller');

// -- Directs to: /api/thought <GET>
router
.route('/')
.get(getAllThought);

// Directs to: /api/thoughts/:id <GET, PUT, DELETE>
router
.route('/:id')
.get(getThoughtsById)
.put(updateThought)
.delete(deleteThought); 

// Directs to: /api/thoughts/:userId <POST>
router
.route('/:userId')
.post(createThought);

// Directs to: /api/thoughts/:thoughtId/reactions <POST>
router
.route('/:thoughtId/reactions')
.post(addReaction);

// Directs to: /api/thoughts/:thoughtId/reactionId <DELETE>
router
.route('/:thoughtId/reactions/:reactionId')
.delete(deleteReaction);


// router
//   .route('/:pizzaId/:thoughtId')
//   .put(addReply)
//   .delete(removeThought)

module.exports = router;


