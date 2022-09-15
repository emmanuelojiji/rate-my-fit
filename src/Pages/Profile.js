import "./Profile.scss";
import { auth } from "../FirebaseConfig";
import ProfileCircle from "../Components/ProfileCircle";
import Header from "../Components/Header";
import NewPost from "../Components/NewPost";
import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import GridFeed from "../Components/GridFeed";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../FirebaseConfig";

const Profile = ({
  setImageUpload,
  setImagePreviewURL,
  imagePreviewURL,
  newPostVisible,
  setNewPostVisible,
  imageUpload,
  posts,
}) => {
  const [currentUser, setCurrentUser] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
  });

  const navigate = useNavigate();

  const [userPosts, setUserPosts] = useState([]);

  const postsRef = collection(db, "posts");

  const userPostsQuery = query(
    postsRef,
    where("uid", "==", auth.currentUser.uid)
  );

  const getPosts = async () => {
    const querySnapshot = await getDocs(userPostsQuery);
    const postsFromFirestore = [];
    querySnapshot.forEach((doc) => {
      postsFromFirestore.push(doc.data());
    });

    setUserPosts(postsFromFirestore);
  };

  useEffect(() => {
    getPosts();
  });

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
            <span className="profile-username">{currentUser.displayName}</span>
            <div className="following-container">
              <div className="following-text-wrap">
                <span>Following</span> <span className="grey">36</span>
              </div>
              <div className="following-text-wrap">
                <span>Following</span> <span className="grey">10</span>
              </div>
            </div>
          </div>
        </div>

        <GridFeed posts={userPosts} style="grid" />

        {/*<h1 className="log-out" onClick={() => signOut()}>
          Log out
  </h1>*/}
      </div>
    </div>
  );
};

export default Profile;
