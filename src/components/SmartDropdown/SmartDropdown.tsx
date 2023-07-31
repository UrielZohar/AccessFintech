import { useState } from 'react';
import { MoreIcon } from './components/MoreIcon/MoreIcon';
import {useLazyFetchData} from './hooks/SmartDropdown.hooks';
import styles from './SmartDropdown.module.css';

type SmartDropdownProps = {
  initUrl: string;
  labelFormatter: (profile: any) => never[];
  onSelect: (profile: any) => void;
}

const SmartDropdown = ({initUrl, labelFormatter, onSelect}: SmartDropdownProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const data = useLazyFetchData(initUrl, isVisible, labelFormatter);

  return (
    <div className={styles.SmartDropdown}>
      <div
        className={styles.SmartDropdownMoreIcon} 
        onClick={() => {setIsVisible(state => !state)}}>
        <MoreIcon/>
      </div>
      <div className={`${styles.items} ${isVisible ? styles.itemsVisible : '' }`}>
        {
          data.map((profile: any) => (
            <div 
              key={profile.id}
              className={`${styles.item} ${selectedItemId === profile.id ? styles.itemSelected : ''}`} 
              onClick={() => {onSelect(profile); setSelectedItemId(profile.id)}}>
              {profile.label}
            </div>
          ))
        }
        {
          data.length === 0 && <div className={styles.item}>Loading</div>
        }
      </div>
    </div>
  )

};

export {SmartDropdown};