import React from 'react';
import styles from './styles.module.scss';
import { SearchIcon } from '../../Icons/SearchIcon';
import { LocationIcon } from '../../Icons/LocationIcon';
import { DotIcon } from '../../Icons/DotIcon';

const InputContainer = () => {
   return (
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
   );
};

export default InputContainer;
