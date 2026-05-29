const router = require("express").Router();
const User = require("../models/User");
const Conversation = require("../models/Conversation");

//new conversation
router.post("/", async (req, res) => {
  const newConversation = await new Conversation({
    members: [req.body.senderId, req.body.receiverId],
  });
  try {
    const savedConversation = await newConversation.save();
    return res.status(200).json(savedConversation);
  } catch (error) {
    return res.status(500).send(error);
  }
});

//get a conversation of a user
router.get("/:userId", async (req, res) => {
  const conversation = await Conversation.findOne({
    members: { $in: [req.params.userId] },
  });
  try {
    return res.status(200).json(conversation);
  } catch (error) {
    return res.status(500).send(error);
  }
});

//get conversation includes two user
router.get("/find/:firstUserId/:secondUserId", async (req, res) => {
  try {
    const conversation = await Conversation.findOne({
      members: { $all: [req.params.firstUserId, req.params.secondUserId] },
    });
    return res.status(200).json(conversation);
  } catch (error) {
    return res.status(500).send(error);
  }
});

module.exports = router;
