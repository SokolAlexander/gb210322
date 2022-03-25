import "./Message.styles.scss";

export const Message = ({ author, text }) => {
  return (
    <div className="message">
      <span>{author}:</span>
      <span>{text}</span>
    </div>
  );
};

// import React from "react";

// export class Message extends React.Component {
//   render() {
//     const { name, asd, doSmth } = this.props;
//     return (
//       <h3 onClick={doSmth}>
//         I am a message: {name}, {asd}
//       </h3>
//     );
//   }
// }
