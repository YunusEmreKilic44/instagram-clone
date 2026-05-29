const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");

// create a post
router.post("/", async (req, res) => {
  const newPost = await new Post(req.body);

  try {
    const savedPost = await newPost.save();
    return res.status(200).json(savedPost);
  } catch (error) {
    return res.status(500).send(error);
  }
});

// update a post
router.put("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await post.updateOne({ $set: req.body });
      return res.status(200).json({ message: "The post has been updated!" });
    } else {
      return res
        .status(403)
        .json({ message: "You can only update your post!" });
    }
  } catch (error) {
    return res.status(500).send(error);
  }
});

// delete a post
router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await post.deleteOne();
      return res.status(200).json({ message: "The post has been deleted!" });
    } else {
      return res
        .status(403)
        .json({ message: "You can only delete your post!" });
    }
  } catch (error) {
    return res.status(500).send(error);
  }
});

// get a post
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    return res.status(200).json(post);
  } catch (error) {
    return res.status(500).send(error);
  }
});

//get timeline posts
router.get("/timeline/:userId", async (req, res) => {
  try {
    const currentUser = await User.findById(req.params.userId);
    const userPosts = await Post.find({ userId: currentUser._id });
    const friendsPosts = await Promise.all(
      currentUser.followings.map((friendId) => {
        return Post.find({ userId: friendId });
      }),
    );
    return res.status(200).json(userPosts.concat(...friendsPosts));
  } catch (error) {
    return res.status(500).send(error);
  }
});

//get users all posts
router.get("/profile/:username", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username });
    const posts = await Post.find({ userId: user._id });
    return res.status(200).json(posts);
  } catch (error) {
    return res.status(500).send(error);
  }
});

//like and dislike a post
router.put("/:id/like", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.likes.includes(req.body.userId)) {
      await post.updateOne({ $pull: { likes: req.body.userId } });
      return res.status(200).json({ message: "The post has been unliked" });
    } else {
      await post.updateOne({ $push: { likes: req.body.userId } });
      return res.status(200).json({ message: "The post has been liked" });
    }
  } catch (error) {
    return res.status(500).send(error);
  }
});

module.exports = router;
