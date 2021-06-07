const express = require('express');
const mongoose = require('mongoose');
const app = express();



app.get('/students', (req, res) => {
  res.send('app file working')
})


app.listen(3060, () => {
  console.log('Listening on port 3060');
});