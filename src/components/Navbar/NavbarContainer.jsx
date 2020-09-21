// import React from "react";
// import styles from "./Navbar.module.css";
// import { NavLink } from "react-router-dom";
// import Friend from "./Friend/Friend";
import { connect } from "react-redux";
import Navbar from "./Navbar";

let mapStateToProps = (state) => {
  return {
    friends: state.sidebar.friends,
  }
}

const NavbarContainer = connect(mapStateToProps)(Navbar)

export default NavbarContainer;
