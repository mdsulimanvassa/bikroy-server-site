const express = require('express');
// const { authMiddleware } = require('../middleware/authMiddleware');
const { registerUser, logginUser, readUser } = require('../controller/userController');
const usersRouter = express.Router();

usersRouter.get('/adminRead', readUser);
usersRouter.post('/login', logginUser);
usersRouter.post('/userAdded', registerUser);

module.exports = usersRouter;