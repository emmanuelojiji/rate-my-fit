import "./App.scss";
import Feed from "./Pages/Feed";
import NewPost from "./Components/NewPost";
import { useEffect, useState, usePrevious } from "react";
import Navigation from "./Components/Navigation";

function App() {
  const [newPostVisible, setNewPostVisible] = useState(false);

  const [view, setView] = useState("scroll");

  const toggleView = () => {
    view === "scroll" ? setView("grid") : setView("scroll");
  };

  return (
    <div className="App">
      <header>
        <div className="header-wrap">
          <h1>Logo</h1>
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

            <i
              className="fa-regular fa-square-plus new-post"
              onClick={() => setNewPostVisible(true)}
            ></i>
            <div className="profile-circle"></div>
          </div>
        </div>
      </header>

      <Feed
        newPostVisible={newPostVisible}
        setNewPostVisible={setNewPostVisible}
        view={view}
      />
    </div>
  );
}

export default App;
