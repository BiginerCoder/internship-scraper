import React from 'react'
import styles from './HomeButton.module.css'    
export default function HomeButton() {
  return (
    <button
      onClick={() => window.location.href = '/'}
      className={styles.homeButton}
    >
      Home    
    </button>
  )
}
