import React from 'react';
import styles from './styles.module.scss';
import img1 from '../../assets/Rectangle3.png';
import img2 from '../../assets/p&g.png';
import img3 from '../../assets/sept.png';
import img4 from '../../assets/nf.png';
import img5 from '../../assets/panda.png';
import img6 from '../../assets/dyson.png';
import { SearchIcon } from '../Icons/SearchIcon';
import { LocationIcon } from '../Icons/LocationIcon';
import { DotIcon } from '../Icons/DotIcon';

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

const JobContainer = () => {
   return (
      <div className={styles.jobsWrapper}>
         <div className={styles.searchContainer}>
            <div className={styles.inputContainer}>
               <input type="text" placeholder="Search for" />
               <SearchIcon className={styles.searchIcon} />
            </div>
            <div className={styles.inputContainer}>
               <input type="text" placeholder="Location" />
               <div className={styles.iconContainer}>
                  <LocationIcon className={styles.locationIcon} />
                  <DotIcon className={styles.dotIcon} />
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

export default JobContainer;
