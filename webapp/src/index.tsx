import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import App from "./pages/App"
import DAO from "./pages/DAO/DAO"



//This index file just houses the App component, which houses everything else



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/DAO" element={<DAO />} />
    </Routes>
    

    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
)
