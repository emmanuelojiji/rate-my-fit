import { useState } from "react";
import "./NewPost.scss";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../FirebaseConfig";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../FirebaseConfig";

import { v4 as uuidv4 } from "uuid";

const NewPost = ({ newPostVisible, setNewPostVisible }) => {
  const [postInfo, setPostInfo] = useState({});
  const [caption, setCaption] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const [imageUpload, setImageUpload] = useState();

  const [imagePrefix, setImagePrefix] = useState();

  async function sendPost(e)  {
    const imagePrefix = `${imageUpload.name + uuidv4()}`;
  
    if (imageUpload) {
      const imageRef = ref(storage, imagePrefix);
  
      await uploadBytes(imageRef, imageUpload)
  
      console.log("Image uploaded. " + imageUpload);
  
      const url = await getDownloadURL(ref(storage, imagePrefix))
  
      const docRef = await addDoc(collection(db, "posts"), {
        caption: caption,
        image: url,
      });
    
      setImageUrl(url);

      await setNewPostVisible(false)
    }
  }


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
      <input
        type="file"
        onChange={(e) => {
          setImageUpload(e.target.files[0]);
          console.log(e.target.value);
        }}
      ></input>
      <button onClick={() => sendPost()}>Post</button>
    </div>
  );
};

export default NewPost;
