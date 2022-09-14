import "./Profile.scss";
import { auth } from "../FirebaseConfig";

const Profile = () => {
  return (
    <div className="profile">
      <h1>Profile</h1>
      <h1>Hello {auth.currentUser.displayName}</h1>
    </div>
  );
};

export default Profile;
