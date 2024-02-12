import express from 'express';
import mongoose, { connect } from 'mongoose';
import { connectToMongoDB } from './db/dbConfig';

connectToMongoDB();

const app = express();
const PORT = process.env.PORT || 3000;


// middleware
app.use(cors());
app.use(express.urlencoded({extended:false}))
app.use(express.json());


// routes
app.get('/', (req, res) => {
  res.send('Server is up and running')
})







app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});