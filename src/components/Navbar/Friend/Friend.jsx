import React from "react";
import styles from "./Friend.module.css";
import { NavLink } from "react-router-dom";

const Friend = (props) => {
  let path = "/user/" + props.id;
  return (
    <NavLink to={path}>
      <div className={styles.friend}>
        <div className={styles.ava}>
          <img src={props.avatar} alt="" />
        </div>
        <div className={styles.name}>{props.name}</div>
      </div>
    </NavLink>
  );
};

export default Friend;
