import express from 'express';

const app = express();

const port = 5500;

app.listen(port, () => {
  console.log('Server over here on port:', port);
});
