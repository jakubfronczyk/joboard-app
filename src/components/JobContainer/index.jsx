import React from 'react';
import { useQuery } from 'react-query';
import styles from './styles.module.scss';
import JobItem from './JobItem';
import InputContainer from './InputContainer';

const JobContainer = () => {
   const {
      data: jobOffers,
      isLoading,
      error,
   } = useQuery({
      queryKey: ['jobsOffer'],
      queryFn: () =>
         fetch('https://training.nerdbord.io/api/v1/joboard/offers')
            .then((response) => response.json())
            .then((data) => {
               console.log(data); // Log the JSON data
               return data;
            }),
   });

   if (isLoading) {
      return <h2>Loading...</h2>;
   }

   if (error) {
      return <div>Error fetching job offers: {error.message}</div>;
   }
   return (
      <div className={styles.jobsWrapper}>
         <InputContainer />

         {/* Jobs container */}
         <div className={styles.jobsContainer}>
            <p className={styles.offers}>36 offers found</p>
            <div className={styles.jobList}>
               {jobOffers.map((jobOffer) => (
                  <JobItem key={jobOffer.id} job={jobOffer} />
               ))}
            </div>
         </div>
      </div>
   );
};

export default JobContainer;
