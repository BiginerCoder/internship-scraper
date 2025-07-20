
import React, { useState } from 'react'
import { Search, Filter, MapPin, Briefcase, ExternalLink, Heart, Star } from 'lucide-react'

const InternshipListings = ({ navigate, userProfile }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filters, setFilters] = useState({
    skills: [],
    location: '',
    minCgpa: '',
    branch: ''
  })
  const [showFilters, setShowFilters] = useState(false)
  const [savedInternships, setSavedInternships] = useState([])

  // Mock data
  const allInternships = [
    {
      id: 1,
      title: "Frontend Developer Intern",
      company: "TechCorp Inc.",
      location: "Bangalore, India",
      requiredSkills: ["JavaScript", "React", "HTML", "CSS"],
      minCgpa: 7.5,
      branch: "Computer Science",
      description: "Work on cutting-edge web applications using React and modern JavaScript.",
      applyUrl: "https://example.com/apply/1",
      duration: "3 months",
      stipend: "₹15,000/month"
    },
    {
      id: 2,
      title: "Data Science Intern",
      company: "DataViz Solutions",
      location: "Mumbai, India",
      requiredSkills: ["Python", "Machine Learning", "Data Science"],
      minCgpa: 8.0,
      branch: "Computer Science",
      description: "Analyze large datasets and build predictive models.",
      applyUrl: "https://example.com/apply/2",
      duration: "6 months",
      stipend: "₹20,000/month"
    },
    {
      id: 3,
      title: "Backend Developer Intern",
      company: "CloudTech",
      location: "Hyderabad, India",
      requiredSkills: ["Node.js", "Python", "MongoDB", "SQL"],
      minCgpa: 7.0,
      branch: "Information Technology",
      description: "Build scalable backend systems and APIs.",
      applyUrl: "https://example.com/apply/3",
      duration: "4 months",
      stipend: "₹18,000/month"
    },
    {
      id: 4,
      title: "UI/UX Design Intern",
      company: "DesignStudio",
      location: "Pune, India",
      requiredSkills: ["UI/UX Design", "Figma", "Adobe Creative Suite"],
      minCgpa: 6.5,
      branch: "Computer Science",
      description: "Create beautiful and intuitive user interfaces.",
      applyUrl: "https://example.com/apply/4",
      duration: "3 months",
      stipend: "₹12,000/month"
    },
    {
      id: 5,
      title: "Mobile App Developer Intern",
      company: "AppMakers",
      location: "Delhi, India",
      requiredSkills: ["React Native", "JavaScript", "Mobile Development"],
      minCgpa: 7.5,
      branch: "Computer Science",
      description: "Develop cross-platform mobile applications.",
      applyUrl: "https://example.com/apply/5",
      duration: "5 months",
      stipend: "₹16,000/month"
    },
    {
      id: 6,
      title: "Digital Marketing Intern",
      company: "MarketPro",
      location: "Bangalore, India",
      requiredSkills: ["Digital Marketing", "Content Writing", "SEO"],
      minCgpa: 6.0,
      branch: "Business Administration",
      description: "Execute digital marketing campaigns and analyze performance.",
      applyUrl: "https://example.com/apply/6",
      duration: "3 months",
      stipend: "₹10,000/month"
    }
  ]

  const availableSkills = ["JavaScript", "Python", "React", "Node.js", "Java", "Machine Learning", "UI/UX Design", "Digital Marketing"]
  const locations = ["Bangalore", "Mumbai", "Hyderabad", "Pune", "Delhi", "Chennai"]
  const branches = ["Computer Science", "Information Technology", "Electronics", "Business Administration"]

  const toggleSaveInternship = (internshipId) => {
    setSavedInternships(prev => 
      prev.includes(internshipId) 
        ? prev.filter(id => id !== internshipId)
        : [...prev, internshipId]
    )
  }

  const filteredInternships = allInternships.filter(internship => {
    const matchesSearch = internship.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         internship.company.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesSkills = filters.skills.length === 0 || 
                         filters.skills.some(skill => internship.requiredSkills.includes(skill))
    
    const matchesLocation = !filters.location || internship.location.includes(filters.location)
    
    const matchesCgpa = !filters.minCgpa || internship.minCgpa <= parseFloat(filters.minCgpa)
    
    const matchesBranch = !filters.branch || internship.branch === filters.branch

    return matchesSearch && matchesSkills && matchesLocation && matchesCgpa && matchesBranch
  })

  const handleFilterChange = (filterType, value) => {
    if (filterType === 'skills') {
      setFilters(prev => ({
        ...prev,
        skills: prev.skills.includes(value) 
          ? prev.skills.filter(skill => skill !== value)
          : [...prev.skills, value]
      }))
    } else {
      setFilters(prev => ({
        ...prev,
        [filterType]: value
      }))
    }
  }

  const clearFilters = () => {
    setFilters({
      skills: [],
      location: '',
      minCgpa: '',
      branch: ''
    })
  }

  const isRecommended = (internship) => {
    if (!userProfile) return false
    
    const hasMatchingSkills = internship.requiredSkills.some(skill => 
      userProfile.skills.includes(skill)
    )
    const meetsGgpaRequirement = parseFloat(userProfile.cgpa) >= internship.minCgpa
    const matchesBranch = internship.branch === userProfile.branch

    return hasMatchingSkills && meetsGgpaRequirement && matchesBranch
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Browse Internships</h1>
          <p className="text-gray-600">
            Discover amazing internship opportunities from top companies
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-80">
            <div className="card p-6 sticky top-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-900 flex items-center">
                  <Filter className="h-5 w-5 mr-2" />
                  Filters
                </h2>
                <button 
                  onClick={clearFilters}
                  className="text-sm text-primary-600 hover:text-primary-700"
                >
                  Clear All
                </button>
              </div>

              {/* Search */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Search
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="input-field pl-10"
                    placeholder="Search internships..."
                  />
                </div>
              </div>

              {/* Skills Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Skills
                </label>
                <div className="space-y-2">
                  {availableSkills.map(skill => (
                    <label key={skill} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={filters.skills.includes(skill)}
                        onChange={() => handleFilterChange('skills', skill)}
                        className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                      />
                      <span className="ml-2 text-sm text-gray-700">{skill}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Location Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location
                </label>
                <select
                  value={filters.location}
                  onChange={(e) => handleFilterChange('location', e.target.value)}
                  className="input-field"
                >
                  <option value="">All Locations</option>
                  {locations.map(location => (
                    <option key={location} value={location}>{location}</option>
                  ))}
                </select>
              </div>

              {/* CGPA Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Maximum CGPA Requirement
                </label>
                <input
                  type="number"
                  value={filters.minCgpa}
                  onChange={(e) => handleFilterChange('minCgpa', e.target.value)}
                  className="input-field"
                  placeholder="e.g., 7.5"
                  min="0"
                  max="10"
                  step="0.1"
                />
              </div>

              {/* Branch Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Branch
                </label>
                <select
                  value={filters.branch}
                  onChange={(e) => handleFilterChange('branch', e.target.value)}
                  className="input-field"
                >
                  <option value="">All Branches</option>
                  {branches.map(branch => (
                    <option key={branch} value={branch}>{branch}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Internship List */}
          <div className="flex-1">
            <div className="mb-6 flex justify-between items-center">
              <p className="text-gray-600">
                Showing {filteredInternships.length} internships
              </p>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden btn-secondary"
              >
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </button>
            </div>

            <div className="space-y-6">
              {filteredInternships.map(internship => (
                <div key={internship.id} className="card p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <h3 className="text-xl font-semibold text-gray-900">
                          {internship.title}
                        </h3>
                        {isRecommended(internship) && (
                          <span className="ml-2 inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                            <Star className="h-3 w-3 mr-1" />
                            Recommended
                          </span>
                        )}
                      </div>
                      <div className="flex items-center text-gray-600 mb-2">
                        <Briefcase className="h-4 w-4 mr-2" />
                        <span className="font-medium">{internship.company}</span>
                      </div>
                      <div className="flex items-center text-gray-600 mb-4">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>{internship.location}</span>
                        <span className="mx-2">•</span>
                        <span>{internship.duration}</span>
                        <span className="mx-2">•</span>
                        <span className="font-medium text-green-600">{internship.stipend}</span>
                      </div>
                      <p className="text-gray-600 mb-4">{internship.description}</p>
                    </div>
                    <button
                      onClick={() => toggleSaveInternship(internship.id)}
                      className={`p-2 rounded-full transition-colors ml-4 ${
                        savedInternships.includes(internship.id)
                          ? 'bg-red-100 text-red-600'
                          : 'bg-gray-100 text-gray-400 hover:bg-gray-200'
                      }`}
                    >
                      <Heart className={`h-5 w-5 ${savedInternships.includes(internship.id) ? 'fill-current' : ''}`} />
                    </button>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-700 mb-2">Required Skills:</p>
                    <div className="flex flex-wrap gap-2">
                      {internship.requiredSkills.map(skill => (
                        <span
                          key={skill}
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            userProfile?.skills.includes(skill)
                              ? 'bg-green-100 text-green-800'
                              : 'bg-gray-100 text-gray-600'
                          }`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <span>Min CGPA: {internship.minCgpa}</span>
                      <span>Branch: {internship.branch}</span>
                    </div>
                    <a
                      href={internship.applyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary inline-flex items-center space-x-2"
                    >
                      <span>Apply Now</span>
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              ))}

              {filteredInternships.length === 0 && (
                <div className="text-center py-12">
                  <Briefcase className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No internships found</h3>
                  <p className="text-gray-600">
                    Try adjusting your filters to see more results.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InternshipListings
