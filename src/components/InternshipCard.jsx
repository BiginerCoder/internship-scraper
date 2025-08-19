import React from 'react';
import styles from './InternshipListings.module.css';
import { Briefcase, MapPin, Star, Heart, ExternalLink } from 'lucide-react';

export default function InternshipCard({
  internship,
  userProfile,
  isRecommended,
  savedInternships,
  toggleSaveInternship
}) {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <div className={styles.cardBody}>
          <h3 className={styles.jobTitle}>{internship.title || 'N/A'}</h3>
          {isRecommended(internship) && (
            <span className={styles.recommended}>
              <Star className={styles.iconTiny} /> Recommended
            </span>
          )}
          <div className={styles.company}>
            <Briefcase className={styles.iconTiny} /> {internship.company || 'N/A'}
          </div>
          <div className={styles.details}>
            <MapPin className={styles.iconTiny} /> {internship.location || 'N/A'} • {internship.duration || 'N/A'} •{' '}
            <span className={styles.stipend}>{internship.stipend || 'N/A'}</span>
          </div>
          <p className={styles.description}>{internship.description}</p>
        </div>
        <button
          onClick={() => toggleSaveInternship(internship.id)}
          className={`${styles.saveButton} ${
            savedInternships.includes(internship.id) ? styles.saved : ''
          }`}
        >
          <Heart className={styles.heartIcon} />
        </button>
      </div>

      <div className={styles.skillsWrapper}>
        <p className={styles.skillLabel}>Required Skills:</p>
        <div className={styles.skills}>
          {internship.requiredSkills.map(skill => (
            <span
              key={skill}
              className={`${styles.skillTag} ${
                userProfile?.skills.includes(skill) ? styles.matching : ''
              }`}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className={styles.cardFooter}>
        <div className={styles.meta}>
          <span>Min CGPA: {internship.minCgpa}</span> <span>Branch: {internship.branch}</span>
        </div>
        <a
          href={internship.applyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.applyButton}
        >
          <span>Apply Now</span>
          <ExternalLink className={styles.iconTiny} />
        </a>
      </div>
    </div>
  );
}
