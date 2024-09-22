const User = require('../models/User');
const { StatusCodes } = require('http-status-codes');
const { BadRequestError, UnauthenticatedError } = require('../errors');

const register = async (req, res) => {
    try {
        const { email } = req.body;
        
        //check if the user with this email exists
        const existingUser = await User.findOne({ email });
        if(existingUser) {
            return res.status(StatusCodes.BAD_REQUEST).json({ error: 'User with this email already exists' });
        };
        
        const user = await User.create({ ...req.body });
        const token = user.createJWT();
        res.status(StatusCodes.CREATED).json({ user, token });
    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({ error: error.message });
    }
};

const login = async(req,res) => {
    const { email, password } = req.body;
    
    if(!email || !password){
        throw new BadRequestError('Please provide email and password');
    };

    const user = await User.findOne({ email });
    if(!user) {
        throw new UnauthenticatedError('Invalid Credentials');
    };

    const isPasswordCorrect = await user.comparePassword(password);
    if(!isPasswordCorrect){
        throw new UnauthenticatedError('Invalid Credentials');
    };

    const token = user.createJWT();
    res.status(StatusCodes.OK).json({ user, token });
};

module.exports = {
    register,
    login
};