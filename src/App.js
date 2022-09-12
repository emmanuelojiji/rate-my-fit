import "./App.scss";
import Feed from "./Components/Feed";
import NewPost from "./Components/NewPost";
import { useEffect, useState, usePrevious } from "react";
import Navigation from "./Components/Navigation";

function App() {
  const [newPostVisible, setNewPostVisible] = useState(false);

  return (
    <div className="App">
      <header>
        <div className="header-wrap">
          <h1>Rate My Fit</h1>
          <button onClick={() => setNewPostVisible(true)}>New Post</button>
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
