import { useState } from "react";
import "./NewPost.scss";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../FirebaseConfig";

const NewPost = ({ newPostVisible }) => {
  const [postInfo, setPostInfo] = useState({});
  const [newShop, setNewShop] = useState("");
  const [newMain, setNewMain] = useState("");
  const [newSnack, setewSnack] = useState("");
  const [newDrink, setNewDerink] = useState("");

  const sendPost = async (e) => {
    const docRef = await addDoc(collection(db, "posts"), {
      shop: newShop,
      main: newMain,
      snack: newSnack,
      drink: newDrink,
    });
  };

  return (
    <div
      className="new-post-container"
      style={{ display: newPostVisible ? "block" : "none" }}
    >
      <input type="text"></input>
      <input type="text"></input>/<input type="text"></input>
    </div>
  );
};

export default NewPost;
