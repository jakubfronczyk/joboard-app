import React from 'react';
import styles from './styles.module.scss';
import JobItem from './JobItem';
import img1 from '../../assets/Rectangle3.png';
import img2 from '../../assets/p&g.png';
import img3 from '../../assets/sept.png';
import img4 from '../../assets/nf.png';
import img5 from '../../assets/panda.png';
import img6 from '../../assets/dyson.png';
import InputContainer from './InputContainer';

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
         <InputContainer />

         {/* Jobs container */}
         <div className={styles.jobsContainer}>
            <p className={styles.offers}>36 offers found</p>
            <div className={styles.jobList}>
               {jobList.map((job) => (
                  <JobItem key={job.id} job={job} />
               ))}
            </div>
         </div>
      </div>
   );
};

export default Jobs;
