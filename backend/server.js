const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");

const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/users");
const postRoutes = require("./routes/posts");
const conversationRoutes = require("./routes/conversation");
const messageRoutes = require("./routes/message");

const app = express();
const port = 5000;

//middleware
app.use(express.json());
app.use(morgan("common"));

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGOOSE_URI);
    console.log("Connected to mongoDB");
  } catch (error) {
    console.log(error);
  }
};

app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/posts", postRoutes);
app.use("/conversations", conversationRoutes);
app.use("/messages", messageRoutes);

app.listen(port, () => {
  connect();

  console.log(`Server is running on port ${port}`);
});
