import React from "react";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li className={styles.item}>
          <NavLink to="/profile" activeClassName={styles.activeLink}>
            Profile
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink to="/users" activeClassName={styles.activeLink}>
            Users
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink to="/dialogs" activeClassName={styles.activeLink}>
            Messages
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
