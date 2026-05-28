import "./Messenger.css";
import Conversation from "./../../components/Conversation/Conversation";
import Message from "../../components/Message/Message";
import Button from "@mui/material/Button";
import ChatOnline from "../../components/ChatOnline/ChatOnline";

const Messenger = () => {
  return (
    <div className="messenger">
      <div className="chat-menu">
        <div className="chat-menu-wrapper">
          <input
            type="text"
            placeholder="Search For Friend"
            className="chat-menu-input"
          />
          <div>
            <Conversation />
          </div>
        </div>
      </div>
      <div className="chat-box">
        <div className="chat-box-wrapper">
          <div className="chat-box-top">
            <div>
              <Message />
            </div>
          </div>
          <div className="chat-box-bottom">
            <textarea
              className="chat-message-input"
              placeholder="Write something..."
            ></textarea>
            <Button
              color="success"
              variant="contained"
              className="chat-submit-button"
            >
              Send
            </Button>
          </div>
        </div>
      </div>
      <div className="chat-online">
        <div className="chat-online-wrapper">
          <h4>Online Users</h4>
          <ChatOnline />
          <ChatOnline />
        </div>
      </div>
    </div>
  );
};

export default Messenger;
