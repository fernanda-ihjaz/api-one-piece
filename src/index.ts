import express from 'express';
import mongoose from 'mongoose';

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost:27017/api-one-piece')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Eai');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
