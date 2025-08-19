
// import React, { useState } from 'react'
// import Header from './components/Header'
// import LandingPage from './components/LandingPage'
// import LoginPage from './components/LoginPage'
// import RegisterPage from './components/RegisterPage'
// import ProfileSetup from './components/ProfileSetup'
// import Dashboard from './components/Dashboard'
// import InternshipListings from './components/InternshipListings'
// import AdminUpload from './components/AdminUpload'
// import styles from './App.module.css' // Assuming you have a CSS module for styles
// function App() {
//   const [currentPage, setCurrentPage] = useState('landing')
//   const [user, setUser] = useState(null)
//   const [userProfile, setUserProfile] = useState(null)

//   const navigate = (page) => {
//     setCurrentPage(page)
//   }

//   const handleLogin = (userData) => {
//     setUser(userData)
//     navigate('profile-setup')
//   }

//   const handleProfileSetup = (profileData) => {
//     setUserProfile(profileData)
//     navigate('dashboard')
//   }

//   const renderPage = () => {
//     switch (currentPage) {
//       case 'landing':
//         return <LandingPage navigate={navigate} />
//       case 'login':
//         return <LoginPage navigate={navigate} onLogin={handleLogin} />
//       case 'register':
//         return <RegisterPage navigate={navigate} onRegister={handleLogin} />
//       case 'profile-setup':
//         return <ProfileSetup navigate={navigate} onProfileSetup={handleProfileSetup} user={user} />
//       case 'dashboard':
//         return <Dashboard navigate={navigate} userProfile={userProfile} />
//       case 'internships':
//         return <InternshipListings navigate={navigate} userProfile={userProfile} />
//       case 'admin':
//         return <AdminUpload navigate={navigate} />
//       default:
//         return <LandingPage navigate={navigate} />
//     }
//   }

//   return (
//     <div className={styles.appContainer}>
//       {currentPage !== 'landing' && (
//         <Header navigate={navigate} user={user} userProfile={userProfile} />
//       )}
//       {renderPage()}
//     </div>
//   )
// }

// export default App
// //"min-h-screen bg-gray-50"</div>

import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import LandingPage from './components/LandingPage'
import LoginPage from './components/LoginPage'
import RegisterPage from './components/RegisterPage'
import ProfileSetup from './components/ProfileSetup'
import Dashboard from './components/Dashboard'
import InternshipListings from './components/InternshipListings'
import AdminUpload from './components/AdminUpload'
import AddURL from './components/AddURL'
import InternshipServer from './components/InternshipServer'
import styles from './App.module.css'
import{ AppProvider as ContexProvider } from '../src/contex/AppContext' // Adjust the import path as necessary

function App() {
  return (
    <ContexProvider>
    <Router>
      {/* <div className={styles.appContainer}> */}
       
        
        <Routes>
          <Route path='/' index element = {<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/internships" element={<InternshipListings />} />
          <Route path="/addurl" element={<AddURL />} />
          <Route path="/admin" element={<AdminUpload />} />
          <Route path="/profile-setup" element={<ProfileSetup />} />
          <Route path="/server" element={<InternshipServer />} />
        </Routes>
      {/* </div> */}
    </Router>
    </ContexProvider>
  )
}

export default App
