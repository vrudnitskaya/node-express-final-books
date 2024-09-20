const User = require('../models/User');
const { StatusCodes } = require('http-status-codes');

const register = async (req, res) => {
    try {
        const user = await User.create({ ...req.body });
        const token = user.createJWT();
        res.status(StatusCodes.CREATED).json({ user, token });
    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({ error: error.message });
    }
};

const login = async(req,res) => {
    res.send('login user');
};

module.exports = {
    register,
    login
};