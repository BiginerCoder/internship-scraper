
// import React, { useState } from 'react'
// import { Briefcase, Star, MapPin, ExternalLink, Heart, BookOpen } from 'lucide-react'

// const Dashboard = ({ navigate, userProfile }) => {
//   const [activeTab, setActiveTab] = useState('recommended')
//   const [savedInternships, setSavedInternships] = useState([])

//   // Mock data for internships
//   const allInternships = [
//     {
//       id: 1,
//       title: "Frontend Developer Intern",
//       company: "TechCorp Inc.",
//       location: "Bangalore, India",
//       requiredSkills: ["JavaScript", "React", "HTML", "CSS"],
//       minCgpa: 7.5,
//       branch: "Computer Science",
//       description: "Work on cutting-edge web applications using React and modern JavaScript.",
//       applyUrl: "https://example.com/apply/1"
//     },
//     {
//       id: 2,
//       title: "Data Science Intern",
//       company: "DataViz Solutions",
//       location: "Mumbai, India",
//       requiredSkills: ["Python", "Machine Learning", "Data Science"],
//       minCgpa: 8.0,
//       branch: "Computer Science",
//       description: "Analyze large datasets and build predictive models.",
//       applyUrl: "https://example.com/apply/2"
//     },
//     {
//       id: 3,
//       title: "Backend Developer Intern",
//       company: "CloudTech",
//       location: "Hyderabad, India",
//       requiredSkills: ["Node.js", "Python", "MongoDB", "SQL"],
//       minCgpa: 7.0,
//       branch: "Information Technology",
//       description: "Build scalable backend systems and APIs.",
//       applyUrl: "https://example.com/apply/3"
//     },
//     {
//       id: 4,
//       title: "UI/UX Design Intern",
//       company: "DesignStudio",
//       location: "Pune, India",
//       requiredSkills: ["UI/UX Design", "Figma", "Adobe Creative Suite"],
//       minCgpa: 6.5,
//       branch: "Computer Science",
//       description: "Create beautiful and intuitive user interfaces.",
//       applyUrl: "https://example.com/apply/4"
//     }
//   ]

//   // Filter recommended internships based on user profile
//   const getRecommendedInternships = () => {
//     if (!userProfile) return []
    
//     return allInternships.filter(internship => {
//       const hasMatchingSkills = internship.requiredSkills.some(skill => 
//         userProfile.skills.includes(skill)
//       )
//       const meetsGgpaRequirement = parseFloat(userProfile.cgpa) >= internship.minCgpa
//       const matchesBranch = internship.branch === userProfile.branch || 
//                            internship.branch === "Computer Science" // CS internships open to all
      
//       return hasMatchingSkills && meetsGgpaRequirement && matchesBranch
//     })
//   }

//   const toggleSaveInternship = (internshipId) => {
//     setSavedInternships(prev => 
//       prev.includes(internshipId) 
//         ? prev.filter(id => id !== internshipId)
//         : [...prev, internshipId]
//     )
//   }

//   const InternshipCard = ({ internship, isRecommended = false }) => (
//     <div className="card p-6">
//       <div className="flex justify-between items-start mb-4">
//         <div>
//           <h3 className="text-xl font-semibold text-gray-900 mb-2">
//             {internship.title}
//             {isRecommended && (
//               <span className="ml-2 inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
//                 <Star className="h-3 w-3 mr-1" />
//                 Recommended
//               </span>
//             )}
//           </h3>
//           <div className="flex items-center text-gray-600 mb-2">
//             <Briefcase className="h-4 w-4 mr-2" />
//             <span className="font-medium">{internship.company}</span>
//           </div>
//           <div className="flex items-center text-gray-600">
//             <MapPin className="h-4 w-4 mr-2" />
//             <span>{internship.location}</span>
//           </div>
//         </div>
//         <button
//           onClick={() => toggleSaveInternship(internship.id)}
//           className={`p-2 rounded-full transition-colors ${
//             savedInternships.includes(internship.id)
//               ? 'bg-red-100 text-red-600'
//               : 'bg-gray-100 text-gray-400 hover:bg-gray-200'
//           }`}
//         >
//           <Heart className={`h-5 w-5 ${savedInternships.includes(internship.id) ? 'fill-current' : ''}`} />
//         </button>
//       </div>
      
//       <p className="text-gray-600 mb-4">{internship.description}</p>
      
//       <div className="mb-4">
//         <p className="text-sm font-medium text-gray-700 mb-2">Required Skills:</p>
//         <div className="flex flex-wrap gap-2">
//           {internship.requiredSkills.map(skill => (
//             <span
//               key={skill}
//               className={`px-2 py-1 rounded-full text-xs font-medium ${
//                 userProfile?.skills.includes(skill)
//                   ? 'bg-green-100 text-green-800'
//                   : 'bg-gray-100 text-gray-600'
//               }`}
//             >
//               {skill}
//             </span>
//           ))}
//         </div>
//       </div>
      
//       <div className="flex items-center justify-between">
//         <span className="text-sm text-gray-600">
//           Min CGPA: {internship.minCgpa}
//         </span>
//         <a
//           href={internship.applyUrl}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="btn-primary inline-flex items-center space-x-2"
//         >
//           <span>Apply Now</span>
//           <ExternalLink className="h-4 w-4" />
//         </a>
//       </div>
//     </div>
//   )

//   const renderContent = () => {
//     switch (activeTab) {
//       case 'recommended':
//         const recommended = getRecommendedInternships()
//         return (
//           <div>
//             {recommended.length > 0 ? (
//               <div className="grid md:grid-cols-2 gap-6">
//                 {recommended.map(internship => (
//                   <InternshipCard key={internship.id} internship={internship} isRecommended />
//                 ))}
//               </div>
//             ) : (
//               <div className="text-center py-12">
//                 <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
//                 <h3 className="text-lg font-medium text-gray-900 mb-2">No recommendations yet</h3>
//                 <p className="text-gray-600">
//                   Complete your profile to get personalized internship recommendations.
//                 </p>
//               </div>
//             )}
//           </div>
//         )
      
//       case 'all':
//         return (
//           <div className="grid md:grid-cols-2 gap-6">
//             {allInternships.map(internship => (
//               <InternshipCard key={internship.id} internship={internship} />
//             ))}
//           </div>
//         )
      
//       case 'saved':
//         const saved = allInternships.filter(internship => 
//           savedInternships.includes(internship.id)
//         )
//         return (
//           <div>
//             {saved.length > 0 ? (
//               <div className="grid md:grid-cols-2 gap-6">
//                 {saved.map(internship => (
//                   <InternshipCard key={internship.id} internship={internship} />
//                 ))}
//               </div>
//             ) : (
//               <div className="text-center py-12">
//                 <Heart className="h-12 w-12 text-gray-400 mx-auto mb-4" />
//                 <h3 className="text-lg font-medium text-gray-900 mb-2">No saved internships</h3>
//                 <p className="text-gray-600">
//                   Save internships by clicking the heart icon to view them here.
//                 </p>
//               </div>
//             )}
//           </div>
//         )
      
//       default:
//         return null
//     }
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 py-8">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="mb-8">
//           <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
//           <p className="text-gray-600">
//             Welcome back, {userProfile?.name}! Here are your internship opportunities.
//           </p>
//         </div>

//         {/* Profile Summary */}
//         {userProfile && (
//           <div className="card p-6 mb-8">
//             <h2 className="text-xl font-semibold text-gray-900 mb-4">Your Profile</h2>
//             <div className="grid md:grid-cols-4 gap-4">
//               <div>
//                 <p className="text-sm text-gray-600">Branch</p>
//                 <p className="font-medium">{userProfile.branch}</p>
//               </div>
//               <div>
//                 <p className="text-sm text-gray-600">CGPA</p>
//                 <p className="font-medium">{userProfile.cgpa}</p>
//               </div>
//               <div>
//                 <p className="text-sm text-gray-600">Year</p>
//                 <p className="font-medium">{userProfile.year}</p>
//               </div>
//               <div>
//                 <p className="text-sm text-gray-600">Skills</p>
//                 <p className="font-medium">{userProfile.skills.length} skills</p>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Tabs */}
//         <div className="mb-6">
//           <div className="border-b border-gray-200">
//             <nav className="-mb-px flex space-x-8">
//               {[
//                 { id: 'recommended', label: 'Recommended', count: getRecommendedInternships().length },
//                 { id: 'all', label: 'All Internships', count: allInternships.length },
//                 { id: 'saved', label: 'Saved', count: savedInternships.length }
//               ].map(tab => (
//                 <button
//                   key={tab.id}
//                   onClick={() => setActiveTab(tab.id)}
//                   className={`py-2 px-1 border-b-2 font-medium text-sm ${
//                     activeTab === tab.id
//                       ? 'border-primary-500 text-primary-600'
//                       : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
//                   }`}
//                 >
//                   {tab.label}
//                   <span className="ml-2 bg-gray-100 text-gray-900 py-0.5 px-2 rounded-full text-xs">
//                     {tab.count}
//                   </span>
//                 </button>
//               ))}
//             </nav>
//           </div>
//         </div>

//         {/* Content */}
//         {renderContent()}
//       </div>
//     </div>
//   )
// }

// export default Dashboard

import React, { use, useState } from 'react'
import { Briefcase, Star, MapPin, ExternalLink, Heart, BookOpen } from 'lucide-react'
import styles from './Dashboard.module.css'
import { useNavigate } from 'react-router-dom'
import { userContext } from '../contex/AppContext';
import Header from './Header'

const Dashboard = () => {
  const { userProfile } = userContext();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('recommended')
  const [savedInternships, setSavedInternships] = useState([])

  const allInternships = [
    // ...internships data
  ]

  const getRecommendedInternships = () => {
    if (!userProfile) return []
    return allInternships.filter(internship => {
      const hasMatchingSkills = internship.requiredSkills.some(skill => userProfile.skills.includes(skill))
      const meetsGgpaRequirement = parseFloat(userProfile.cgpa) >= internship.minCgpa
      const matchesBranch = internship.branch === userProfile.branch || internship.branch === "Computer Science"
      return hasMatchingSkills && meetsGgpaRequirement && matchesBranch
    })
  }

  const toggleSaveInternship = (internshipId) => {
    setSavedInternships(prev => prev.includes(internshipId) ? prev.filter(id => id !== internshipId) : [...prev, internshipId])
  }

  const InternshipCard = ({ internship, isRecommended = false }) => (
    <div className={styles.card}>
      <div className={styles.internshipCardHeader}>
        <div>
          <h3 className={styles.internshipTitle}>
            {internship.title}
            {isRecommended && (
              <span className={styles.recommendedBadge}>
                <Star className="h-3 w-3 mr-1" />
                Recommended
              </span>
            )}
          </h3>
          <div className={styles.companyInfo}>
            <Briefcase className="h-4 w-4 mr-2" />
            <span className="font-medium">{internship.company}</span>
          </div>
          <div className={styles.locationInfo}>
            <MapPin className="h-4 w-4 mr-2" />
            <span>{internship.location}</span>
          </div>
        </div>
        <button
          onClick={() => toggleSaveInternship(internship.id)}
          className={`${styles.heartButton} ${savedInternships.includes(internship.id) ? styles.heartButtonActive : styles.heartButtonInactive}`}
        >
          <Heart className={`h-5 w-5 ${savedInternships.includes(internship.id) ? 'fill-current' : ''}`} />
        </button>
      </div>

      <p className="text-gray-600 mb-4">{internship.description}</p>

      <div className="mb-4">
        <p className="text-sm font-medium text-gray-700 mb-2">Required Skills:</p>
        <div className="flex flex-wrap gap-2">
          {internship.requiredSkills.map(skill => (
            <span
              key={skill}
              className={`${styles.skillBadge} ${userProfile?.skills.includes(skill) ? styles.skillMatch : styles.skillMismatch}`}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between">
        <span className={styles.cgpaText}>Min CGPA: {internship.minCgpa}</span>
        <a href={internship.applyUrl} target="_blank" rel="noopener noreferrer" className={styles.applyButton}>
          <span>Apply Now</span>
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </div>
  )

  const renderContent = () => {
    switch (activeTab) {
      case 'recommended':
        const recommended = getRecommendedInternships()
        return (
          <div>
            {recommended.length > 0 ? (
              <div className={styles.cardGrid}>
                {recommended.map(internship => (
                  <InternshipCard key={internship.id} internship={internship} isRecommended />
                ))}
              </div>
            ) : (
              <div className={styles.emptyState}>
                <BookOpen className={styles.emptyStateIcon} />
                <h3 className={styles.emptyStateTitle}>No recommendations yet</h3>
                <p className={styles.emptyStateText}>
                  Complete your profile to get personalized internship recommendations.
                </p>
              </div>
            )}
          </div>
        )
      case 'all':
        return (
          <div className={styles.cardGrid}>
            {allInternships.map(internship => (
              <InternshipCard key={internship.id} internship={internship} />
            ))}
          </div>
        )
      case 'saved':
        const saved = allInternships.filter(internship => savedInternships.includes(internship.id))
        return (
          <div>
            {saved.length > 0 ? (
              <div className={styles.cardGrid}>
                {saved.map(internship => (
                  <InternshipCard key={internship.id} internship={internship} />
                ))}
              </div>
            ) : (
              <div className={styles.emptyState}>
                <Heart className={styles.emptyStateIcon} />
                <h3 className={styles.emptyStateTitle}>No saved internships</h3>
                <p className={styles.emptyStateText}>
                  Save internships by clicking the heart icon to view them here.
                </p>
              </div>
            )}
          </div>
        )
      default:
        return null
    }
  }

  return (
    <> 
    <Header />
    <div className={styles.dashboardContainer}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h1 className={styles.headerTitle}>Dashboard</h1>
          <p className={styles.headerSubtitle}>
            Welcome back, {userProfile?.name}! Here are your internship opportunities.
          </p>
        </div>

        {userProfile && (
          <div className={styles.card}>
            <h2 className={styles.internshipTitle}>Your Profile</h2>
            <div className={styles.profileSummary}>
              <div className={styles.profileItem}>
                <p>Branch</p>
                <p>{userProfile.branch}</p>
              </div>
              <div className={styles.profileItem}>
                <p>CGPA</p>
                <p>{userProfile.cgpa}</p>
              </div>
              <div className={styles.profileItem}>
                <p>Year</p>
                <p>{userProfile.year}</p>
              </div>
              <div className={styles.profileItem}>
                <p>Skills</p>
                <p>{userProfile.skills.length} skills</p>
              </div>
            </div>
          </div>
        )}

        <div className={styles.tabs}>
          {[{ id: 'recommended', label: 'Recommended', count: getRecommendedInternships().length }, 
          { id: 'all', label: 'All Internships', count: allInternships.length },
           { id: 'saved', label: 'Saved', count: savedInternships.length }].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`${styles.tabButton} ${activeTab === tab.id ? styles.tabButtonActive : ''}`}
            >
              {tab.label}
              <span className={styles.tabCount}>{tab.count}</span>
            </button>
          ))}
        </div>

        {renderContent()}
      </div>
    </div>
    </>
  )
}

export default Dashboard

