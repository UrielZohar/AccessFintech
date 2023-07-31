import {useState} from 'react';
import { SmartDropdown } from "./components/SmartDropdown/SmartDropdown";
import { ProfileFrame } from './components/ProfileFrame/ProfileFrame';
import styles from './App.module.css';

function App() {
  const [selectedProfile, setSelectedProfile] = useState<any>(null);
  return (
    <div className={styles.App}>
      <h1>AccessFintech Profiles:</h1>
      <SmartDropdown 
        initUrl="https://648b31ee17f1536d65ea9242.mockapi.io/users" 
        labelFormatter={({name}) => name} 
        onSelect={(profile) => setSelectedProfile(profile)}
      />
      <h2>Selected Profile:</h2>
      <ProfileFrame 
        name={selectedProfile?.name} 
        avatar={selectedProfile?.avatar} 
      />
    </div>
  );
}

export default App;
