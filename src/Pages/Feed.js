import "./Feed.scss";
import { useState, useEffect } from "react";
import {
  doc,
  onSnapshot,
  getDocs,
  addDoc,
  collection,
} from "firebase/firestore";
import { db } from "../FirebaseConfig";
import NewPost from "../Components/NewPost";
import Post from "../Components/Post";

const Feed = ({ newPostVisible, setNewPostVisible }) => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const querySnapshot = await getDocs(collection(db, "posts"));
    const postsFromFirestore = [];
    querySnapshot.forEach((doc) => {
      postsFromFirestore.push(doc.data());
    });

    setPosts(postsFromFirestore);
  };

  useEffect(() => {
    getPosts();
  });

  return (
    <main>
      <NewPost
        newPostVisible={newPostVisible}
        setNewPostVisible={setNewPostVisible}
      />
      <div className="Feed">
        <div className="feed-content">
          {posts.map((post) => (
            <Post post={post} />
          ))}
          {/* <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      <Post />*/}
        </div>
      </div>
    </main>
  );
};

export default Feed;
