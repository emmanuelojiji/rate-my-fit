import "./SignIn.scss";
import { Link, Navigate } from "react-router-dom";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../FirebaseConfig";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = () => {
    signInWithEmailAndPassword(auth, email, password).then(() => {
      console.log(auth.currentUser);
      navigate("/profile");
    });
  };

  return (
    <div className="sign-up">
      

      <div className="sign-up-wrap">
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button onClick={() => signIn()}>Sign In</button>
      </div>
    </div>
  );
};

export default SignIn;
