import React from "react";
import styles from "./Users.module.css";

let Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        photoUrl:
          "https://cdn.pixabay.com/photo/2019/10/30/07/04/paint-4588860_960_720.png",
        followed: true,
        fullName: "Alexandr",
        status: "I am a Boss",
        location: {city: "Minsk", country: "Belarus"},
      },
      {
        id: 2,
        photoUrl:
          "https://cdn.pixabay.com/photo/2019/10/30/07/04/paint-4588860_960_720.png",
        followed: false,
        fullName: "Sergey",
        status: "I am a Boss too",
        location: {city: "Kiev", country: "Ukraine"},
      },
      {
        id: 3,
        photoUrl:
          "https://cdn.pixabay.com/photo/2019/10/30/07/04/paint-4588860_960_720.png",
        followed: true,
        fullName: "Anton",
        status: "I am a Boss too",
        location: {city: "Togliatty", country: "Russia"},
      },
    ]);
  }

  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img src={u.photoUrl} className={styles.userPhoto}/>
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.country}</div>
              <div>{u.location.city}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
