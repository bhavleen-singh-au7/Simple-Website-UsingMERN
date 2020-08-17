require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require("cookie-parser");
const cors = require('cors');

const app = express();

const userRoutes = require("./routes/user");

// DB Connection
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  }).then(() => {
    console.log('DB CONNECTED');
  }).catch(() => {
    console.log('DB GOT ERROR');
  });

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors());

// My Routes
app.use("/api", userRoutes);

// Starting a server
const port = process.env.PORT || 2020;
app.listen(port, () => {
  console.log(`Listening to port #${port}`);
});