import "./Profile.scss";
import { auth } from "../FirebaseConfig";
import ProfileCircle from "../Components/ProfileCircle";
import Header from "../Components/Header";
import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";

const Profile = () => {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      setCurrentUser(user.displayName);
    });
  });

  return (
    <div className="profile">
      <Header />
      <div className="profile-wrap">
        <div className="profile-info-container">
          <ProfileCircle height="70px" width="70px" />
          <div className="profile-info-container-right">
            <span className="profile-username">{currentUser}</span>
            <span className="following-container">
              Following 36 Followers 70
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
