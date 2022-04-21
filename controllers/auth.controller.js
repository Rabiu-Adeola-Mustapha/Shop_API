const bcrypt = require("bcryptjs/dist/bcrypt");
const User = require("../models/user.models");
const { LoginSchema, RegSchema } = require("../utils/validation");

const Register = async (req, res) => {

  const { value, error } = RegSchema.validate(req.body);

  if (error) {
    return res.status(400).json(error.message);
  }

  let user = await User.findOne({email: value.email});

  if(user) {
      return res.status(409).json({msg: "Email already in use."});
  };

  const hashedPassword = await bcrypt.hash(value.password, 10)

  user = await User.create({
      username: value.username,
      email: value.email,
      password: hashedPassword,
  });

  res.status(201).json(user);
};

const LogIn = async (req, res) => {
        // Validate user input
    const { value , error} =  LoginSchema.validate(reg.body);

    if (error) {
        return res.status(400).json(error);
    };

    //check if user in DB
    let user = await User.findOne({email: value.email});

    if(!user) {
        return res.status(400).json({msg: "Inavalid credentials"})
    }

    //compare user inputs with the stored user's password
    const isMatch = await bcrypt.compare(value.password, user.password);

    //if match

    if(!isMatch){
        return res.status(400).json({msg: "Invalid credentials"});
    };

    res.status(200).json(user)



};

module.exports = {
  Register,
  LogIn,
};
