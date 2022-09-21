import { Routes, Route } from 'react-router-dom'
import { Home } from './components/Home'
import { Login } from './components/Login'
import { Register } from './components/Register'
import { ProtectedRoute } from './components/ProtectedRoute'
import { AuthProvider } from './context/authContext'

function App() {
  return (

    <AuthProvider>
      <div className='!font-[Mulish] h-screen w-screen flex items-center justify-center flex-col bg-gradient-to-r from-violet-500 to-fuchsia-500'>
        <Routes>
          <Route path="/" element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </AuthProvider>


  )
}

export default App
