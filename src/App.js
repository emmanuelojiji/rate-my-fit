import "./App.scss";
import Feed from "./Pages/Feed";
import NewPost from "./Components/NewPost";
import { useEffect, useState, usePrevious } from "react";
import Navigation from "./Components/Navigation";

function App() {
  const [newPostVisible, setNewPostVisible] = useState(false);

  const [view, setView] = useState("scroll");

  return (
    <div className="App">
      <header>
        <div className="header-wrap">
          <h1>Logo</h1>
          <div>
            <button
              class="grid-icon"
              onClick={
                view === "scroll"
                  ? () => setView("grid")
                  : () => setView("scroll")
              }
            >Change View</button>
            <i
              className="fa-regular fa-square-plus new-post"
              onClick={() => setNewPostVisible(true)}
            ></i>
          </div>
        </div>
      </header>
      <Feed
        newPostVisible={newPostVisible}
        setNewPostVisible={setNewPostVisible}
        view={view}
      />
      <Navigation />
    </div>
  );
}

export default App;
