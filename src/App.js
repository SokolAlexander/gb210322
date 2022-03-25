import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import { Message } from "./components/Message/Message";
import { Counter } from "./components/Example/Example";
import { Form } from "./components/Form/Form";

const name = "me";

const msgs = [
  {
    author: name,
    text: "text1",
  },
  {
    author: name,
    text: "text2",
  },
  {
    author: 'robot',
    text: "message from robot",
  },
];

function App() {
  const [messages, setMessages] = useState(msgs);

  const addMessage = (newText) => {
    setMessages([...messages, { text: newText, author: name }]);
  };

  return (
    <div className="App">
      {/* <Counter randomNumber={rand} /> */}
      {messages.map((msg) => (
        <Message text={msg.text} author={msg.author} />
      ))}
      {/* <button onClick={addMessage}>Add msg</button> */}
      <Form onSubmit={addMessage} />
    </div>
  );
}

// export class AppClass extends React.Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

export default App;
