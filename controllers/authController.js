const User = require('../models/User');
const bcrypt = require('bcryptjs');

module.exports = {
    createUser: async (req, res) => {
        console.log(req.body);
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            // encrypt password
            password: bcrypt.hashSync(req.body.password, 8)
        });
        try {
            const savedUser = await user.save();
            res.status(201).json(savedUser);
            // res.redirect('/login');
        } catch (err) {
            // console.log(err);
            res.status(400).json({ message: err });
        }
    },
    loginUser: async (req, res) => {
        console.log(req.body);
        try {
            email = req.body.email;
            password = req.body.password;
            const user = await User.findOne({ email: email });
            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }
            const passwordIsValid = bcrypt.compareSync(password, user.password);
            if (!passwordIsValid) {
                return res.status(401).json({ message: "Invalid password" });
            }
            res.status(200).json(user);
            // res.redirect('/home');
        }
        catch (err) {
            res.status(400).json({ message: err });
        }
    }
}


