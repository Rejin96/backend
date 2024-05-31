 const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const genToken = require("../createToken");

async function signup(req, res) {
  const { fullname, email, password } = req.body;
  let user = await User.findOne({ email });
  if (user) {
    res.status(400).send({ error: "Email already exists" });
  } else {
    const salt = await bcrypt.genSalt(10);
    let hashedPassword = await bcrypt.hash(password,salt);
    await User.create({ email, fullname, password:hashedPassword });
    res.send({ message: "Signup Sucess" });
  }
}

async function login(req, res) {
    let { email, password } = req.body;
    let user = await User.findOne({ email });
    if (user) {
      if (await bcrypt.compare(password, user.password)) {
        const token = genToken(user._id);
        res.send({ message: "Login Success",token });
      } else {
        res.status(400).send({ error: "Invalid Password" });
      }
    } else {
      res
        .status(400)
        .send({ error: "Email not registered. Please signup first" });
    }
  }

exports.signup = signup;
exports.login= login;