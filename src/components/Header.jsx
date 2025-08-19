
// import React from 'react'
// import { User, Settings, LogOut, Briefcase } from 'lucide-react'

// const Header = ({ navigate, user, userProfile }) => {
//   return (
//     <header className="bg-white shadow-sm border-b border-gray-200">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           <div className="flex items-center">
//             <button 
//               onClick={() => navigate('dashboard')}
//               className="flex items-center space-x-2"
//             >
//               <Briefcase className="h-8 w-8 text-primary-600" />
//               <span className="text-xl font-bold text-gray-900">InternMatch</span>
//             </button>
//           </div>
          
//           <nav className="hidden md:flex space-x-8">
//             <button 
//               onClick={() => navigate('dashboard')}
//               className="text-gray-700 hover:text-primary-600 font-medium"
//             >
//               Dashboard
//             </button>
//             <button 
//               onClick={() => navigate('internships')}
//               className="text-gray-700 hover:text-primary-600 font-medium"
//             >
//               Browse Internships
//             </button>
//             <button 
//               onClick={() => navigate('admin')}
//               className="text-gray-700 hover:text-primary-600 font-medium"
//             >
//               Admin
//             </button>
//           </nav>

//           <div className="flex items-center space-x-4">
//             {userProfile && (
//               <span className="text-sm text-gray-600">
//                 Welcome, {userProfile.name}
//               </span>
//             )}
//             <div className="flex items-center space-x-2">
//               <User className="h-5 w-5 text-gray-500" />
//               <button 
//                 onClick={() => navigate('landing')}
//                 className="text-gray-500 hover:text-gray-700"
//               >
//                 <LogOut className="h-5 w-5" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   )
// }

// export default Header
import React from 'react'
import { User, LogOut, Briefcase } from 'lucide-react'
import styles from './Header.module.css'
import { NavLink, useNavigate } from 'react-router-dom'
import { userContext } from '../contex/AppContext'


const Header = () => {
  const navigate = useNavigate();
  const {  userProfile } = userContext();
  console.log(userProfile);
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.headerInner}>
          <div>
            <NavLink to="/" className={styles.logoButton} onClick={() => navigate('/')}>
              <Briefcase className="h-8 w-8" style={{ color: "#4f46e5" }} />
              <span className={styles.logoText}>InternMatch</span>
            </NavLink>
          </div>

          {userProfile && (
            <nav className={styles.nav}>
              <NavLink to="/dashboard" className={styles.navButton}>
                Dashboard
              </NavLink>
              <NavLink to="/internships" className={styles.navButton}>
                Browse Internships
              </NavLink>
              <NavLink to="/admin" className={styles.navButton}>
                Admin
              </NavLink>
              <NavLink to = '/addurl' className={styles.navButton}>
               AddURL
              </NavLink>
            </nav>
          )}

          <div className={styles.profileArea}>
            {userProfile && (
              <span className={styles.welcomeText}>Welcome, {userProfile.name}</span>
            )}
            <User className={styles.userIcon} />
            <button onClick={() => navigate(-1)} className={styles.logoutButton}>
              <LogOut className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
