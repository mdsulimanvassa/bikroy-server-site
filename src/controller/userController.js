const createHttpError = require("http-errors");
const jwt = require('jsonwebtoken');
const Users = require("../modules/userModules");
const { screteJsonWebToken, cookieName } = require("../screte");

const registerUser = async (req, res, next) => {
    try {
        const name = req.body;
        console.log(name);
        const newUser = new Users(name);
        await newUser.save();
        console.log(name);
        res.status(201).send({ msg: 'User was created successfully' });
    } catch (error) {
        next(createHttpError(error));
    }
}

const logginUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = { email, password };

        if (user) {
            const token = jwt.sign({ user }, screteJsonWebToken, { expiresIn: '1d' });

            res.cookie(cookieName, token, {
                maxAge: 24 * 60 * 1000,
                httpOnly: true,
            });
            res.json({ token, user });
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    } catch (error) {
        next(createHttpError(error));
    }
}

const readUser = async (req, res, next) => {
    try {
      const users = await Users.find({});
      res.status(200).send(users);
    } catch (error) {
      next(error);
    }
  };

module.exports = {
    registerUser,
    logginUser,
    readUser,
}