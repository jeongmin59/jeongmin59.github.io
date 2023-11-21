import React from 'react'
import { HashRouter , Route, Routes } from "react-router-dom";
import './index.css'
import MainPage from './pages/MainPage.jsx';

function App() {

  return (
    <HashRouter >
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </HashRouter>
  )
}

export default App
