import React from 'react';
import styles from './styles.module.scss';
import { LocationIcon } from '../../Icons/LocationIcon';
import { DotIcon } from '../../Icons/DotIcon';
import SearchForContainer from './SearchForContainer';

const InputContainer = () => {
   return (
      <div className={styles.inputsContainer}>
         <SearchForContainer />
         <div className={styles.locationContainer}>
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
