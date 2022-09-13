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
import ScrollFeed from "../Components/ScrollFeed";
import GridFeed from "../Components/GridFeed";

const Feed = ({
  newPostVisible,
  setNewPostVisible,
  view,
  imagePreviewURL,
  imageUpload,
}) => {
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
        imagePreviewURL={imagePreviewURL}
        imageUpload={imageUpload}
      />
      <div className="Feed">
        {view === "scroll" && <ScrollFeed posts={posts} />}
        {view === "grid" && <GridFeed posts={posts} />}
      </div>
    </main>
  );
};

export default Feed;
