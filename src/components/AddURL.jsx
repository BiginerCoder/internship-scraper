import { useState } from "react";
import styles from './AddURL.module.css';
import Header from "./Header";

export default function AddURL() {
  const [url, setUrl] = useState('');
  const [searchTime, setSearchTime] = useState('1 hour');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ url, searchTime });
    // Add your logic here
  };

  return (
    <>
   {/* <Header /> */}
    <div className={styles.container}>
      <h1 className={styles.heading}>Add URL</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <label htmlFor="url" className={styles.label}>URL</label>
          <input
            type="text"
            id="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className={styles.input}
            placeholder="Enter URL"
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="search-time" className={styles.label}>Search Time</label>
          <select
            id="search-time"
            value={searchTime}
            onChange={(e) => setSearchTime(e.target.value)}
            className={styles.select}
          >
            <option value="1 hour">1 hour</option>
            <option value="2 hour">2 hours</option>
            <option value="5 hour">5 hours</option>
            <option value="1 day">1 day</option>
          </select>
        </div>

        <button type="submit" className={styles.button}>
          Submit
        </button>
      </form>
    </div>
    </>
  );
}
