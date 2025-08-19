
// import React, { useState } from 'react'
// import { User, Mail, GraduationCap, Star, Calendar, X } from 'lucide-react'

// const ProfileSetup = ({ navigate, onProfileSetup, user }) => {
//   const [formData, setFormData] = useState({
//     name: user?.name || '',
//     email: user?.email || '',
//     branch: '',
//     cgpa: '',
//     skills: [],
//     year: ''
//   })

//   const [skillInput, setSkillInput] = useState('')

//   const availableSkills = [
//     'JavaScript', 'Python', 'Java', 'React', 'Node.js', 'HTML', 'CSS', 
//     'MongoDB', 'SQL', 'C++', 'Machine Learning', 'Data Science', 
//     'UI/UX Design', 'Digital Marketing', 'Content Writing'
//   ]

//   const branches = [
//     'Computer Science', 'Information Technology', 'Electronics', 
//     'Mechanical', 'Civil', 'Chemical', 'Electrical', 'Biotechnology'
//   ]

//   const years = ['1st Year', '2nd Year', '3rd Year', '4th Year']

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     onProfileSetup(formData)
//   }

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     })
//   }

//   const addSkill = (skill) => {
//     if (skill && !formData.skills.includes(skill)) {
//       setFormData({
//         ...formData,
//         skills: [...formData.skills, skill]
//       })
//     }
//     setSkillInput('')
//   }

//   const removeSkill = (skillToRemove) => {
//     setFormData({
//       ...formData,
//       skills: formData.skills.filter(skill => skill !== skillToRemove)
//     })
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 py-12">
//       <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-8">
//           <h2 className="text-3xl font-bold text-gray-900">Complete Your Profile</h2>
//           <p className="mt-2 text-gray-600">
//             Help us match you with the perfect internships
//           </p>
//         </div>

//         <div className="card p-8">
//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div className="grid md:grid-cols-2 gap-6">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Full Name
//                 </label>
//                 <div className="relative">
//                   <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
//                   <input
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     className="input-field pl-10"
//                     placeholder="Enter your full name"
//                     required
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Email
//                 </label>
//                 <div className="relative">
//                   <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     className="input-field pl-10"
//                     placeholder="Enter your email"
//                     required
//                     disabled
//                   />
//                 </div>
//               </div>
//             </div>

//             <div className="grid md:grid-cols-2 gap-6">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Branch
//                 </label>
//                 <div className="relative">
//                   <GraduationCap className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
//                   <select
//                     name="branch"
//                     value={formData.branch}
//                     onChange={handleChange}
//                     className="input-field pl-10"
//                     required
//                   >
//                     <option value="">Select your branch</option>
//                     {branches.map(branch => (
//                       <option key={branch} value={branch}>{branch}</option>
//                     ))}
//                   </select>
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Year
//                 </label>
//                 <div className="relative">
//                   <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
//                   <select
//                     name="year"
//                     value={formData.year}
//                     onChange={handleChange}
//                     className="input-field pl-10"
//                     required
//                   >
//                     <option value="">Select your year</option>
//                     {years.map(year => (
//                       <option key={year} value={year}>{year}</option>
//                     ))}
//                   </select>
//                 </div>
//               </div>
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 CGPA
//               </label>
//               <div className="relative">
//                 <Star className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
//                 <input
//                   type="number"
//                   name="cgpa"
//                   value={formData.cgpa}
//                   onChange={handleChange}
//                   className="input-field pl-10"
//                   placeholder="Enter your CGPA (e.g., 8.5)"
//                   min="0"
//                   max="10"
//                   step="0.1"
//                   required
//                 />
//               </div>
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Skills
//               </label>
//               <div className="mb-4">
//                 <input
//                   type="text"
//                   value={skillInput}
//                   onChange={(e) => setSkillInput(e.target.value)}
//                   onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addSkill(skillInput))}
//                   className="input-field"
//                   placeholder="Type a skill and press Enter"
//                 />
//               </div>
              
//               <div className="mb-4">
//                 <p className="text-sm text-gray-600 mb-2">Popular skills:</p>
//                 <div className="flex flex-wrap gap-2">
//                   {availableSkills.map(skill => (
//                     <button
//                       key={skill}
//                       type="button"
//                       onClick={() => addSkill(skill)}
//                       className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm hover:bg-primary-100 transition-colors"
//                       disabled={formData.skills.includes(skill)}
//                     >
//                       {skill}
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               {formData.skills.length > 0 && (
//                 <div>
//                   <p className="text-sm text-gray-600 mb-2">Selected skills:</p>
//                   <div className="flex flex-wrap gap-2">
//                     {formData.skills.map(skill => (
//                       <span
//                         key={skill}
//                         className="inline-flex items-center px-3 py-1 bg-primary-600 text-white rounded-full text-sm"
//                       >
//                         {skill}
//                         <button
//                           type="button"
//                           onClick={() => removeSkill(skill)}
//                           className="ml-2 hover:bg-primary-700 rounded-full p-1"
//                         >
//                           <X className="h-3 w-3" />
//                         </button>
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>

//             <button type="submit" className="btn-primary w-full">
//               Save Profile
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ProfileSetup
import React, { useState } from 'react'
import { User, Mail, GraduationCap, Star, Calendar, X } from 'lucide-react'
import styles from './ProfileSetup.module.css'
import {useNavigate} from 'react-router-dom'
const ProfileSetup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    branch: '',
    cgpa: '',
    skills: [],
    year: ''
  })

  const [skillInput, setSkillInput] = useState('')

  const availableSkills = [
    'JavaScript', 'Python', 'Java', 'React', 'Node.js', 'HTML', 'CSS',
    'MongoDB', 'SQL', 'C++', 'Machine Learning', 'Data Science',
    'UI/UX Design', 'Digital Marketing', 'Content Writing'
  ]

  const branches = [
    'Computer Science', 'Information Technology', 'Electronics',
    'Mechanical', 'Civil', 'Chemical', 'Electrical', 'Biotechnology'
  ]

  const years = ['1st Year', '2nd Year', '3rd Year', '4th Year']

  const handleSubmit = (e) => {
    e.preventDefault()
    onProfileSetup(formData)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const addSkill = (skill) => {
    if (skill && !formData.skills.includes(skill)) {
      setFormData({
        ...formData,
        skills: [...formData.skills, skill]
      })
    }
    setSkillInput('')
  }

  const removeSkill = (skillToRemove) => {
    setFormData({
      ...formData,
      skills: formData.skills.filter(skill => skill !== skillToRemove)
    })
  }

  return (
    <>
       <Header />
    <div className={styles.profilePage}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Complete Your Profile</h2>
          <p className={styles.subtitle}>
            Help us match you with the perfect internships
          </p>
        </div>

        <div className={styles.card}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.grid}>
              <div className={styles.field}>
                <label className={styles.label}>Full Name</label>
                <div className={styles.inputWrapper}>
                  <User className={styles.icon} />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder="Enter your full name"
                    required
                  />
                </div>
              </div>

              <div className={styles.field}>
                <label className={styles.label}>Email</label>
                <div className={styles.inputWrapper}>
                  <Mail className={styles.icon} />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder="Enter your email"
                    required
                    disabled
                  />
                </div>
              </div>
            </div>

            <div className={styles.grid}>
              <div className={styles.field}>
                <label className={styles.label}>Branch</label>
                <div className={styles.inputWrapper}>
                  <GraduationCap className={styles.icon} />
                  <select
                    name="branch"
                    value={formData.branch}
                    onChange={handleChange}
                    className={styles.input}
                    required
                  >
                    <option value="">Select your branch</option>
                    {branches.map(branch => (
                      <option key={branch} value={branch}>{branch}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className={styles.field}>
                <label className={styles.label}>Year</label>
                <div className={styles.inputWrapper}>
                  <Calendar className={styles.icon} />
                  <select
                    name="year"
                    value={formData.year}
                    onChange={handleChange}
                    className={styles.input}
                    required
                  >
                    <option value="">Select your year</option>
                    {years.map(year => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className={styles.field}>
              <label className={styles.label}>CGPA</label>
              <div className={styles.inputWrapper}>
                <Star className={styles.icon} />
                <input
                  type="number"
                  name="cgpa"
                  value={formData.cgpa}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder="Enter your CGPA (e.g., 8.5)"
                  min="0"
                  max="10"
                  step="0.1"
                  required
                />
              </div>
            </div>

            <div className={styles.field}>
              <label className={styles.label}>Skills</label>
              <input
                type="text"
                value={skillInput}
                onChange={(e) => setSkillInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addSkill(skillInput))}
                className={styles.input}
                placeholder="Type a skill and press Enter"
              />

              <p className={styles.popularSkillsTitle}>Popular skills:</p>
              <div className={styles.skillButtons}>
                {availableSkills.map(skill => (
                  <button
                    key={skill}
                    type="button"
                    onClick={() => addSkill(skill)}
                    className={styles.skillButton}
                    disabled={formData.skills.includes(skill)}
                  >
                    {skill}
                  </button>
                ))}
              </div>

              {formData.skills.length > 0 && (
                <>
                  <p className={styles.selectedSkillsTitle}>Selected skills:</p>
                  <div className={styles.selectedSkills}>
                    {formData.skills.map(skill => (
                      <span
                        key={skill}
                        className={styles.selectedSkill}
                      >
                        {skill}
                        <button
                          type="button"
                          onClick={() => removeSkill(skill)}
                          className={styles.removeSkillButton}
                        >
                          <X className={styles.removeIcon} />
                        </button>
                      </span>
                    ))}
                  </div>
                </>
              )}
            </div>

            <button type="submit" className={styles.submitButton}>
              Save Profile
            </button>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default ProfileSetup
