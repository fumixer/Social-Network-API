User
username
String
Unique
Required
Trimmed
email
String
Required
Unique
Must match a valid email address (look into Mongoose's matching validation)
thoughts
Array of
_id
values referencing the
Thought
model
friends
Array of
_id
values referencing the
User
model (self-reference)
Schema Settings
Create a virtual called
friendCount
that retrieves the length of the user's
friends
array fi eld on query.
Thought
thoughtText
String
Required
Must be between 1 and 280 characters
createdAt
Date
Set default value to the current timestamp
Use a getter method to format the timestamp on query
username
(The user that created this thought)
String
Required
reactions
(These are like replies)
Array of nested documents created with the
reactionSchema
Schema Settings
Create a virtual called
reactionCount
that retrieves the length of the thought's
reactions
array fi eld on query.
Reaction
(SCHEMA ONLY)
reactionId
Use Mongoose's