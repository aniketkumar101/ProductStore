import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';

import user from './routes/user.route.js';
import product from './routes/product.route.js';
import { connectDB } from './config/db.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Check in deployment
app.get('/ping', (req, res) => {
  res.send('PONG');
});

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

app.use('/auth', user);
app.use('/products', product);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on ${PORT}`);
});
