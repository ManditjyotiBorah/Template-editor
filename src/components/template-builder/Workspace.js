import React from "react";

const Workspace = () => {
  const drop = (e) => {
    e.preventDefault();
    const tool_id = e.dataTransfer.getData("tool_id");
    console.log(tool_id);
    let tool;
    if (tool_id === "section-card") {
      tool = document.getElementById(tool_id).cloneNode(true);
      tool.id += "-copy";
      tool.style.display = "block";
      e.target.appendChild(tool);
    }
    if (tool_id === "section-card-copy") {
      tool = document.getElementById(tool_id);
      tool.style.display = "block";
      e.target.appendChild(tool);
    }
  };
  const dragOver = (e) => {
    e.preventDefault();
  };
  return <div className="workspace" onDrop={drop} onDragOver={dragOver}></div>;
};

export default Workspace;
