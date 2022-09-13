import "./App.scss";
import Feed from "./Pages/Feed";
import NewPost from "./Components/NewPost";
import { useEffect, useState, usePrevious } from "react";
import Navigation from "./Components/Navigation";
import Header from "./Components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import User from "./Pages/User";

function App() {
  const [newPostVisible, setNewPostVisible] = useState(false);

  const [view, setView] = useState("scroll");

  const toggleView = () => {
    view === "scroll" ? setView("grid") : setView("scroll");
  };

  const [imageUpload, setImageUpload] = useState();
  const [imagePreviewURL, setImagePreviewURL] = useState("");

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
          <Route path="/user" element={<User />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
