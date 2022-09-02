const { Schema, model } = require (`mongoose`)

const UserSchema = new Schema (
    {
    userName:{
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email:{
        type: String,
        unique: true,
        required: true,
          // use REGEX to validate correct email
          match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/]
        // validate:{
        //     validator:() =>Promise.resolve(false),
        //     message: 'Email validation failed'
        // },
    },
     //Array of _id values referencing the Thought model
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought' //to connect thougt model ln40
        }
    ],
    //Array of _id values referencing the User model (self-reference)
    friends: [
        {
          type: Schema.Types.ObjectId,
          ref: 'User',
        },
      ],
    },
      {
        toJSON: {
          virtuals: true,
        },
        id: false,
      },
);

// -----Schema Settings
// Create a virtual called friendCount that retrieves the length of the user's friends array field on query.
UserSchema.virtual('friendCount').get(function(){
    return this.friends.length;
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

