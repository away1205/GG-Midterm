require('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.PORT;
const mongoose = require('mongoose');
const router = require('./src/routes/routes');
const DATABASE_URL = process.env.MYDATABASE_URL;

mongoose
  .connect(DATABASE_URL || 'mongodb://0.0.0.0:27017/tokopedia')
  .then(() => {
    console.log('MongoDB is connected');
  })
  .catch((error) => {
    console.log(error);
  });

app.use(express.urlencoded({ extended: true }));
app.use(router);

app.use((err, req, res, next) => {
  let { status = 500, message = 'Terjadi Kesalahan Dalam Server' } = err;
  console.log(message);
  res.status(status).json({ status: 'Failed', message: message });
});

app.listen(PORT || 3000, () => {
  console.log(`The server is running in ${PORT}`);
});
