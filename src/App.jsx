import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Landing } from './components/landing'
import { Dashboard } from './components/dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Landing />
      <Dashboard />

    </>
  )
}

export default App
