import React from "react";
import {NavLink} from "react-router-dom";
import styles from "./Header.module.css";

const Header = ({isAuth, login, logout}) => {
  return (
    <header className={styles.header}>
      <img
        src="https://www.pinclipart.com/picdir/big/91-918525_react-logos-download-green-tree-logo-tree-logo.png"
        alt=""
      />

      <div className={styles.loginBlock}>
        {isAuth ? <div>{login}
            <button onClick={logout}>Logout</button>
          </div>
          : <NavLink to={"/login"}>Login</NavLink>
        }
      </div>
    </header>
  );
};

export default Header;
