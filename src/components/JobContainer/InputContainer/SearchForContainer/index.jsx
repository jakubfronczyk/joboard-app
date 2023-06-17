import React from 'react';
import { useState } from 'react';
import { useQuery } from 'react-query';
import styles from './styles.module.scss';
import { SearchIcon } from '../../../Icons/SearchIcon';
import fetchJobOffers from '../../../../api/jobOffers';

const SearchForContainer = () => {
   const [value, setValue] = useState('');

   const {
      data: jobTitles,
      isLoading,
      error,
   } = useQuery({
      queryKey: ['jobTitles'],
      queryFn: fetchJobOffers,
   });

   if (isLoading) {
      return <h2>Loading...</h2>;
   }

   if (error) {
      return <div>Error fetching job offers: {error.message}</div>;
   }

   const onChange = (e) => {
      setValue(e.target.value);
   };

   const onSearch = (searchTerm) => {
      setValue(searchTerm);
      console.log('search', searchTerm);
   };

   const filteredJobTitles = jobTitles.filter((jobOffer) => {
      const searchTerm = value.toLowerCase();
      const jobTitle = jobOffer.title.toLowerCase();
      const regex = new RegExp(`\\b${searchTerm}`);

      return (
         searchTerm &&
         jobTitle !== searchTerm &&
         (regex.test(jobTitle) || jobTitle.startsWith(searchTerm))
      );
   });

   const slicedJobTitles = filteredJobTitles.slice(0, 6);

   const hasSearchResults = filteredJobTitles.length > 0;

   return (
      <div className={styles.inputContainer}>
         <input type="text" value={value} onChange={onChange} placeholder="Search for" />
         <SearchIcon className={styles.searchIcon} />
         <ul
            className={styles.searchTermContainer}
            style={{ display: hasSearchResults ? 'block' : 'none' }}
         >
            {slicedJobTitles.map((jobOffer) => (
               <li key={jobOffer._id} onClick={() => onSearch(jobOffer.title)}>
                  <span className={styles.title}>{jobOffer.title}</span>
                  <span className={styles.company}>{jobOffer.companyName}</span>
               </li>
            ))}
         </ul>
      </div>
   );
};

export default SearchForContainer;
