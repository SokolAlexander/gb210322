import "./App.css";
import React, { useEffect, useRef, useState } from "react";
import { Message } from "./components/Message/Message";
import { Form } from "./components/Form/Form";
import { AUTHORS } from "./utils/constants";
import { MessageList } from "./components/MessageList/MessageList";

function App() {
  const [messages, setMessages] = useState([]);

  const timeout = useRef();
  const wrapperRef = useRef();

  const addMessage = (newMsg) => {
    setMessages([...messages, newMsg]);
  };

  const sendMessage = (text) => {
    addMessage({
      author: AUTHORS.human,
      text,
      id: `msg-${Date.now()}`,
    });
  };

  useEffect(() => {
    if (messages[messages.length - 1]?.author === AUTHORS.human) {
      timeout.current = setTimeout(() => {
        addMessage({
          author: AUTHORS.robot,
          text: "hello friend",
          id: `msg-${Date.now()}`,
        });
      }, 1000);
    }

    return () => {
      clearTimeout(timeout.current);
    };
  }, [messages]);

  const handleScroll = () => {
    wrapperRef.current?.scrollTo({ x: 0, y: 0 });
  };

  return (
    <div className="App" ref={wrapperRef}>
      <MessageList messages={messages} />
      <Form onSubmit={sendMessage} />
      <button onClick={handleScroll}>scroll</button>
    </div>
  );
}

export default App;
