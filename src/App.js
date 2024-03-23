import React from 'react'
import "./app.scss"

import { BrowserRouter as Router, Route, matchRoutes, Routes } from 'react-router-dom'
import ProtedtedRoute from "./utils/ProtectedRoute";
import { AuthProvider } from './context/AuthContext';
import {Dashboard, Home, Login, Register} from "./pages"


const App = () => {
  return (
    <div className='App'>
        <div className='container'>
            <Router>
              <AuthProvider>
                <Routes>
                  <Route 
                  path="/dashboard"
                  element={
                    <ProtedtedRoute>
                      <Dashboard />
                    </ProtedtedRoute>
                  }/>
                  <Route 
                  path="/login"
                  element={<Login />}
                  />
                  <Route 
                  path="/register"
                  element={<Register />}
                  />
                  <Route 
                  path="/" exact
                  element={<Home />}
                  />
                </Routes>
              </AuthProvider>
            </Router>
        </div>
    </div>
  )
}

export default App
