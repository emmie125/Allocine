import React from "react";
import ReactDOM from "react-dom";
import 'react-slideshow-image/dist/styles.css';
import "react-alice-carousel/lib/alice-carousel.css";
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter } from "react-router-dom";
import './index.css'
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
     <BrowserRouter>
        <App />
    </BrowserRouter>
  </React.StrictMode>
  ,
  document.getElementById("root")
);
