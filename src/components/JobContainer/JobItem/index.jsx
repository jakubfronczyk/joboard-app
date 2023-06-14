import React from 'react';
import styles from './styles.module.scss';

const JobItem = ({ job: { img, title, date, company, location, remote, level, salary } }) => {
   return (
      <div className={styles.job}>
         <div className={styles.imgContainer}>
            <img src={img} alt="My Image" />
         </div>
         <div className={styles.jobContent}>
            <div className={styles.jobTitle}>
               <p>{title}</p>
               <p>{date}</p>
            </div>
            <ul className={styles.jobDetails}>
               <li>{company}</li>
               <li>{location}</li>
               <li>{remote}</li>
               <li>{level}</li>
               <li>{salary}</li>
            </ul>
         </div>
      </div>
   );
};

export default JobItem;
