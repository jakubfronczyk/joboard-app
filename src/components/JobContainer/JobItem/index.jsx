import React from 'react';
import styles from './styles.module.scss';

const JobItem = ({
   job: {
      img,
      title,
      companyName,
      createdAt,
      city,
      country,
      workLocation,
      seniority,
      salaryFrom,
      salaryTo,
      currency,
   },
}) => {
   const calculateRelativeTime = () => {
      const currentDate = new Date();
      const createdDate = new Date(createdAt);

      const diffInMilliseconds = currentDate - createdDate;
      const diffInSeconds = Math.floor(diffInMilliseconds / 1000);

      if (diffInSeconds < 60) {
         return `${diffInSeconds} seconds ago`;
      } else if (diffInSeconds < 3600) {
         const diffInMinutes = Math.floor(diffInSeconds / 60);
         return `${diffInMinutes} minutes ago`;
      } else if (diffInSeconds < 86400) {
         const diffInHours = Math.floor(diffInSeconds / 3600);
         return `${diffInHours} hours ago`;
      } else {
         const diffInDays = Math.floor(diffInSeconds / 86400);
         return `${diffInDays} days ago`;
      }
   };

   const relativeTime = calculateRelativeTime();

   return (
      <div className={styles.job}>
         <div className={styles.imgContainer}>
            <img src={img} alt="My Image" />
         </div>
         <div className={styles.jobContent}>
            <div className={styles.jobTitle}>
               <p>{title}</p>
               <p>{relativeTime}</p>
            </div>
            <ul className={styles.jobDetails}>
               <li>{companyName}</li>
               <li>
                  {city}, {country}
               </li>
               <li>{workLocation}</li>
               <li>{seniority}</li>
               <li>
                  Salary: {currency} {salaryFrom} - {salaryTo}
               </li>
            </ul>
         </div>
      </div>
   );
};

export default JobItem;
