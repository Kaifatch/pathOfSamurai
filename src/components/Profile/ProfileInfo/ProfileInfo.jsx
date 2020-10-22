import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import styles from "./ProfileInfo.module.css";
import userPhoto from "../../../assets/images/user.png";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileContacts from "./ProfileContacts";

const ProfileInfo = ({
  profile,
  status,
  updateUserStatus,
  isOwner,
  savePhoto,
}) => {
  if (!profile) {
    return <Preloader />;
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files) {
      savePhoto(e.target.files[0]);
    }
  };

  return (
    <div>
      <div className={styles.descriptionBlock}>
        <img
          src={profile.photos.large || userPhoto}
          alt=""
          className={styles.userAvatar}
        />
        {isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
        <div>{profile.fullName}</div>
        <ProfileStatusWithHooks
          status={status}
          updateUserStatus={updateUserStatus}
        />
        <div>About me: {profile.aboutMe}</div>
        <ProfileContacts contacts={profile.contacts} />
        <div>Looking for a job: {profile.lookingForAJob ? "yes" : "no"}</div>
        <div>
          {profile.lookingForAJob
            ? `Looking job description: ${profile.lookingForAJobDescription}`
            : null}
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
