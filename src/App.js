import "./App.scss";
import Feed from "./Pages/Feed";
import NewPost from "./Components/NewPost";
import { useEffect, useState, usePrevious } from "react";
import Navigation from "./Components/Navigation";

function App() {
  const [newPostVisible, setNewPostVisible] = useState(false);

  return (
    <div className="App">
      <header>
        <div className="header-wrap">
          <h1>Logo</h1>
          <i
            className="fa-regular fa-square-plus new-post"
            onClick={() => setNewPostVisible(true)} 
          ></i>
        </div>
      </header>
      <Feed
        newPostVisible={newPostVisible}
        setNewPostVisible={setNewPostVisible}
      />
      <Navigation />
    </div>
  );
}

export default App;
