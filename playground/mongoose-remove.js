const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');



// Remove
// Todo.remove({}).then(result => {
//     console.log(result)
// })

// findByIdAndRemove
// Todo.findByIdAndRemove('5b699ceea13c2b0280f6ae92').then(result => {
//     console.log(result)
// })

// findOneAndRemove
// Todo.findOneAndRemove({completed: true});