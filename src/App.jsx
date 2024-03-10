import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import React, { Suspense } from 'react'
const Dashboard_ = React.lazy(() => import("./components/dashboard"))
const Landing_ = React.lazy(() => import("./components/landing"))
function App() {

  return (
    <>
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path="/dashboard" element={<Suspense fallback={"Loading.."}>
            <Dashboard_ /></Suspense>} />
          <Route path="/" element={<Suspense fallback={"loading.."}><Landing_ />
          </Suspense>} />
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
