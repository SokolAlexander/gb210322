import "./Message.styles.scss";

export const Message = ({ name, asd, bold }) => {
  return (
    <h3 className={"message" + (!bold ? " header" : "")}>
      I am a message: {name}, {asd}
    </h3>
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
