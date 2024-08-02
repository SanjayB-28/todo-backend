const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:gPWefIqI1h7Izmwj@cluster0.feriggt.mongodb.net/todoApp');

const TodoSchema=mongoose.Schema({
    title: String,
    description: String,
    compelted: Boolean
})

const todo = mongoose.model('todos', TodoSchema);

module.exports = {
    todo
}