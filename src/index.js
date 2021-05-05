import React from "react";
import ReactDOM from "react-dom";
import 'react-slideshow-image/dist/styles.css'
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter } from "react-router-dom";
import './index.css'
import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);
