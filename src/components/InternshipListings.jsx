
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Search, Filter, MapPin, Briefcase, ExternalLink, Heart, Star } from 'lucide-react'
import styles from './InternshipListings.module.css';
import Header from './Header'
import InternshipCard from './InternshipCard';

export default function InternshipListings({ navigate, userProfile }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [filters, setFilters] = useState({
    skills: [],
    location: '',
    minCgpa: '',
    branch: ''
  })
  const [showFilters, setShowFilters] = useState(false)
  const [savedInternships, setSavedInternships] = useState([])
  const [data, setData] = useState([]) // State to hold fetched data
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
   const [allInternships, setAllInternships] = useState([
    {
      id: "1111",
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
  ])

  useEffect(() => {
    // Define async function inside useEffect
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5000/');
        setData(response.data); // Store data in state
      } catch (err) {
        setError(err.message);  // Capture errors
      } finally {
        setLoading(false); // Always turn off loading
      }
    };

    fetchData(); // Call async function
  }, []); // [] means run once on mount

  useEffect(() => {
    if (data.length > 0) {
      setAllInternships(prev => [...prev, ...data]); // append without mutating
    }
  }, [data]);
  // Mock data
   
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
   <>
     <Header />
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <h1 className={styles.title}>Browse Internships</h1>
          <p className={styles.subtitle}>Discover amazing internship opportunities from top companies</p>
        </div>

        <div className={styles.layout}>
          <div className={styles.sidebar}>
            <div className={styles.card}>
              <div className={styles.filterHeader}>
                <h2 className={styles.filterTitle}><Filter className={styles.icon} />Filters</h2>
                <button onClick={clearFilters} className={styles.clearButton}>Clear All</button>
              </div>

              <div className={styles.filterBlock}>
                <label className={styles.label}>Search</label>
                <div className={styles.inputWrapper}>
                  <Search className={styles.inputIcon} />
                  <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className={styles.input} placeholder="Search internships..." />
                </div>
              </div>

              <div className={styles.filterBlock}>
                <label className={styles.label}>Skills</label>
                <div className={styles.checkboxList}>
                  {availableSkills.map(skill => (
                    <label key={skill} className={styles.checkboxItem}>
                      <input type="checkbox" checked={filters.skills.includes(skill)} onChange={() => handleFilterChange('skills', skill)} className={styles.checkbox} />
                      <span>{skill}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className={styles.filterBlock}>
                <label className={styles.label}>Location</label>
                <select value={filters.location} onChange={(e) => handleFilterChange('location', e.target.value)} className={styles.select}>
                  <option value="">All Locations</option>
                  {locations.map(location => <option key={location} value={location}>{location}</option>)}
                </select>
              </div>

              <div className={styles.filterBlock}>
                <label className={styles.label}>Maximum CGPA Requirement</label>
                <input type="number" value={filters.minCgpa} onChange={(e) => handleFilterChange('minCgpa', e.target.value)} className={styles.input} placeholder="e.g., 7.5" />
              </div>

              <div className={styles.filterBlock}>
                <label className={styles.label}>Branch</label>
                <select value={filters.branch} onChange={(e) => handleFilterChange('branch', e.target.value)} className={styles.select}>
                  <option value="">All Branches</option>
                  {branches.map(branch => <option key={branch} value={branch}>{branch}</option>)}
                </select>
              </div>
            </div>
          </div>

          <div className={styles.content}>
            <div className={styles.toolbar}>
              <p className={styles.count}>Showing {filteredInternships.length} internships</p>
              <button onClick={() => setShowFilters(!showFilters)} className={styles.toggleFilters}><Filter className={styles.iconSmall} /> Filters</button>
            </div>
           {filteredInternships.map(internship => (
            <InternshipCard
              key={internship.id}
              internship={internship}
              userProfile={userProfile}
              isRecommended={isRecommended}
              savedInternships={savedInternships}
              toggleSaveInternship={toggleSaveInternship}
            />
          ))}

          {filteredInternships.length === 0 && (
            <div className={styles.noResults}>
              <Briefcase className={styles.iconLarge} />
              <h3 className={styles.noResultsTitle}>No internships found</h3>
              <p className={styles.noResultsText}>
                Try adjusting your filters to see more results.
              </p>
            </div>
          )}
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
