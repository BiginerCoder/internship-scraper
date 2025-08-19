
// import React, { useState } from 'react'
// import { Mail, Lock, ArrowLeft, User } from 'lucide-react'

// const RegisterPage = ({ navigate, onRegister }) => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     confirmPassword: ''
//   })

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     if (formData.password !== formData.confirmPassword) {
//       alert('Passwords do not match!')
//       return
//     }
//     // Simulate registration
//     onRegister({ email: formData.email, name: formData.name, id: 1 })
//   }

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     })
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
//       <div className="sm:mx-auto sm:w-full sm:max-w-md">
//         <button 
//           onClick={() => navigate('landing')}
//           className="flex items-center text-primary-600 hover:text-primary-700 mb-8"
//         >
//           <ArrowLeft className="h-4 w-4 mr-2" />
//           Back to Home
//         </button>
        
//         <h2 className="text-center text-3xl font-bold text-gray-900">
//           Create your account
//         </h2>
//         <p className="mt-2 text-center text-sm text-gray-600">
//           Or{' '}
//           <button 
//             onClick={() => navigate('login')}
//             className="font-medium text-primary-600 hover:text-primary-500"
//           >
//             sign in to existing account
//           </button>
//         </p>
//       </div>

//       <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
//         <div className="card py-8 px-6">
//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Full Name
//               </label>
//               <div className="relative">
//                 <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className="input-field pl-10"
//                   placeholder="Enter your full name"
//                   required
//                 />
//               </div>
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Email address
//               </label>
//               <div className="relative">
//                 <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="input-field pl-10"
//                   placeholder="Enter your email"
//                   required
//                 />
//               </div>
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Password
//               </label>
//               <div className="relative">
//                 <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
//                 <input
//                   type="password"
//                   name="password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   className="input-field pl-10"
//                   placeholder="Create a password"
//                   required
//                 />
//               </div>
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Confirm Password
//               </label>
//               <div className="relative">
//                 <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
//                 <input
//                   type="password"
//                   name="confirmPassword"
//                   value={formData.confirmPassword}
//                   onChange={handleChange}
//                   className="input-field pl-10"
//                   placeholder="Confirm your password"
//                   required
//                 />
//               </div>
//             </div>

//             <button type="submit" className="btn-primary w-full">
//               Create Account
//             </button>
//           </form>

//           <div className="mt-6">
//             <div className="relative">
//               <div className="absolute inset-0 flex items-center">
//                 <div className="w-full border-t border-gray-300" />
//               </div>
//               <div className="relative flex justify-center text-sm">
//                 <span className="px-2 bg-white text-gray-500">Or continue with</span>
//               </div>
//             </div>

//             <button className="mt-4 w-full flex justify-center items-center px-4 py-3 border border-gray-300 rounded-lg bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
//               <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
//                 <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
//                 <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
//                 <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
//                 <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
//               </svg>
//               Sign up with Google
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default RegisterPage
import React, { useState } from 'react'
import { Mail, Lock, ArrowLeft, User } from 'lucide-react'
import styles from './RegisterPage.module.css'
import { useNavigate } from 'react-router-dom';
import Header from './Header' // Assuming you have a Header component

const RegisterPage = () => {
 
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!')
      return
    }
    onRegister({ email: formData.email, name: formData.name, id: 1 })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
      <Header />
      <div className={styles.registerPage}>
        <div className={styles.registerContainer}>
        
          <h2 className={styles.registerTitle}>Create your account</h2>
          <p className={styles.registerSubtitle}>
            Or{' '}
            <button 
              onClick={() => navigate('login')}
              className={styles.registerSubtitleButton}
            >
              sign in to existing account
            </button>
          </p>
        </div>

        <div className={styles.registerContainer}>
          <div className={styles.card}>
            <form onSubmit={handleSubmit} className={styles.registerForm}>
              <div>
                <label className={styles.label}>Full Name</label>
                <div className={styles.inputWrapper}>
                  <User className={styles.inputIcon} />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={styles.inputField}
                    placeholder="Enter your full name"
                    required
                  />
                </div>
              </div>

              <div>
                <label className={styles.label}>Email address</label>
                <div className={styles.inputWrapper}>
                  <Mail className={styles.inputIcon} />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={styles.inputField}
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <div>
                <label className={styles.label}>Password</label>
                <div className={styles.inputWrapper}>
                  <Lock className={styles.inputIcon} />
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className={styles.inputField}
                    placeholder="Create a password"
                    required
                  />
                </div>
              </div>

              <div>
                <label className={styles.label}>Confirm Password</label>
                <div className={styles.inputWrapper}>
                  <Lock className={styles.inputIcon} />
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className={styles.inputField}
                    placeholder="Confirm your password"
                    required
                  />
                </div>
              </div>

              <button type="submit" className={styles.btnPrimary}>
                Create Account
              </button>
            </form>

            <div className={styles.divider}>
              <div className={styles.dividerLine} />
              <div className={styles.dividerText}>Or continue with</div>
            </div>

            <button className={styles.googleButton}>
              <svg className={styles.googleButtonIcon} viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Sign up with Google
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default RegisterPage
