import User from '../models/user.model.js';
export const signup = async (req, res, next) => {
    const { username, email, password } = req.body;

    if (
        !username ||
        !email ||
        !password ||
        username === '' ||
        email === '' ||
        password === ''
    ) {
        //   next(errorHandler(400, 'All fields are required'));
        res.send({ message: "something is wrong" });
    }

    // const hashedPassword = bcryptjs.hashSync(password, 10);

    const newUser = new User({
        username,
        email,
        password,
    });

    try {
        await newUser.save();
        res.json('Signup successful');
    } catch (error) {
        res.send(error);
    }
};