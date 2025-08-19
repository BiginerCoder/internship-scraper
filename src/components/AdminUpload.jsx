
// import React, { useState } from 'react'
// import { Plus, X, Building, MapPin, GraduationCap, Star, Clock, DollarSign } from 'lucide-react'

// const AdminUpload = ({ navigate }) => {
//   const [formData, setFormData] = useState({
//     title: '',
//     company: '',
//     location: '',
//     description: '',
//     requiredSkills: [],
//     minCgpa: '',
//     branch: '',
//     duration: '',
//     stipend: '',
//     applyUrl: ''
//   })

//   const [skillInput, setSkillInput] = useState('')
//   const [isSubmitting, setIsSubmitting] = useState(false)

//   const availableSkills = [
//     'JavaScript', 'Python', 'Java', 'React', 'Node.js', 'HTML', 'CSS', 
//     'MongoDB', 'SQL', 'C++', 'Machine Learning', 'Data Science', 
//     'UI/UX Design', 'Digital Marketing', 'Content Writing', 'Figma',
//     'Adobe Creative Suite', 'React Native', 'Mobile Development', 'SEO'
//   ]

//   const branches = [
//     'Computer Science', 'Information Technology', 'Electronics', 
//     'Mechanical', 'Civil', 'Chemical', 'Electrical', 'Biotechnology',
//     'Business Administration', 'Marketing', 'Finance'
//   ]

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     setIsSubmitting(true)

//     // Simulate API call
//     setTimeout(() => {
//       alert('Internship posted successfully!')
//       setFormData({
//         title: '',
//         company: '',
//         location: '',
//         description: '',
//         requiredSkills: [],
//         minCgpa: '',
//         branch: '',
//         duration: '',
//         stipend: '',
//         applyUrl: ''
//       })
//       setIsSubmitting(false)
//     }, 1000)
//   }

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     })
//   }

//   const addSkill = (skill) => {
//     if (skill && !formData.requiredSkills.includes(skill)) {
//       setFormData({
//         ...formData,
//         requiredSkills: [...formData.requiredSkills, skill]
//       })
//     }
//     setSkillInput('')
//   }

//   const removeSkill = (skillToRemove) => {
//     setFormData({
//       ...formData,
//       requiredSkills: formData.requiredSkills.filter(skill => skill !== skillToRemove)
//     })
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 py-8">
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="mb-8">
//           <h1 className="text-3xl font-bold text-gray-900 mb-2">Post New Internship</h1>
//           <p className="text-gray-600">
//             Add a new internship opportunity for students to discover
//           </p>
//         </div>

//         <div className="card p-8">
//           <form onSubmit={handleSubmit} className="space-y-6">
//             {/* Basic Information */}
//             <div className="grid md:grid-cols-2 gap-6">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Job Title *
//                 </label>
//                 <input
//                   type="text"
//                   name="title"
//                   value={formData.title}
//                   onChange={handleChange}
//                   className="input-field"
//                   placeholder="e.g., Frontend Developer Intern"
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Company Name *
//                 </label>
//                 <div className="relative">
//                   <Building className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
//                   <input
//                     type="text"
//                     name="company"
//                     value={formData.company}
//                     onChange={handleChange}
//                     className="input-field pl-10"
//                     placeholder="e.g., TechCorp Inc."
//                     required
//                   />
//                 </div>
//               </div>
//             </div>

//             <div className="grid md:grid-cols-2 gap-6">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Location *
//                 </label>
//                 <div className="relative">
//                   <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
//                   <input
//                     type="text"
//                     name="location"
//                     value={formData.location}
//                     onChange={handleChange}
//                     className="input-field pl-10"
//                     placeholder="e.g., Bangalore, India"
//                     required
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Branch/Department *
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
//                     <option value="">Select branch</option>
//                     {branches.map(branch => (
//                       <option key={branch} value={branch}>{branch}</option>
//                     ))}
//                   </select>
//                 </div>
//               </div>
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Job Description *
//               </label>
//               <textarea
//                 name="description"
//                 value={formData.description}
//                 onChange={handleChange}
//                 rows={4}
//                 className="input-field"
//                 placeholder="Describe the internship role, responsibilities, and what the intern will learn..."
//                 required
//               />
//             </div>

//             {/* Skills Section */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Required Skills *
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
//                       disabled={formData.requiredSkills.includes(skill)}
//                     >
//                       <Plus className="h-3 w-3 inline mr-1" />
//                       {skill}
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               {formData.requiredSkills.length > 0 && (
//                 <div>
//                   <p className="text-sm text-gray-600 mb-2">Selected skills:</p>
//                   <div className="flex flex-wrap gap-2">
//                     {formData.requiredSkills.map(skill => (
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

//             {/* Requirements and Details */}
//             <div className="grid md:grid-cols-3 gap-6">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Minimum CGPA *
//                 </label>
//                 <div className="relative">
//                   <Star className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
//                   <input
//                     type="number"
//                     name="minCgpa"
//                     value={formData.minCgpa}
//                     onChange={handleChange}
//                     className="input-field pl-10"
//                     placeholder="e.g., 7.5"
//                     min="0"
//                     max="10"
//                     step="0.1"
//                     required
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Duration *
//                 </label>
//                 <div className="relative">
//                   <Clock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
//                   <input
//                     type="text"
//                     name="duration"
//                     value={formData.duration}
//                     onChange={handleChange}
//                     className="input-field pl-10"
//                     placeholder="e.g., 3 months"
//                     required
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Stipend *
//                 </label>
//                 <div className="relative">
//                   <DollarSign className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
//                   <input
//                     type="text"
//                     name="stipend"
//                     value={formData.stipend}
//                     onChange={handleChange}
//                     className="input-field pl-10"
//                     placeholder="e.g., ₹15,000/month"
//                     required
//                   />
//                 </div>
//               </div>
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Application URL *
//               </label>
//               <input
//                 type="url"
//                 name="applyUrl"
//                 value={formData.applyUrl}
//                 onChange={handleChange}
//                 className="input-field"
//                 placeholder="https://company.com/apply/internship"
//                 required
//               />
//               <p className="mt-1 text-sm text-gray-500">
//                 Students will be redirected to this URL to apply for the internship
//               </p>
//             </div>

//             {/* Submit Button */}
//             <div className="flex justify-end space-x-4 pt-6">
//               <button
//                 type="button"
//                 onClick={() => navigate('dashboard')}
//                 className="btn-secondary"
//               >
//                 Cancel
//               </button>
//               <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
//               >
//                 {isSubmitting ? 'Posting...' : 'Post Internship'}
//               </button>
//             </div>
//           </form>
//         </div>

//         {/* Preview Section */}
//         {formData.title && (
//           <div className="mt-8">
//             <h2 className="text-xl font-semibold text-gray-900 mb-4">Preview</h2>
//             <div className="card p-6">
//               <h3 className="text-xl font-semibold text-gray-900 mb-2">{formData.title}</h3>
//               <div className="flex items-center text-gray-600 mb-2">
//                 <Building className="h-4 w-4 mr-2" />
//                 <span className="font-medium">{formData.company}</span>
//               </div>
//               <div className="flex items-center text-gray-600 mb-4">
//                 <MapPin className="h-4 w-4 mr-2" />
//                 <span>{formData.location}</span>
//                 {formData.duration && (
//                   <>
//                     <span className="mx-2">•</span>
//                     <span>{formData.duration}</span>
//                   </>
//                 )}
//                 {formData.stipend && (
//                   <>
//                     <span className="mx-2">•</span>
//                     <span className="font-medium text-green-600">{formData.stipend}</span>
//                   </>
//                 )}
//               </div>
//               {formData.description && (
//                 <p className="text-gray-600 mb-4">{formData.description}</p>
//               )}
//               {formData.requiredSkills.length > 0 && (
//                 <div className="mb-4">
//                   <p className="text-sm font-medium text-gray-700 mb-2">Required Skills:</p>
//                   <div className="flex flex-wrap gap-2">
//                     {formData.requiredSkills.map(skill => (
//                       <span key={skill} className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
//                         {skill}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               )}
//               <div className="flex items-center justify-between text-sm text-gray-600">
//                 <div className="flex items-center space-x-4">
//                   {formData.minCgpa && <span>Min CGPA: {formData.minCgpa}</span>}
//                   {formData.branch && <span>Branch: {formData.branch}</span>}
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   )
// }

// export default AdminUpload
import React, { useState } from 'react'
import { Plus, X, Building, MapPin, GraduationCap, Star, Clock, DollarSign } from 'lucide-react'
import styles from './AdminUpload.module.css'
import Header from './Header'

const AdminUpload = ({ navigate }) => {
  const [formData, setFormData] = useState({
    title: '', company: '', location: '', description: '',
    requiredSkills: [], minCgpa: '', branch: '',
    duration: '', stipend: '', applyUrl: ''
  })
  const [skillInput, setSkillInput] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const availableSkills = [
    'JavaScript', 'Python', 'Java', 'React', 'Node.js', 'HTML', 'CSS', 
    'MongoDB', 'SQL', 'C++', 'Machine Learning', 'Data Science', 
    'UI/UX Design', 'Digital Marketing', 'Content Writing', 'Figma',
    'Adobe Creative Suite', 'React Native', 'Mobile Development', 'SEO'
  ]

  const branches = [
    'Computer Science', 'Information Technology', 'Electronics', 
    'Mechanical', 'Civil', 'Chemical', 'Electrical', 'Biotechnology',
    'Business Administration', 'Marketing', 'Finance'
  ]

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      alert('Internship posted successfully!')
      setFormData({
        title: '', company: '', location: '', description: '',
        requiredSkills: [], minCgpa: '', branch: '',
        duration: '', stipend: '', applyUrl: ''
      })
      setIsSubmitting(false)
    }, 1000)
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const addSkill = (skill) => {
    if (skill && !formData.requiredSkills.includes(skill)) {
      setFormData({
        ...formData,
        requiredSkills: [...formData.requiredSkills, skill]
      })
    }
    setSkillInput('')
  }

  const removeSkill = (skillToRemove) => {
    setFormData({
      ...formData,
      requiredSkills: formData.requiredSkills.filter(skill => skill !== skillToRemove)
    })
  }

  return (
    <>
     <Header />
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.titleSection}>
          <h1 className={styles.title}>Post New Internship</h1>
          <p className={styles.subtitle}>Add a new internship opportunity for students to discover</p>
        </div>

        <div className={styles.card}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.gridTwoCols}>
              <div>
                <label className={styles.label}>Job Title *</label>
                <input type="text" name="title" value={formData.title} onChange={handleChange} className={styles.input} placeholder="e.g., Frontend Developer Intern" required />
              </div>
              <div>
                <label className={styles.label}>Company Name *</label>
                <div className={styles.inputIconWrapper}>
                  <Building className={styles.icon} />
                  <input type="text" name="company" value={formData.company} onChange={handleChange} className={`${styles.input} ${styles.inputWithIcon}`} placeholder="e.g., TechCorp Inc." required />
                </div>
              </div>
            </div>

            <div className={styles.gridTwoCols}>
              <div>
                <label className={styles.label}>Location *</label>
                <div className={styles.inputIconWrapper}>
                  <MapPin className={styles.icon} />
                  <input type="text" name="location" value={formData.location} onChange={handleChange} className={`${styles.input} ${styles.inputWithIcon}`} placeholder="e.g., Bangalore, India" required />
                </div>
              </div>
              <div>
                <label className={styles.label}>Branch/Department *</label>
                <div className={styles.inputIconWrapper}>
                  <GraduationCap className={styles.icon} />
                  <select name="branch" value={formData.branch} onChange={handleChange} className={`${styles.input} ${styles.inputWithIcon}`} required>
                    <option value="">Select branch</option>
                    {branches.map(branch => <option key={branch} value={branch}>{branch}</option>)}
                  </select>
                </div>
              </div>
            </div>

            <div>
              <label className={styles.label}>Job Description *</label>
              <textarea name="description" value={formData.description} onChange={handleChange} rows={4} className={styles.textarea} placeholder="Describe the internship role..." required />
            </div>

            <div>
              <label className={styles.label}>Required Skills *</label>
              <div className={styles.skillInputWrapper}>
                <input type="text" value={skillInput} onChange={(e) => setSkillInput(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addSkill(skillInput))} className={styles.input} placeholder="Type a skill and press Enter" />
              </div>
              <div className={styles.skillsList}>
                {availableSkills.map(skill => (
                  <button key={skill} type="button" onClick={() => addSkill(skill)} className={styles.skillButton} disabled={formData.requiredSkills.includes(skill)}>
                    <Plus className={styles.skillButtonIcon} />{skill}
                  </button>
                ))}
              </div>
              {formData.requiredSkills.length > 0 && (
                <div className={styles.selectedSkills}>
                  {formData.requiredSkills.map(skill => (
                    <span key={skill} className={styles.selectedSkill}>
                      {skill}
                      <button type="button" onClick={() => removeSkill(skill)} className={styles.removeSkillBtn}><X className={styles.removeSkillIcon} /></button>
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div className={styles.gridThreeCols}>
              <div>
                <label className={styles.label}>Minimum CGPA *</label>
                <div className={styles.inputIconWrapper}>
                  <Star className={styles.icon} />
                  <input type="number" name="minCgpa" value={formData.minCgpa} onChange={handleChange} className={`${styles.input} ${styles.inputWithIcon}`} placeholder="e.g., 7.5" min="0" max="10" step="0.1" required />
                </div>
              </div>
              <div>
                <label className={styles.label}>Duration *</label>
                <div className={styles.inputIconWrapper}>
                  <Clock className={styles.icon} />
                  <input type="text" name="duration" value={formData.duration} onChange={handleChange} className={`${styles.input} ${styles.inputWithIcon}`} placeholder="e.g., 3 months" required />
                </div>
              </div>
              <div>
                <label className={styles.label}>Stipend *</label>
                <div className={styles.inputIconWrapper}>
                  <DollarSign className={styles.icon} />
                  <input type="text" name="stipend" value={formData.stipend} onChange={handleChange} className={`${styles.input} ${styles.inputWithIcon}`} placeholder="e.g., ₹15,000/month" required />
                </div>
              </div>
            </div>

            <div>
              <label className={styles.label}>Application URL *</label>
              <input type="url" name="applyUrl" value={formData.applyUrl} onChange={handleChange} className={styles.input} placeholder="https://company.com/apply/internship" required />
              <p className={styles.helperText}>Students will be redirected to this URL to apply</p>
            </div>

            <div className={styles.buttonGroup}>
              <button type="button" onClick={() => navigate('dashboard')} className={styles.btnSecondary}>Cancel</button>
              <button type="submit" disabled={isSubmitting} className={styles.btnPrimary}>
                {isSubmitting ? 'Posting...' : 'Post Internship'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default AdminUpload