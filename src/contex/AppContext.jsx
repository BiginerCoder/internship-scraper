// AppContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

// Step 1: Create context
export const AppContext = createContext();

// Step 2: Create provider
const AppProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState('landing');
  const [user, setUser] = useState(null);
  const [userProfile, setUserProfile] = useState({
    name: 'Rahul',
    email: 'rahul@gmail.com',
    id: '1',
    skills: ['JavaScript', 'React'],
    location: 'India',
    cgpa: 8.5,
    branch: 'CSE',
  });
  // const [internships, setInternships] = useState([]);
  // const [error, setError] = useState(null);

  const navigate = (page) => {
    setCurrentPage(page);
  };

  const handleLogin = (userData) => {
    setUser(userData);
    navigate('profile-setup');
  };

  const handleProfileSetup = (profileData) => {
    setUserProfile(profileData);
    navigate('dashboard');
  };
  // useEffect(() => {
  //   if (internships !== null) {
  //     console.log('Updated internships:', internships);
  //   }
  // }, [internships]);
  // Optional: centralized fetching logic
  // const fetchInternships = async () => {
  //   try {
  //     const response = await axios.get('http://localhost:5000/');
  //     setInternships(response.data);
  //     console.log('Internships fetched successfully:', internships);
  //     setError(null);
  //   } catch (error) {
  //     setError('Failed to fetch internships');
  //     console.error(error);
  //   }
  // };

  return (
    <AppContext.Provider value={{
      currentPage,
      user,
      userProfile,
      navigate,
      handleLogin,
      handleProfileSetup,
    }}>
      {children}
    </AppContext.Provider>
  );
};

// Step 3: Custom hook for using context
function userContext() {
  return useContext(AppContext);
}

export { AppProvider, userContext };
