import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UpgradeToWriter from "./Pages/UpgradeToWriter"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

function App() {

  return (

    <BrowserRouter>

    <Routes>

    <Route path="/" element={<UpgradeToWriter/>} />

    </Routes>

    </BrowserRouter>

  )

}

export default App