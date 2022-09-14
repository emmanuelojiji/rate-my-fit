import "./Profile.scss";
import { auth } from "../FirebaseConfig";
import ProfileCircle from "../Components/ProfileCircle";
import Header from "../Components/Header";

const Profile = () => {
  return (
    <div className="profile">
      <Header/>
      <div className="profile-wrap">
        <div className="profile-info-container">
          <ProfileCircle height="70px" width="70px" />
          <div className="profile-info-container-right">
            <span className="profile-username">
              {auth.currentUser.displayName}
            </span>
            <span className="following-container">Following 36 Followers 70</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
