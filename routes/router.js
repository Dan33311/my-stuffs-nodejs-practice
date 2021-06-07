const express = require('express');
const router = express.Router();
let students = require('../db/students')
const { nanoid } = require('nanoid')



router.get('/', (req, res) => {
  res.send(students);
});

// nanoid
router.post('/', (req, res) => {
  const student = req.body;

  students.push({ ...student, id: nanoid() });
  res.send('New student added to DB !!');
});


router.get('/:id', (req, res) => {
  const { id } = req.params;
  const studentFound = students.find(student => student.id === id);
  res.send(studentFound);
});


router.delete('/:id', (req, res) => {
  const { id } = req.params;
  students = students.filter(student => student.id != id);
  res.send('Student deleted !!');
});


router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const { name, lastName, level, year } = req.body;

  const student = students.find(student => student.id === id);

  if(name) student.name = name;
  if(lastName) student.lastName = lastName; 
  if(level) student.level = level;
  if(year) student.year = year; 

  res.send('Student updated !!');
});

module.exports = router;