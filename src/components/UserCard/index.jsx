import React, { Component } from "react";
import styles from "./UserCard.module.css";

class UserCard extends Component {
  render() {
    return (
      <div className={styles.myCard}>
        <div className={styles.userInfo}>
          <div className={styles.top}>
            <div className={styles.userPhoto}>
              <img
                src={this.props.userData.profilePhoto}
                alt="-------------User's avatar"
              />
            </div>
            <p className={styles.userName}>
              {this.props.userData.name} {this.props.userData.surname}
            </p>
            <p className={styles.userPosition}>
              {this.props.userData.position}
            </p>
          </div>

          <div className={styles.userContactInfo}>
            <div className={styles.userItem}>
              <div className={styles.userState}>Email address</div>
              <div className={styles.userValue}>
                {this.props.userData.email}
              </div>
            </div>

            <div className={styles.userItem}>
              <div className={styles.userState}>Phone</div>
              <div className={styles.userValue}>
                {this.props.userData.phone}
              </div>
            </div>

            <div className={styles.userItem}>
              <div className={styles.userState}>Address</div>
              <div className={styles.userValue}>
                {this.props.userData.address}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default UserCard;
