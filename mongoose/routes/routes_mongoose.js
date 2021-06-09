const express = require('express');
const mongoose = require('mongoose');
const Student = require('../db/model')
const router = express.Router();


//  -----  GET  -----
// router.get('/', (req, res) => {   // "TNN"
//   res.send({type: 'GET'});
// });

// Browser
router.get('/', async (req, res) => {
  const students = await Student.find({});
  res.send(students);  
});

//  -----  POST  -----
// Test 1   "TNN"
// router.post('/', (req, res) => {
//   console.log(req.body);
//   res.send({ type: 'POST' });
// });

// Test 2 - !important path = '/dos'  "TNN"
// router.post('/dos', (req, res) => {
//   console.log(req.body);
//   res.send({ type: 'POST', name: req.body.name, lastName: req.body.lastName, level: req.body.level, year: req.body.year });
// });

// // Test 3 - !important path = '/tres'  "TNN"
// router.post('/tres', (req, res) => {
//   Student.create(req.body).then(student => res.send(student))
// });

// Test 3 - !important path = '/cuatro'  "WDS"
router.post('/cuatro', async (req, res) => {
  let student = new Student(req.body)
  try {
    student = await student.save()
    res.send(student)
  } catch (error) {
    console.log(error);
  }
});

//  -----  PATCH  -----
router.patch('/:id', async (req, res) => {
  try {
    let student = await Student.findByIdAndUpdate(req.params.id, req.body);
    res.send(student);  
  } catch (error) {
    console.log(error);
  }
});

//  -----  DELETE  -----
router.patch('/:id', async (req, res) => {
  
  res.send(students);  
});

//  -----  GET BY ID  -----
router.patch('/:id', async (req, res) => {
  
  res.send(students);  
});

module.exports = router

// GET  --  with try catch
// router.get('/', async (req, res) => {
//   const students = await Student.find({});
//   try {
//     res.send(students);  
//   } catch (error) {
//     console.log(error);
//   }
// });