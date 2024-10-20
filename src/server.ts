import express from 'express';
import mongoose from 'mongoose';
import * as path from "path";
import * as dotenv from "dotenv";
import app from './app';

dotenv.config({
  path: path.resolve(__dirname, `../.env.${process.env.NODE_ENV}`),
});


// Middleware
app.use(express.json());

// Accessing the database URL
const databaseUrl = process.env.DATABASE_URL;
// Connecting to MongoDB using Mongoose
mongoose.connect(databaseUrl as string)
.then(() => {
  console.log("Connected to MongoDB successfully");
})
.catch((err) => {
  console.error("Error connecting to MongoDB", err);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;
