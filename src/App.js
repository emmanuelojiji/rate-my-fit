import "./App.scss";
import Feed from "./Pages/Feed";
import NewPost from "./Components/NewPost";
import { useEffect, useState, usePrevious } from "react";
import Navigation from "./Components/Navigation";
import Header from "./Components/Header";

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
      <Header
        view={view}
        toggleView={toggleView}
        setImageUpload={setImageUpload}
        setImagePreviewURL={setImagePreviewURL}
        imagePreviewURL={imagePreviewURL}
        newPostVisible={newPostVisible}
        setNewPostVisible={setNewPostVisible}
      />

      <Feed
        newPostVisible={newPostVisible}
        setNewPostVisible={setNewPostVisible}
        view={view}
        imageUpload={imageUpload}
        imagePreviewURL={imagePreviewURL}
      />
    </div>
  );
}

export default App;
