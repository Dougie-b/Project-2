import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from "./components/Home"
import Nav from "./components/Nav"
import List from "./components/List"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='list' element={<List />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
