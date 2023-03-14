import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "./context/context";
import { SpeechProvider } from "@speechly/react-client";

import App from "./App";

import "./index.css";

ReactDOM.render(
  <SpeechProvider appId="c42d58d4-6e00-4989-b64f-3aec3d262c8c" language="en-us">
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>,

  document.getElementById("root")
);
