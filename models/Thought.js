const { Schema, model, Types } = require ('mongoose');
const dateFormat = require('../utils/dateFormat');
const reactionSchema = require('./Reaction');

const thoughtSchema = new Schema (
    {
    thoughtText:{
        type:String,
        required: true,
        minlength: 1,
        maxlength: 280
    },
    createdAt:{
        type: Date,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal)
    },
    username: {
        type: String,
        required: true
    },
    reaction: [reactionSchema]
},
{
    toJSON:{
        getter: true,
        virtuals: true
    },
    // prevents virtuals from creating duplicate of _id as `id`
    id:false,
}
);

 // Schema Settings
// Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.
thoughtSchema.virtual('reactionCount').get(function(){
    return this.reactons.length;
})

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;


// -------Thought

// -----thoughtText
// String
// Required
// Must be between 1 and 280 characters

// -------createdAt
// Date
// Set default value to the current timestamp
// Use a getter method to format the timestamp on query

// ------username (The user that created this thought)
// String
// Required

// ------reactions (These are like replies)
// Array of nested documents created with the reactionSchema

// Schema Settings
// Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.