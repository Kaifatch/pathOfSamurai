import React from "react";

const ProfileContacts = ({contacts}) => {

  return <div>
    Contacts:
    <ul>
      <li>
        {contacts.facebook != null ? (
          <a href={contacts.facebook}>
            Facebook
          </a>
        ) : null}
      </li>
      <li>
        {contacts.website != null ? (
          <a href={contacts.website}>
            WebSite
          </a>
        ) : null}
      </li>
      <li>
        {contacts.vk != null ? (
          <a href={contacts.vk}>VK</a>
        ) : null}
      </li>
      <li>
        {contacts.twitter != null ? (
          <a href={contacts.twitter}>Twitter</a>
        ) : null}
      </li>
      <li>
        {contacts.instagram != null ? (
          <a href={contacts.instagram}>
            Instagram
          </a>
        ) : null}
      </li>
      <li>
        {contacts.youtube != null ? (
          <a href={contacts.youtube}>
            YouTube
          </a>
        ) : null}
      </li>
      <li>
        {contacts.github != null ? (
          <a href={contacts.github}>GitHub</a>
        ) : null}
      </li>
      <li>
        {contacts.mainLink != null ? (
          <a href={contacts.mainLink}>
            Main Link
          </a>
        ) : null}
      </li>
    </ul>
  </div>
};

export default ProfileContacts;
