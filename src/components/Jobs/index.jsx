import React from 'react';
import styles from './styles.module.scss';
import img1 from '../../assets/Rectangle3.png';
import img2 from '../../assets/p&g.png';
import img3 from '../../assets/sept.png';
import img4 from '../../assets/nf.png';
import img5 from '../../assets/panda.png';
import img6 from '../../assets/dyson.png';

const jobList = [
   {
      id: 1,
      img: img1,
      title: 'Infrastructure Architect',
      date: '4 days ago',
      company: 'GOPro',
      location: 'Barcelona, Spain',
      remote: 'Fully remote',
      level: 'Senior',
      salary: '10 000 – 18 000 PLN net',
   },
   {
      id: 2,
      img: img2,
      title: 'IT BA– Research & Development',
      date: '7 days ago',
      company: 'P&G',
      location: 'Warsaw, Poland',
      remote: 'Fully remote',
      level: 'Senior',
      salary: '10 000 – 18 000 PLN net',
   },
   {
      id: 3,
      img: img3,
      title: 'Engineering Manager',
      date: '7 days ago',
      company: 'Septwolves',
      location: 'Barcelona, Spain',
      remote: 'Fully remote',
      level: 'Senior',
      salary: '10 000 – 18 000 PLN net',
   },
   {
      id: 4,
      img: img4,
      title: 'Senior Software Development Engineer',
      date: '8 days ago',
      company: 'The North Face',
      location: 'Barcelona, Spain',
      remote: 'Fully remote',
      level: 'Senior',
      salary: '10 000 – 18 000 PLN net',
   },
   {
      id: 5,
      img: img5,
      title: 'Transportation System Support IT Spec.',
      date: '10 days ago',
      company: 'WWF Organisation',
      location: 'Barcelona, Spain',
      remote: 'Fully remote',
      level: 'Senior',
      salary: '10 000 – 18 000 PLN net',
   },
   {
      id: 6,
      img: img6,
      title: 'Java Developer | Greenfield, Microservices',
      date: '14 days ago',
      company: 'Dyson',
      location: 'Barcelona, Spain',
      remote: 'Fully remote',
      level: 'Senior',
      salary: '10 000 – 18 000 PLN net',
   },
   {
      id: 7,
      img: img6,
      title: 'Java Developer | Greenfield, Microservices',
      date: '14 days ago',
      company: 'Dyson',
      location: 'Barcelona, Spain',
      remote: 'Fully remote',
      level: 'Senior',
      salary: '10 000 – 18 000 PLN net',
   },
   {
      id: 8,
      img: img6,
      title: 'Java Developer | Greenfield, Microservices',
      date: '14 days ago',
      company: 'Dyson',
      location: 'Barcelona, Spain',
      remote: 'Fully remote',
      level: 'Senior',
      salary: '10 000 – 18 000 PLN net',
   },
   {
      id: 9,
      img: img6,
      title: 'Java Developer | Greenfield, Microservices',
      date: '14 days ago',
      company: 'Dyson',
      location: 'Barcelona, Spain',
      remote: 'Fully remote',
      level: 'Senior',
      salary: '10 000 – 18 000 PLN net',
   },
];

const Jobs = () => {
   return (
      <div className={styles.jobsWrapper}>
         <div className={styles.searchContainer}>
            <div className={styles.inputContainer}>
               <input type="text" placeholder="Search for" />
               <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.searchIcon}
               >
                  <path
                     d="M14.9549 13.9218L10.0856 9.05246C10.8412 8.07559 11.25 6.88122 11.25 5.62498C11.25 4.12123 10.6631 2.71124 9.60183 1.64812C8.54059 0.584997 7.12684 0 5.62498 0C4.12311 0 2.70936 0.586872 1.64812 1.64812C0.584997 2.70936 0 4.12123 0 5.62498C0 7.12684 0.586872 8.54059 1.64812 9.60183C2.70936 10.665 4.12123 11.25 5.62498 11.25C6.88122 11.25 8.07372 10.8412 9.05059 10.0875L13.9199 14.9549C13.9342 14.9692 13.9512 14.9806 13.9698 14.9883C13.9885 14.996 14.0085 15 14.0287 15C14.0489 15 14.0689 14.996 14.0875 14.9883C14.1062 14.9806 14.1232 14.9692 14.1374 14.9549L14.9549 14.1393C14.9692 14.125 14.9806 14.1081 14.9883 14.0894C14.996 14.0708 15 14.0508 15 14.0306C15 14.0104 14.996 13.9904 14.9883 13.9717C14.9806 13.953 14.9692 13.9361 14.9549 13.9218ZM8.59496 8.59496C7.79997 9.38808 6.74622 9.82496 5.62498 9.82496C4.50373 9.82496 3.44999 9.38808 2.65499 8.59496C1.86187 7.79997 1.42499 6.74622 1.42499 5.62498C1.42499 4.50373 1.86187 3.44811 2.65499 2.65499C3.44999 1.86187 4.50373 1.42499 5.62498 1.42499C6.74622 1.42499 7.80184 1.85999 8.59496 2.65499C9.38808 3.44999 9.82496 4.50373 9.82496 5.62498C9.82496 6.74622 9.38808 7.80184 8.59496 8.59496Z"
                     fill="#545454"
                  />
               </svg>
            </div>
            <div className={styles.inputContainer}>
               <input type="text" placeholder="Location" />
               <div className={styles.iconContainer}>
                  <svg
                     width="14"
                     height="19"
                     viewBox="0 0 14 19"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                     className={styles.locationIcon}
                  >
                     <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7 18C7 18 13 12.05 13 6.66667C13 3.53705 10.3137 1 7 1C3.68629 1 1 3.53705 1 6.66667C1 12.05 7 18 7 18Z"
                        stroke="#545454"
                     />
                  </svg>
                  <svg
                     width="4"
                     height="4"
                     viewBox="0 0 4 4"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                     className={styles.dotIcon}
                  >
                     <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M2 3.5C2.69036 3.5 3.25 2.94036 3.25 2.25C3.25 1.55964 2.69036 1 2 1C1.30964 1 0.75 1.55964 0.75 2.25C0.75 2.94036 1.30964 3.5 2 3.5Z"
                        fill="#545454"
                        stroke="#545454"
                     />
                  </svg>
               </div>
            </div>
         </div>

         {/* Jobs container */}
         <div className={styles.jobsContainer}>
            <p className={styles.offers}>36 offers found</p>
            <div className={styles.jobList}>
               {jobList.map((job) => (
                  <div className={styles.job} key={job.id}>
                     <div className={styles.imgContainer}>
                        <img src={job.img} alt="My Image" />
                     </div>
                     <div className={styles.jobContent}>
                        <div className={styles.jobTitle}>
                           <p>{job.title}</p>
                           <p>{job.date}</p>
                        </div>
                        <ul className={styles.jobDetails}>
                           <li>{job.company}</li>
                           <li>{job.location}</li>
                           <li>{job.remote}</li>
                           <li>{job.level}</li>
                           <li>{job.salary}</li>
                        </ul>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};

export default Jobs;
