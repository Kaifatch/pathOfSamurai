import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import styles from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  debugger;
  return (
    <div>
      <div className={styles.profileImg}>
        <img src="https://cdn.pixabay.com/photo/2020/06/28/16/04/alpine-5349811_960_720.jpg" />
      </div>
      <div className={styles.descriptionBlock}>
        <img src={props.profile.photos.large} />
        <div>{props.profile.fullName}</div>
        <div>About me: {props.profile.aboutMe}</div>
        <div>
          Contacts:
          <ul>
            <li>
              {props.profile.contacts.facebook != null ? (
                <a href={`https://${props.profile.contacts.facebook}`}>
                  Facebook
                </a>
              ) : null}
            </li>
            <li>
              {props.profile.contacts.website != null ? (
                <a href={`https://${props.profile.contacts.website}`}>
                  WebSite
                </a>
              ) : null}
            </li>
            <li>
              {props.profile.contacts.vk != null ? (
                <a href={`https://${props.profile.contacts.vk}`}>VK</a>
              ) : null}
            </li>
            <li>
              {props.profile.contacts.twitter != null ? (
                <a href={`${props.profile.contacts.twitter}`}>Twitter</a>
              ) : null}
            </li>
            <li>
              {props.profile.contacts.instagram != null ? (
                <a href={`https://${props.profile.contacts.instagram}`}>
                  Instagram
                </a>
              ) : null}
            </li>
            <li>
              {props.profile.contacts.youtube != null ? (
                <a href={`https://${props.profile.contacts.youtube}`}>
                  YouTube
                </a>
              ) : null}
            </li>
            <li>
              {props.profile.contacts.github != null ? (
                <a href={`https://${props.profile.contacts.github}`}>GitHub</a>
              ) : null}
            </li>
            <li>
              {props.profile.contacts.mainLink != null ? (
                <a href={`https://${props.profile.contacts.mainLink}`}>
                  Main Link
                </a>
              ) : null}
            </li>
          </ul>
        </div>
        <div>
          Looking for a job: {props.profile.lookingForAJob ? "yes" : "no"}
        </div>
        <div>
          {props.profile.lookingForAJob
            ? `Looking job description: ${props.profile.lookingForAJobDescription}`
            : null}
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
