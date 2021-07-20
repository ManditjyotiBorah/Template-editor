import React from "react";

const Tool = (props) => {
  const dragStart = (e) => {
    const target = e.target;
    e.dataTransfer.setData("tool_id", target.id);
  };

  const dragOver = (e) => {
    e.stopPropagation();
  };
  return (
    <div
      id={props.id}
      draggable="true"
      onDragStart={dragStart}
      onDragOver={dragOver}
    >
      {props.children}
    </div>
  );
};

export default Tool;
