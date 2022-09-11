import { useState } from "react";
import "./NewPost.scss";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../FirebaseConfig";

const NewPost = ({ newPostVisible }) => {
  const [postInfo, setPostInfo] = useState({});
  const [caption, setCaption] = useState("");

  const sendPost = async (e) => {
    const docRef = await addDoc(collection(db, "posts"), {
      caption: caption,
    });

    setCaption("")
  };

  return (
    <div
      className="new-post-container"
      style={{ display: newPostVisible ? "flex" : "none" }}
    >
      Caption:
      <textarea
        onChange={(e) => {
          setCaption(e.target.value);
          console.log(e.target.value);
        }}
        value={caption}
      ></textarea>
      <button onClick={() => sendPost()}>Post</button>
    </div>
  );
};

export default NewPost;
