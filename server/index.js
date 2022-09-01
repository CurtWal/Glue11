require("dotenv").config()

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const toDoModel = require('./models/todoModel');
const getToDos = require('./routes/getToDos');

const app = express();
const PORT = process.env.PORT || 3003;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());


mongoose.connect(process.env.MERNDB_URL)
  .then(() => console.log("Connected to Mongoose"))
  .catch((err) => console.log(err));




app.get('/', (req, res) => {
    res.send('Hello, Welcome!')
})




const seedDatabase = async (req, res) => {
// Handle errors with try/catch a try/catch block
    try {
    // Make 3 new Todos from the Todo model 
      let toDo1 = new toDoModel({
    todoDescription: 'Wash Dishes',
    dueDate: "Thursday",
      })
      let toDo2 = new toDoModel({
    todoDescription: "Take The Trash Out",
    dueDate: "Monday",
      })
      let toDo3 = new toDoModel({
    todoDescription: "Walk the Dogs",
    dueDate: "Friday",
      })
// Save each todo to the database using the .save() method
      await toDo1.save()
      await toDo2.save()
      await toDo3.save()
    } catch (error) {
        console.log(error);
    }
}
seedDatabase();

app.use(getToDos)


// Create a new file called getTodos




app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})