import { Link, Outlet } from "react-router-dom";
import "./ChatList.css";

const chats = [
  {
    name: "Chat1",
    id: "chat1",
  },
  {
    name: "Chat2",
    id: "chat2",
  },
  {
    name: "Chat3",
    id: "chat3",
  },
];

export const ChatList = () => (
  <>
    <div className="chat-list">
      {chats.map((chat) => (
        <Link to={`/chat/${chat.id}`} key={chat.id}>
          {chat.name}
        </Link>
      ))}
    </div>
    <Outlet />
  </>
);
