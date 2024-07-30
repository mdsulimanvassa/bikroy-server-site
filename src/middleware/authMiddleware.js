const { screteJsonWebToken } = require("../screte");

const authMiddleware = (req, res, next) => {
    const token = req.headers('Authorization')?.replace('Bearer ', '');
    if (!token) return res.status(401).send('Access denied');

    try {
        const verified = jwt.verify(token, screteJsonWebToken);
        req.user = verified;
        next();
    } catch (err) {
        res.status(400).send('Invalid token');
    }
};

module.exports = {authMiddleware};