const http = require('http');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const database = require('./DB');

const PORT = 7000;

// import routes file:
const Product = require('./Routes/productRoutes');

// Create an Express App:
const app = express();

// Create server:
const server = http.createServer(app);

// Connection to the Database:
mongoose.connect(database.DB, {useNewUrlParser: true})
    .then(() => {console.log("Connected to the Database!")},
    err => {console.log("Can not connect to the Database!")});

// Parse the requests:
app.use(bodyParser.json());
app.use(cors());

// Static Path for access images:
app.use('/uploads/images', express.static(path.join('uploads/images')));

// mount the routes:
app.use('/product', Product);

// Connection to the Server:
server.listen(PORT, () => {
    console.log("Server listening on port: ", PORT);
})