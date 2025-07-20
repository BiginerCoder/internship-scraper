
import React from 'react'
import { Briefcase, ArrowRight, Star, Users, TrendingUp } from 'lucide-react'

const LandingPage = ({ navigate }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-white">
      {/* Header */}
      <header className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Briefcase className="h-8 w-8 text-primary-600" />
              <span className="text-xl font-bold text-gray-900">InternMatch</span>
            </div>
            <div className="flex space-x-4">
              <button 
                onClick={() => navigate('login')}
                className="btn-secondary"
              >
                Login
              </button>
              <button 
                onClick={() => navigate('register')}
                className="btn-primary"
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Find Internships That
            <span className="text-primary-600 block">Match Your Skills</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Discover personalized internship opportunities based on your skills, CGPA, and interests. 
            Connect with top companies and kickstart your career journey.
          </p>
          <button 
            onClick={() => navigate('register')}
            className="btn-primary text-lg px-8 py-4 inline-flex items-center space-x-2"
          >
            <span>Get Started</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>

        {/* Features */}
        <div className="mt-24 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="h-8 w-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Personalized Matching</h3>
            <p className="text-gray-600">
              Our AI-powered system matches you with internships based on your skills and preferences.
            </p>
          </div>
          
          <div className="text-center p-6">
            <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Top Companies</h3>
            <p className="text-gray-600">
              Connect with leading companies looking for talented interns like you.
            </p>
          </div>
          
          <div className="text-center p-6">
            <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="h-8 w-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Career Growth</h3>
            <p className="text-gray-600">
              Build your professional network and gain valuable industry experience.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default LandingPage
