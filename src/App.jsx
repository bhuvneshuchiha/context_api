import { Landing } from './components/landing'
import { Dashboard } from './components/dashboard'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter >
    </>
  )
}

function Appbar() {

  const navigate = useNavigate();

  function landingHandler() {
    navigate('/');
  }

  function dashboardHandler() {
    navigate('dashboard')
  }
  return (
    <div style={{ background: "black", color: "white" }}>
      <button onClick={landingHandler}>Landing</button>
      <button onClick={dashboardHandler}>Dashboard</button>
    </div>
  )
}

export default App
