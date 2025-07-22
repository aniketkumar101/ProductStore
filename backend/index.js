import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';

import AuthRouter from './routes/auth.route.js';
import ProductRouter from './routes/product.route.js';
import { connectDB } from './config/db.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

// Check in deployment
app.get('/ping', (req, res) => {
  res.send('PONG');
});

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

app.use('/auth', AuthRouter);
app.use('/products', ProductRouter);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on ${PORT}`);
});
