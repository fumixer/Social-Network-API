const { Schema, model } = require (`mongoose`)

const UserSchema = new Schema (
    {
    UserName:{
        type: String,
        unique: true,
        required: true,
        tirm: true
    },
    Email:{
        Type: String,
        unique: true,
        required: true,
        validate:{
            validator:() =>Promise.resolve(false),
            message: 'Email validation failed'
        },
    },
    Thoughts: {
    //Array of _id values referencing the Thought model
    },
    Friends: {
    //Array of _id values referencing the User model (self-reference)
    }
    // -----Schema Settings
// Create a virtual called friendCount that retrieves the length of the user's friends array field on query.

})

const User =model ('User', UserSchema);

module.exports = User;

// User

// -----username
// String
// Unique
// Required
// Trimmed

// ------email
// String
// Required
// Unique
// Must match a valid email address (look into Mongoose's matching validation)

// -------thoughts
// Array of _id values referencing the Thought model

// -------friends
// Array of _id values referencing the User model (self-reference)


// -----Schema Settings
// Create a virtual called friendCount that retrieves the length of the user's friends array field on query.

