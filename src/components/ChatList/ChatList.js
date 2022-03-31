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
  <div className="chat-list">
    {chats.map((chat) => (
      <div key={chat.id}>{chat.name}</div>
    ))}
  </div>
);
