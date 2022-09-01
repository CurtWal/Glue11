express = require('express');
const toDo = require('../models/todoModel')
const router = express.Router();


// Using Express Router, create a get request that uses the method Model.find() to retrieve documents 
// from your database.
router.get('/todo', async (req,res) => {
    const myToDo = await toDo.find({});
    res.send(myToDo);
})

module.exports = router;