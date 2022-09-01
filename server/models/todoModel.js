const mongoose = require('mongoose');


// In that file : Create a Schema using the class mongoose.Schema({ }), with the following fields:
// todoDescription
// dueDate
// Be sure to create a model of your Schema using the method mongoose.model()
// Export your model

const toDoSchema = new mongoose.Schema({
    todoDescription: String,
    dueDate: String,
});

const toDoModel = new mongoose.model('toDoList',toDoSchema);

module.exports = toDoModel;