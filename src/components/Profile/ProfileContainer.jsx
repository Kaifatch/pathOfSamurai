import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, getUserStatus} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId;
    }
    this.props.getUserProfile(userId);
    // this.props.getUserStatus(userId);
  }

  render() {

    return (
      <div>
        <Profile {...this.props} profile={this.props.profile} status={this.props.status}/>
      </div>
    );
  }
}


let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  authorizedUserId: state.auth.userId,
  status: state.usersPage.users.status
});

export default compose(
  connect(mapStateToProps, {getUserProfile}),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
