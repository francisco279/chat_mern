const User = require("../models/userModel");
//function to register users
const registerUser = async(req, res) => {
    const { name, email, password, pic } = req.body;

    if (!name || !email || !password)
    {
        res.status(400);
        throw new Error("Please enter all the feilds");
    }
    //check if the new email exist
    const userExist = await User.findOne({email})
    if(userExist) 
    {
        res.status(400);
        throw new Error("User already exist");
    }

    //create user 
    const user = await User.create
    (
        {
            name,
            email,
            password,
            pic,
        }
    );

    if(user)
    {
        res.status(201).json
        (
            {
                _id:   user._id,
                name:  user.name,
                email: user.email,
                pic:   user.pic
            }
        );
    }
    else
    {
        res.status(400);
        throw new Error("Failed to create the user");
    }
};

module.exports = { registerUser };