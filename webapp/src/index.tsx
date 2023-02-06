import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import App from "./pages/App"




//This index file just houses the App component, which houses everything else



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
)
