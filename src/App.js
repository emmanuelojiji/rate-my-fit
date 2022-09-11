import "./App.scss";
import Feed from "./Components/Feed";
import NewPost from "./Components/NewPost";
import { useState } from "react";

function App() {
  const [newPostVisible, setNewPostVisible] = useState(false);

  return (
    <div className="App">
      <header>
        <div className="header-wrap">
          <h1>Rate My Meal Deal</h1>
          <button onClick={() => setNewPostVisible(true)}>New Post</button>
        </div>
      </header>
      <Feed
        newPostVisible={newPostVisible}
        setNewPostVisible={setNewPostVisible}
      />
    </div>
  );
}

export default App;
