import React, { useState } from "react";

function ToDoItem(props) {
  const [isDone, setIsDone] = useState(false);

  function handleClick() {
    setIsDone((prevValue) => {
      return !prevValue;
    });
  }

  // return <li>Text</li>
  // return <li>{props.text}</li>;
  return (
    <div onClick={handleClick}>
      {/* <li style={{ textDecoration: "line-through" }}>{props.text}</li> */}
      <li style={{ textDecoration: isDone ? "line-through" : "none" }}>
        {props.text}
      </li>
    </div>
  );
}

export default ToDoItem;
