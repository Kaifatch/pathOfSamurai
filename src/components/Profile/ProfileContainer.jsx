import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";
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
  }

  render() {

    return (
      <div>
        <Profile {...this.props} profile={this.props.profile}/>
      </div>
    );
  }
}


let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  authorizedUserId: state.auth.userId,
});

export default compose(
  connect(mapStateToProps, {getUserProfile}),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
