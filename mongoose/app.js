require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const routes_mongoose = require('../mongoose/routes/routes_mongoose');
const app = express();



mongoose.connect(process.env.DB_URI, {
  useCreateIndex: true,
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
});
try {
  console.log('DataBase connected !!');
} catch (error) {
  console.log(error);
}


app.use(express.json());
app.use('/students', routes_mongoose)


app.listen(process.env.PORT, () => {
  console.log(`Listening on port: ${process.env.PORT}`);
});