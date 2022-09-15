import "./Feed.scss";
import { useState, useEffect } from "react";
import { db } from "../FirebaseConfig";
import NewPost from "../Components/NewPost";
import Post from "../Components/Post";
import ScrollFeed from "../Components/ScrollFeed";
import GridFeed from "../Components/GridFeed";
import Loader from "../Components/Loader";

const Feed = ({
  newPostVisible,
  setNewPostVisible,
  view,
  imagePreviewURL,
  setImageUpload,
  imageUpload,
  posts
}) => {
 

  return (
    <main>
      <NewPost
        newPostVisible={newPostVisible}
        setNewPostVisible={setNewPostVisible}
        imagePreviewURL={imagePreviewURL}
        imageUpload={imageUpload}
        setImageUpload={setImageUpload}
      />
      <div className="Feed">
        <ScrollFeed posts={posts} style={view === "scroll" && "flex"} />
        <GridFeed posts={posts} style={view === "grid" && "grid"} />
      </div>
    </main>
  );
};

export default Feed;
