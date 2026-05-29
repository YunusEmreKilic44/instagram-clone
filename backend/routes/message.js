const router = require("express").Router();
const User = require("../models/User");
const Message = require("../models/Message");

//send message
router.post("/", async (req, res) => {
  const newMessage = await new Message(req.body);
  try {
    const savedMessage = await newMessage.save();
    return res.status(200).json(savedMessage);
  } catch (error) {
    return res.status(500).send(error);
  }
});

//get message
router.get("/:conversationId", async (req, res) => {
  try {
    const messages = await Message.find({
      conversationId: req.params.conversationId,
    });
    return res.status(200).json(messages);
  } catch (error) {
    return res.status(500).send(error);
  }
});

module.exports = router;
