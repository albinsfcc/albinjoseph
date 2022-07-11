const express = require('express');
require('dotenv').config();
const server = express();
const path = require('path');

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

server.use('/content', content);

// middlewares
server.use(express.json());

if (process.env.NODE_ENV === 'production') {
    server.use(express.static(path.join(__dirname, 'client', 'build')));
    server.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
    }
    );
} else {
    server.get('/', (req, res) => {
        res.send('Home Loaded');
    });
}
server.listen(PORT, () => console.log(`Server is running in PORT: ${PORT}`));
