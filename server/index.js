import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose
  .connect(process.env.NEXT_PUBLIC_MONGO)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.log(error);
  });

const app = express();

app.listen(process.env.NEXT_PUBLIC_SERVER_PORT, () => {
  console.log('Server started on:', process.env.NEXT_PUBLIC_SERVER_PORT);
});
