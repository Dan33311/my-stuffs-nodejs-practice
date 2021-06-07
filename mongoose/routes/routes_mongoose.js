const express = require('express');
const mongoose = require('mongoose');
const Student = require('../db/model')
const router = express.Router();



router.get('/', (req, res) => {
  
  res.send({type: 'GET'});
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


module.exports = router