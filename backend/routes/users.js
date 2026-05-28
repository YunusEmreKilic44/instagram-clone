const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");

// update user

router.put("/:id", async (req, res) => {
  if ((req.body.userID = req.params.id || req.body.isAdmin)) {
    if (req.body.password) {
      try {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
      } catch (error) {
        console.log(error);
        return res.status(500).send(error);
      }
    }
    try {
      const user = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      res.status(200).json({ message: "Account has been updated!" });
    } catch (error) {
      return res.status(500).send(error);
    }
  }
});

// delete user

router.delete("/:id", async (req, res) => {
  if ((req.body.userID = req.params.id || req.body.isAdmin)) {
    try {
      const user = await User.findByIdAndDelete(req.params.id);

      if (!user) {
        return res.status(403).json({ message: "User has not found!" });
      }
      return res.status(200).json({ message: "Account has been deleted" });
    } catch (error) {
      return res.status(500).send(error);
    }
  }
});

// get a user

router.get("/", async (req, res) => {
  const userId = req.query.userId;

  const username = req.query.username;
  try {
    const user = userId
      ? await User.findById(userId)
      : await User.findOne({ username: username });

    res.status(200).json(user);
  } catch (error) {
    return res.status(500).send(error);
  }
});

// get all user list

router.get("/list", async (req, res) => {
  try {
    const users = await User.find({});
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).send(error);
  }
});

//follow a user

router.put("/:id/follow", async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);

      if (!user.followers.includes(req.body.userId)) {
        await user.updateOne({ $push: { followers: req.body.userId } });

        await currentUser.updateOne({ $push: { followings: req.params.id } });

        return res.status(200).json({ message: "User has been followed" });
      } else {
        return res.status(403).send("You are already following this user!");
      }
    } catch (error) {
      return res.status(500).send(error);
    }
  } else {
    return res.status(403).send("You can not follow yourself!");
  }
});

//unfollow a user

router.put("/:id/unfollow", async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);

      if (user.followers.includes(req.body.userId)) {
        await user.updateOne({ $pull: { followers: req.body.userId } });

        await currentUser.updateOne({ $pull: { followings: req.params.id } });

        return res.status(200).json({ message: "User has been unfollowed" });
      } else {
        return res.status(403).send("You are not following this user!");
      }
    } catch (error) {
      return res.status(500).send(error);
    }
  } else {
    return res.status(403).send("You can not unfollow yourself!");
  }
});

module.exports = router;
