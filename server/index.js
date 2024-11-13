import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';

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

app.use(express.json());

app.listen(process.env.NEXT_PUBLIC_SERVER_PORT, () => {
  console.log('Server started on:', process.env.NEXT_PUBLIC_SERVER_PORT);
});

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);
