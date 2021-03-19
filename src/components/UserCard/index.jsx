import React, { Component } from "react";
import styles from "./UserCard.module.css";

function Avatar(props) {
  return (
    <div className={styles.userPhoto}>
      <img src={props.userData.profilePhoto} alt="-------------User's avatar" />
    </div>
  );
}

function UserItemInfo(props) {
  return (
    <div className={styles.userItem}>
      <div className={styles.userState}>{props.name}</div>
      <div className={styles.userValue}>{props.userData[props.nameItem]}</div>
    </div>
  );
}

class UserCard extends Component {
  render() {
    return (
      <div className={styles.myCard}>
        <div className={styles.userInfo}>
          <div className={styles.top}>
            <Avatar userData={this.props.userData} />
            <p className={styles.userName}>
              {this.props.userData.name} {this.props.userData.surname}
            </p>
            <p className={styles.userPosition}>
              {this.props.userData.position}
            </p>
          </div>

          <div className={styles.userContactInfo}>
            <UserItemInfo
              userData={this.props.userData}
              name="Email address"
              nameItem="email"
            />
            <UserItemInfo
              userData={this.props.userData}
              name="Phone"
              nameItem="phone"
            />

            <UserItemInfo
              userData={this.props.userData}
              name="Address"
              nameItem="address"
            />
          </div>
        </div>
      </div>
    );
  }
}
export default UserCard;
