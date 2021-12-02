const express = require('express');
const server = express();
const userRouter = require('./users/users-router');

const { logger } = require('./middleware/middleware')
server.use(express.json());

server.use(logger)

server.use('/api/users', userRouter);

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});


module.exports = server;
