import React from "react";
import {NavLink} from "react-router-dom";
import styles from "./Header.module.css";
import userPhoto from "../../assets/images/user.png";

const Header = (props) => {
  return (
    <header className={styles.header}>
      <img
        src="https://www.pinclipart.com/picdir/big/91-918525_react-logos-download-green-tree-logo-tree-logo.png"
        alt=""
      />

      <div className={styles.loginBlock}>
        {props.isAuth ? <div>{props.login} <button onClick={props.logout}>Logout</button></div>
          // <div>
          //   <NavLink to={"/profile"}>
          //     <img
          //       src={props.smallPhoto != null ? props.smallPhoto : userPhoto}
          //       alt=""
          //     />
          //   </NavLink>
          // <button onClick={props.logout}>Logout</button>
          // </div>
          : <NavLink to={"/login"}>Login</NavLink>
        }
      </div>
    </header>
  );
};

export default Header;
