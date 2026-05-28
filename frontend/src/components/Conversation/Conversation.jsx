import Avatar from "@mui/material/Avatar";
import "./Conversation.css";

const Conversation = () => {
  return (
    <div className="conversation">
      <Avatar className="conversation-img" src="/images/person/2.png" />
      <div className="conversation-name">bedirhan</div>
    </div>
  );
};

export default Conversation;
