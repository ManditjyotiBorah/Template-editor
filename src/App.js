import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import {
  TemplateEditorScreen,
} from "./screens";
import TemplateBuilder from "./components/template-builder";

function App() {
  return (
    <Router>
      <div className="d-flex flex-column">
        <div className="container-fluid px-0 lh-base bgcolor2">
          <Switch>
            <Route path="/">
              <TemplateEditorScreen />
            </Route> 
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
