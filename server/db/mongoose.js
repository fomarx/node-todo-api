const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://andrew:andrew123@ds123259.mlab.com:23259/node-todo-api');
// 'mongodb://localhost:27017/TodoApp'

module.exports = {mongoose}

// u.n: andrew
/// p.s: andrew123