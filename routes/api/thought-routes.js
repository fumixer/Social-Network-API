const router = require('express').Router();
const {
    getAllThoughts, 
    getThoughtsById, 
    createThought, 
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction
  } = require('../../controllers/thought-controller');

router.route('/:pizzaId/:thoughtId/:replyId').delete(removeReply);

router
  .route('/:pizzaId/:thoughtId')
  .put(addReply)
  .delete(removeThought)

module.exports = router;


