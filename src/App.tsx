import { useState } from 'react'
import Sidebar from './components/layout/Sidebar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Sidebar />
    </Router>
  )
}

export default App
