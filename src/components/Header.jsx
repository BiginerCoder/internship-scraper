
import React from 'react'
import { User, Settings, LogOut, Briefcase } from 'lucide-react'

const Header = ({ navigate, user, userProfile }) => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <button 
              onClick={() => navigate('dashboard')}
              className="flex items-center space-x-2"
            >
              <Briefcase className="h-8 w-8 text-primary-600" />
              <span className="text-xl font-bold text-gray-900">InternMatch</span>
            </button>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => navigate('dashboard')}
              className="text-gray-700 hover:text-primary-600 font-medium"
            >
              Dashboard
            </button>
            <button 
              onClick={() => navigate('internships')}
              className="text-gray-700 hover:text-primary-600 font-medium"
            >
              Browse Internships
            </button>
            <button 
              onClick={() => navigate('admin')}
              className="text-gray-700 hover:text-primary-600 font-medium"
            >
              Admin
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            {userProfile && (
              <span className="text-sm text-gray-600">
                Welcome, {userProfile.name}
              </span>
            )}
            <div className="flex items-center space-x-2">
              <User className="h-5 w-5 text-gray-500" />
              <button 
                onClick={() => navigate('landing')}
                className="text-gray-500 hover:text-gray-700"
              >
                <LogOut className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
