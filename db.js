const mongoose = require('mongoose');

mongoose.connect('DB URL Here');

const TodoSchema=mongoose.Schema({
    title: String,
    description: String,
    compelted: Boolean
})

const todo = mongoose.model('todos', TodoSchema);

module.exports = {
    todo
}
