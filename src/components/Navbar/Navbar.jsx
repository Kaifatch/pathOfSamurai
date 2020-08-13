import React from "react";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import Friend from "./Friend/Friend";

const Navbar = (props) => {
  let friendsElement = props.sidebar.friends.map((f) => (
    <Friend id={f.id} name={f.name} avatar={f.avatar} />
  ));

  return (
    <nav className={styles.nav}>
      <ul>
        <li className={styles.item}>
          <NavLink to="/profile" activeClassName={styles.activeLink}>
            Profile
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink to="/dialogs" activeClassName={styles.activeLink}>
            Messages
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink to="/news" activeClassName={styles.activeLink}>
            News
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink to="/music" activeClassName={styles.activeLink}>
            Music
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink to="/settings" activeClassName={styles.activeLink}>
            Settings
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink to="/friends" activeClassName={styles.activeLink}>
            Friends
          </NavLink>
          <div className={styles.friends}>{friendsElement}</div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
