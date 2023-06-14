import React from 'react';
import Checkbox from '../Checkbox';
import styles from './styles.module.scss';

const FilterCategory = ({ name, category, filters, onChange }) => {
   return (
      <div className={styles.typeContainer}>
         <h2 className={styles.title}>{name}</h2>
         <div className={styles.checkboxContainer}>
            {Object.entries(filters[category]).map(([value, { value: checked, name }]) => (
               <Checkbox
                  type="checkbox"
                  value={value}
                  checked={checked}
                  onChange={() => onChange(category, value)}
                  name={name}
                  key={value}
               />
            ))}
         </div>
      </div>
   );
};

export default FilterCategory;
