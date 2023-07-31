import styles from './ProfileFrame.module.css';

type ProfileFrameProps = {
  name: string | undefined;
  avatar: string | undefined;
};

const ProfileFrame = ({name, avatar}: ProfileFrameProps) => {
  return (
    <div className={styles.ProfileFrame}>
      <div className={styles.profileImg}>
        {avatar && <img
          className={styles.profileImg} 
          src='https://i.pinimg.com/474x/89/7a/03/897a03ce19cd63424c67ce137b1b65c3.jpg' 
          alt="avatar" />}
      </div>
      <div className={styles.profileName}>
        {name}
      </div>
    </div>
  );
};

export { ProfileFrame };