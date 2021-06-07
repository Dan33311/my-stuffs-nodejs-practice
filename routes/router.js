const express = require('express');
const router = express.Router();
let students = require('../db/students')



router.get('/', (req, res) => {
  res.send(students);
});


router.post('/students', (req, res) => {
  const student = req.body;
  students.push(student);
  res.send('New student added to DB !!');
});



module.exports = router;