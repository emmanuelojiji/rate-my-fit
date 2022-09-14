import "./SignUp.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../FirebaseConfig";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const signUp = () => {
    createUserWithEmailAndPassword(auth, email, password).then(
      (userCredential) => {
        const user = userCredential.user;

        updateProfile(user, {
          displayName: username,
        }).then(() => {
          console.log(user.displayName);
          setUsername("");
          setEmail("");
          setPassword("");
        });
      }
    );
    navigate("/signin");
  };

  return (
    <div className="sign-up">
      <div className="sign-up-wrap">
        <Link to="/" className="back">
          Back
        </Link>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></input>
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
        <button onClick={() => signUp()}>Sign Up</button>
        <Link to="/signin" className="sign-instead">
          Sign In instead
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
