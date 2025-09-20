import express from 'express';
import { ENV } from './config/env.js';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World! 123');
});

console.log("mongo url:", ENV.MONGO_URL);

app.listen(ENV.PORT,() => console.log('Server is running on port:', ENV.PORT ));

