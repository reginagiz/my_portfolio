import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.css"
import Header from "./components/Header"
import Homepage from "./components/Homepage"
import Profile from "./components/Profile"
import Contacts from "./components/Contacts"

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<Profile />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
