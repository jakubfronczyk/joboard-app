import React from 'react';
import styles from './styles.module.scss';

const Checkbox = ({ value, checked, onChange, name }) => {
   return (
      <label className={styles.checkbox} key={value}>
         <input type="checkbox" value={value} checked={checked} onChange={() => onChange(value)} />
         {name}
      </label>
   );
};

export default Checkbox;
