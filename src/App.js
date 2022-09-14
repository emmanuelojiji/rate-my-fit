import "./App.scss";
import Feed from "./Pages/Feed";
import NewPost from "./Components/NewPost";
import { useEffect, useState, usePrevious } from "react";
import Navigation from "./Components/Navigation";
import Header from "./Components/Header";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Pages/Home";
import User from "./Pages/User";
import Profile from "./Pages/Profile";
import { auth } from "./FirebaseConfig";

function App() {
  const [newPostVisible, setNewPostVisible] = useState(false);

  const [view, setView] = useState("scroll");

  const toggleView = () => {
    view === "scroll" ? setView("grid") : setView("scroll");
  };

  const [imageUpload, setImageUpload] = useState();
  const [imagePreviewURL, setImagePreviewURL] = useState("");

  // Private Routes //

  const ProfilePrivateRoute = ({ children }) => {
    return auth ? children : <Navigate to="/user" />;
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                view={view}
                toggleView={toggleView}
                imageUpload={imageUpload}
                setImageUpload={setImageUpload}
                setImagePreviewURL={setImagePreviewURL}
                imagePreviewURL={imagePreviewURL}
                newPostVisible={newPostVisible}
                setNewPostVisible={setNewPostVisible}
              />
            }
          />
          <Route
            path="/profile"
            element={
              <ProfilePrivateRoute>
                <Profile />
              </ProfilePrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
