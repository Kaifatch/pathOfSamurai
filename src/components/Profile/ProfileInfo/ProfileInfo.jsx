import React from "react";
import styles from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div className={styles.profileImg}>
        <img src="https://cdn.pixabay.com/photo/2020/06/28/16/04/alpine-5349811_960_720.jpg" />
      </div>
      <div className={styles.descriptionBlock}>ava + description</div>
    </div>
  );
};

export default ProfileInfo;
