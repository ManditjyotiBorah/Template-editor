import React from "react";

import { Tool } from "./index";

const Toolbox = () => {
  const dragOver = (e) => {
    e.preventDefault();
  };
  return (
    <div className="toolbox" onDragOver={dragOver}>
      <div className="tools-container">
        <div className="hint-container">
          Hint: Drag one of the boxes below onto your template
        </div>
        <Tool id="section-card">
          <div className="tool">Section</div>
        </Tool>
        <Tool id="text-card">
          <div className="tool">Text</div>
        </Tool>
        <Tool id="btn-grp-card">
          <div className="tool">Button Group</div>
        </Tool>
        <Tool id="multiselect-card">
          <div className="tool">Multiselect</div>
        </Tool>
        <Tool id="dropdown-card">
          <div className="tool">Dropdown</div>
        </Tool>
        <Tool id="tool-selector-card">
          <div className="tool">Tool Selector</div>
        </Tool>
        <Tool id="tooth-card">
          <div className="tool">Tooth</div>
        </Tool>
      </div>
    </div>
  );
};

export default Toolbox;
