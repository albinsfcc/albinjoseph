const express = require('express');
require('dotenv').config();
const server = express();

// routes
const content = require('./routes/content');

// DB setup
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000;
const connectionParams = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
}
const DBURI = process.env.DB_CONNECTION_STRING;
mongoose.connect(DBURI, connectionParams);
const connection = mongoose.connection;
connection.on('open', () => console.log('DB Initialized!'));

// middlewares
server.use(express.json());

server.get('/', (req, res) => {
    res.send('Home Loaded');
});

server.use('/content', content);

server.listen(PORT, () => console.log(`Server is running in PORT: ${PORT}`));
