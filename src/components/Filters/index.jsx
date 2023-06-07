import React, { useState } from 'react';
import styles from './styles.module.scss';

const Filters = () => {
   const [salary, setSalary] = useState(0); // Initial salary value

   const handleSalaryChange = (event) => {
      const newSalary = event.target.value;
      setSalary(newSalary);
   };

   const handleClearFilters = () => {
      const checkboxes = document.querySelectorAll('input[type="checkbox"]');
      checkboxes.forEach((checkbox) => {
         checkbox.checked = false;
      });

      setSalary(0);
   };

   return (
      <div className={styles.filtersWrapper}>
         <h1>👾 JO–BOARD</h1>
         <div className={styles.filtersContainer}>
            <div className={styles.headerContainer}>
               <p className={styles.filter}>Filter offers</p>
               <p className={styles.clear} onClick={handleClearFilters}>
                  Clear filters
               </p>
            </div>
            <div className={styles.typeContainer}>
               <h2 className={styles.title}>Job Type</h2>
               <div className={styles.checkboxContainer}>
                  <label className={styles.checkbox}>
                     <input type="checkbox" value="full-time" />
                     Full-time
                  </label>
                  <label className={styles.checkbox}>
                     <input type="checkbox" value="contract" />
                     Contract
                  </label>
                  <label className={styles.checkbox}>
                     <input type="checkbox" value="part-time" />
                     Part-time
                  </label>
                  <label className={styles.checkbox}>
                     <input type="checkbox" value="freelance" />
                     Freelance
                  </label>
               </div>
            </div>
            <div className={styles.typeContainer}>
               <h2 className={styles.title}>Seniority</h2>
               <div className={styles.checkboxContainer}>
                  <label className={styles.checkbox}>
                     <input type="checkbox" value="lead" />
                     Lead
                  </label>
                  <label className={styles.checkbox}>
                     <input type="checkbox" value="expert" />
                     Expert
                  </label>
                  <label className={styles.checkbox}>
                     <input type="checkbox" value="senior" />
                     Senior
                  </label>
                  <label className={styles.checkbox}>
                     <input type="checkbox" value="mid-regular" />
                     Mid/Regular
                  </label>
                  <label className={styles.checkbox}>
                     <input type="checkbox" value="junior" />
                     Junior
                  </label>
                  <label className={styles.checkbox}>
                     <input type="checkbox" value="intern" />
                     Intern
                  </label>
               </div>
            </div>
            <div className={styles.typeContainer}>
               <h2 className={styles.title}>Location</h2>
               <div className={styles.checkboxContainer}>
                  <label className={styles.checkbox}>
                     <input type="checkbox" value="remote" />
                     Remote
                  </label>
                  <label className={styles.checkbox}>
                     <input type="checkbox" value="part-remote" />
                     Part-remote
                  </label>
                  <label className={styles.checkbox}>
                     <input className={styles.test} type="checkbox" value="on-site" />
                     On-site
                  </label>
               </div>
            </div>
            <div className={styles.typeContainer}>
               <h2 className={styles.title}>Salary (min.)</h2>
               <div className={styles.salaryBar}>
                  <div
                     className={styles.salaryCircle}
                     style={{ left: `${((salary - 0) / 500) * 10}%` }}
                  >
                     {salary}
                  </div>
               </div>
               <input
                  type="range"
                  min="0"
                  max="20000"
                  step="100"
                  value={salary}
                  onChange={handleSalaryChange}
                  className={styles.rangeInput}
               />
            </div>
         </div>
      </div>
   );
};

export default Filters;
