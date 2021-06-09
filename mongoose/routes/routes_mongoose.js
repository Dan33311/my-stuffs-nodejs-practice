const express = require('express');
const mongoose = require('mongoose');
const Student = require('../db/model')
const router = express.Router();

//  ! Please check at the bottom (info about CRUD, diferent ways to do methods, Test, handling errors ...)
//  npm run devStart


//  -----  GET  ----- 
//  -----  "Browser"  ------
router.get('/', async (req, res) => {
  const students = await Student.find({});
  res.send(students);  
});


//  -----  POST  -----
//  -----   Test 4 - !important path = '/cuatro' "WDS"   ------
router.post('/cuatro', async (req, res) => {
  let student = new Student(req.body);
  student = await student.save();
  res.send(student);
});


//  -----  GET BY ID  -----
router.get('/:id', async (req, res) => {
  let student = await Student.findById(req.params.id); 
  res.send(student);  
});


//  -----  PATCH  -----  !work but in res.send I'm getting old info
//  -----  "Browser"  ------
router.patch('/:id', async (req, res) => {
    let student = await Student.findByIdAndUpdate(req.params.id, req.body);
    res.send(student); 
});


//  -----  DELETE  -----
//  -----  "Browser"  ------
router.delete('/:id', async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.send('student removed from DB !!');  
});


module.exports = router



//  -----  GET For testing "TNN"  ------
// router.get('/', (req, res) => {
//   res.send({type: 'GET'});
// });

//  -----   GET  --  with try catch   ------
// router.get('/', async (req, res) => {
//   const students = await Student.find({});
//   try {
//     res.send(students);  
//   } catch (error) {
//     console.log(error);
//   }
// });


//  -----  POST Test 1   "TNN"   ------
// router.post('/', (req, res) => {
//   console.log(req.body);
//   res.send({ type: 'POST' });
// });

//  -----  POST Test 2 - !important path = '/dos' "TNN"   ------
// router.post('/dos', (req, res) => {
//   console.log(req.body);
//   res.send({ type: 'POST', name: req.body.name, lastName: req.body.lastName, level: req.body.level, year: req.body.year });
// });

//  -----  POST Test 3 - !important path = '/tres' "TNN"   ------
// router.post('/tres', (req, res) => {
//   Student.create(req.body).then(student => res.send(student))
// });

//  -----   Test 4 - !important path = '/cuatro' "WDS"  + try catch ------
// router.post('/cuatro', async (req, res) => {
//   let student = new Student(req.body)
//   try {
//     student = await student.save()
//     res.send(student)
//   } catch (error) {
//     console.log(error);
//   }
// });


//  -----  PATCH  -----
//  -----  "Browser" + try catch ------
// router.patch('/:id', async (req, res) => {
//   try {
//     let student = await Student.findByIdAndUpdate(req.params.id, req.body);
//     res.send(student);  
//   } catch (error) {
//     console.log(error);
//   }
// });