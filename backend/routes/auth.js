const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");

// register

router.post("/register", async (req, res) => {
  try {
    const { fullName, username, email, password, bio, profilePicture } =
      req.body;

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      fullName,
      username,
      email,
      password: hashedPassword,
      bio,
      profilePicture,
    });

    const user = await newUser.save();
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password,
    );

    if (!validPassword) {
      return res.status(403).json({ message: "Invalid password!" });
    } else {
      return res.status(200).json(user);
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});

module.exports = router;
