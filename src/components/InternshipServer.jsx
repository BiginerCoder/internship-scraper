import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './InternshipServerCard.module.css';

function Internships() {
  const [internships, setInternships] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/')
      .then(response => {
        setInternships(response.data);
        console.log(response.data);
      })
      .catch(error => {
        setError('Failed to fetch internships');
        console.error(error);
      });
  }, []);

  // return (
  //   <div className={styles.container}>
  //     <h1 className={styles.title}>Internships</h1>
  //     {error && <p className={styles.error}>{error}</p>}
  //     <ul>
  //       {internships.map((item, index) => (
  //         <li key={index} className={styles.card}>
  //           <strong>{item.title}</strong> at {item.company}<br />
  //           <p>📍 Location: {item.location}</p>
  //           <p>💰 Stipend: {item.stipend}</p>
  //           <p>⏳ Apply by: {item.apply_by}</p>
  //         </li>
  //       ))}
  //     </ul>
  //   </div>
  // );
  return response.data;
}

export default Internships;
