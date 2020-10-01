import Axios from "axios";
import React from "react";
import Header from "./Header";
import * as axios from "axios";
import { connect } from "react-redux";
import { setAuthUserData } from "../../redux/auth-reducer";
import { authAPI } from "../../api/api";
import { withRouter } from "react-router-dom";

class HeaderContainer extends React.Component {
  componentDidMount() {
    // axios
    //   .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
    //     withCredentials: true,
    //   })
    authAPI.authMe().then((data) => {
      if (data.resultCode === 0) {
        let { id, email, login } = data.data;
        this.props.setAuthUserData(id, email, login);
      }
    });
  }
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
  smallPhoto: state.auth.smallPhoto,
});

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);
