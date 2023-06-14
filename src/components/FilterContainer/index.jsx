import React, { useState } from 'react';
import FilterCategory from './FilterCategory';
import SalarySlider from './SalarySlider';
import styles from './styles.module.scss';

const FiltersContainer = () => {
   const initialState = {
      jobType: {
         fullTime: { value: false, name: 'Full-Time' },
         contract: { value: false, name: 'Contract' },
         partTime: { value: false, name: 'Part-Time' },
         freelance: { value: false, name: 'Freelance' },
      },
      seniority: {
         lead: { value: false, name: 'Lead' },
         expert: { value: false, name: 'Expert' },
         senior: { value: false, name: 'Senior' },
         midRegular: { value: false, name: 'Mid-Regular' },
         junior: { value: false, name: 'Junior' },
         intern: { value: false, name: 'Intern' },
      },
      location: {
         remote: { value: false, name: 'Remote' },
         partRemote: { value: false, name: 'Part-Remote' },
         onSite: { value: false, name: 'On-Site' },
      },
   };

   const [filters, setFilters] = useState(initialState);
   const [salary, setSalary] = useState(0);

   const handleFiltersChange = (category, value) => {
      setFilters((prevFilters) => ({
         ...prevFilters,
         [category]: {
            ...prevFilters[category],
            [value]: {
               ...prevFilters[category][value],
               value: !prevFilters[category][value].value,
            },
         },
      }));
   };

   const handleSalaryChange = (event) => {
      const newSalary = event.target.value;
      setSalary(newSalary);
   };

   const handleClearFilters = () => {
      setFilters(initialState);
      setSalary(0);
   };

   return (
      <div className={styles.filtersWrapper}>
         <h1>👾 JO–BOARD</h1>
         <div className={styles.filtersContainer}>
            <div className={styles.headerContainer}>
               <p className={styles.title}>Filter offers</p>
               <p className={styles.clear} onClick={handleClearFilters}>
                  Clear filters
               </p>
            </div>
            <FilterCategory
               name="Job Type"
               category="jobType"
               filters={filters}
               onChange={handleFiltersChange}
            />
            <FilterCategory
               name="Seniority"
               category="seniority"
               filters={filters}
               onChange={handleFiltersChange}
            />
            <FilterCategory
               name="Location"
               category="location"
               filters={filters}
               onChange={handleFiltersChange}
            />
            <SalarySlider salary={salary} onChange={handleSalaryChange} />
         </div>
      </div>
   );
};

export default FiltersContainer;
