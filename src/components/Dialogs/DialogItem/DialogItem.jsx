import React from "react";
import styles from "./../Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = ({id, name}) => {
  let path = "/dialogs/" + id;
  return (
    <li className={styles.dialog}>
      <NavLink activeClassName={styles.activeDialog} to={path}>
        {name}
      </NavLink>
    </li>
  );
};

export default DialogItem;
