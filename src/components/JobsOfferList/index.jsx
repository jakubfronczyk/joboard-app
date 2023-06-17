import React from 'react';
import { useQuery } from 'react-query';

const JobOfferList = () => {
   const { data, isLoading, error } = useQuery('jobOffers', () => {
      fetch('https://training.nerdbord.io/api/v1/joboard/offers').then((data) => data.json());
   });

   console.log(data);

   if (isLoading) {
      return <h2>Loading...</h2>;
   }

   if (error) {
      return <div>Error fetching job offers: {error.message}</div>;
   }

   return (
      <div>
         <h1>Job Offers</h1>
         <ul>
            {data?.data.map((jobOffer) => (
               <li key={jobOffer.id}>{jobOffer.title}</li>
            ))}
         </ul>
      </div>
   );
};

export default JobOfferList;
