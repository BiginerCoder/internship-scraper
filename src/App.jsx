
import React, { useState } from 'react'
import Header from './components/Header'
import LandingPage from './components/LandingPage'
import LoginPage from './components/LoginPage'
import RegisterPage from './components/RegisterPage'
import ProfileSetup from './components/ProfileSetup'
import Dashboard from './components/Dashboard'
import InternshipListings from './components/InternshipListings'
import AdminUpload from './components/AdminUpload'

function App() {
  const [currentPage, setCurrentPage] = useState('landing')
  const [user, setUser] = useState(null)
  const [userProfile, setUserProfile] = useState(null)

  const navigate = (page) => {
    setCurrentPage(page)
  }

  const handleLogin = (userData) => {
    setUser(userData)
    navigate('profile-setup')
  }

  const handleProfileSetup = (profileData) => {
    setUserProfile(profileData)
    navigate('dashboard')
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'landing':
        return <LandingPage navigate={navigate} />
      case 'login':
        return <LoginPage navigate={navigate} onLogin={handleLogin} />
      case 'register':
        return <RegisterPage navigate={navigate} onRegister={handleLogin} />
      case 'profile-setup':
        return <ProfileSetup navigate={navigate} onProfileSetup={handleProfileSetup} user={user} />
      case 'dashboard':
        return <Dashboard navigate={navigate} userProfile={userProfile} />
      case 'internships':
        return <InternshipListings navigate={navigate} userProfile={userProfile} />
      case 'admin':
        return <AdminUpload navigate={navigate} />
      default:
        return <LandingPage navigate={navigate} />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {currentPage !== 'landing' && (
        <Header navigate={navigate} user={user} userProfile={userProfile} />
      )}
      {renderPage()}
    </div>
  )
}

export default App
