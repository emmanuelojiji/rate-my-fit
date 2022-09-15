import "./Profile.scss";
import { auth } from "../FirebaseConfig";
import ProfileCircle from "../Components/ProfileCircle";
import Header from "../Components/Header";
import NewPost from "../Components/NewPost";
import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Profile = ({
  setImageUpload,
  setImagePreviewURL,
  imagePreviewURL,
  newPostVisible,
  setNewPostVisible,
  imageUpload,
}) => {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user.displayName);
    });
  });

  const navigate = useNavigate();

  const signOut = () => {
    auth.signOut();
    navigate("/");
  };

  return (
    <div className="profile">
      <NewPost
        newPostVisible={newPostVisible}
        setNewPostVisible={setNewPostVisible}
        imagePreviewURL={imagePreviewURL}
        imageUpload={imageUpload}
        setImageUpload={setImageUpload}
      />
      <Header
        setImageUpload={setImageUpload}
        setImagePreviewURL={setImagePreviewURL}
        imagePreviewURL={imagePreviewURL}
        newPostVisible={newPostVisible}
        setNewPostVisible={setNewPostVisible}
        imageUpload={imageUpload}
      />
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

        <h1 className="log-out" onClick={() => signOut()}>
          Log out
        </h1>
      </div>
    </div>
  );
};

export default Profile;
