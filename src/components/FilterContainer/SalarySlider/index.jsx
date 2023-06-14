import React from 'react';
import styles from './styles.module.scss';

const SalarySlider = ({ salary, onChange }) => {
   return (
      <div className={styles.typeContainer}>
         <h2 className={styles.title}>Salary (min.)</h2>
         <div className={styles.salaryBar}>
            <div className={styles.salaryCircle} style={{ left: `${(salary / 20000) * 10}%` }}>
               {salary}
            </div>
         </div>
         <input
            type="range"
            min="0"
            max="20000"
            step="100"
            value={salary}
            onChange={onChange}
            className={styles.rangeInput}
         />
      </div>
   );
};

export default SalarySlider;
