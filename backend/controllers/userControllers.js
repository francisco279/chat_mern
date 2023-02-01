const generateToken = require("../config/generateToken");
const User          = require("../models/userModel");

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
                pic:   user.pic,
                token: generateToken(user._id),
            }
        );
    }
    else
    {
        res.status(400);
        throw new Error("Failed to create the user");
    }
};

//Login function
const authUser = async(req, res) => {
    const {email, password} = req.body;
    //check if the email exist
    const user = await User.findOne({email});
    //if user exist and the password is correct
    if (user && (await user.matchPassword(password))) 
    {
        res.json
        (
            {
                _id:     user._id,
                name:    user.name,
                email:   user.email,
                isAdmin: user.isAdmin,
                pic:     user.pic,
                token:   generateToken(user._id),
            }
        );
    } 
    else
    {
        res.status(401);
        throw new Error("Invalid Email or Password");
    }
};

//function to get all the users
const allUsers = async(req, res) => {
    //return all the users that the email or name was entered
    const keyword = req.query.search ?
    {
        $or: 
        [
            { 
                name: 
                {
                    $regex  : req.query.search, 
                    $options: "i"
                }
            },
            {
                email: 
                {
                    $regex  : req.query.search, 
                    $options: "i"
                }
            }
        ] 
    }
    :
    {};
 //get all tha users with except a specific id 
    const users = await User.find(keyword).find({_id: { $ne: req.query._id}});
    res.send(users);

    console.log(keyword);
}


module.exports = 
{ 
    registerUser, 
    authUser,
    allUsers,
};