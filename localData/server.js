const express = require('express');
const app = express();
const routes = require('./routes/router');




app.use(express.json());

app.use('/students', routes);


app.listen(3060, () => {
  console.log('Listening on port 3060');
});