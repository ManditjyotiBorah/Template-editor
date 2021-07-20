import React from "react";

import "../../css/template-builder.css";

import { Toolbox, Workspace } from "./index";

const Builder = () => {
  return (
    <div className="builder">
      <Toolbox />
      <Workspace />
    </div>
  );
};

export default Builder;
