const router = require('express').Router();

//request from thought-controller
const {
  createThought,
  getAllThought,
  getThoughtsById,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction
} = require('../../controllers/thought-controller');


// GET Directs to: /api/thought
router
  .route('/')
  .get(getAllThought)
  .post(createThought);

// GET/PUT/DELETE Directs to: /api/thoughts/:id
router
  .route('/:id')
  .put(updateThought)
  .delete(deleteThought)
  .get(getThoughtsById);

// POST Directs to: /api/thoughts/:thoughtId/reactions
router
  .route('/:thoughtId/reactions')
  .post(addReaction);

// DELETE Directs to: /api/thoughts/:thoughtId/reactionId
router
  .route('/:thoughtId/reactions/:reactionId')
  .delete(deleteReaction);

module.exports = router;


