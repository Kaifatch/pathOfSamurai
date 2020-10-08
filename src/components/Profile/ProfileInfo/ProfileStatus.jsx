import React from "react";
import styles from "./ProfileInfo.module.css";

class ProfileStatus extends React.Component {

  state = {
    editMode: false,
    status: this.props.status
  }

  activateEditMode = () => {
    this.setState( {
      editMode: true
    } )
  }

  deactivateEditMode = () => {
    this.setState( {
      editMode: false
    } );
    this.props.updateUserStatus(this.state.status);
  }

  onStatusChange = (e) => {
    this.setState({
      status: e.target.value
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status){
      this.setState({
        status: this.props.status
        })
    }
  }

  render() {
    return (
      <div>
        {!this.state.editMode &&
          <div>
            <span onDoubleClick={this.activateEditMode}>{this.props.status || 'Hello World'}</span>
          </div>
        }
        {this.state.editMode &&
          <div>
            <input
              onChange={this.onStatusChange}
              autoFocus={true}
              onBlur={this.deactivateEditMode}
              value={this.state.status} />
          </div>
        }
      </div>
    );
  };
}

export default ProfileStatus;
