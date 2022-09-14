import "./Header.scss";
import ProfileCircle from "./ProfileCircle";
import { Link } from "react-router-dom";
import { auth } from "../FirebaseConfig";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Header = ({
  view,
  toggleView,
  setImageUpload,
  setImagePreviewURL,
  imagePreviewURL,
  newPostVisible,
  setNewPostVisible,
  displayHomeIcon,
}) => {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
  });

  const navigate = useNavigate();

  return (
    <header>
      <div className="header-wrap">
        <h1>LOGO</h1>
        <div className="header-right">
          {view === "scroll" && (
            <i
              class="fa-solid fa-border-none grid-icon"
              onClick={() => toggleView()}
            ></i>
          )}
          {view === "grid" && (
            <i
              class="fa-solid fa-list list-icon"
              onClick={() => toggleView()}
            ></i>
          )}

          <Link to="/">
            <i
              class="fa-solid fa-house home-icon"
              style={{ display: displayHomeIcon }}
            ></i>
          </Link>

          <label for="image-upload" onClick={() => !currentUser && navigate('/signin')}>
            <i className="fa-regular fa-square-plus new-post"></i>
          </label>
          <input
            type="file"
            id="image-upload"
            disabled={currentUser ? false : true}
            onChange={(e) => {
              setImageUpload(e.target.files[0]);

              let previewFile = e.target.files[0];
              let reader = new FileReader();
              reader.readAsDataURL(previewFile);
              reader.onload = (e) => {
                setImagePreviewURL(e.target.result);
                console.log(imagePreviewURL);
              };

              setNewPostVisible(true);
            }}
            style={{ display: "none" }}
          ></input>
          <Link to="/profile">
            <ProfileCircle height="28px" width="28px" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
