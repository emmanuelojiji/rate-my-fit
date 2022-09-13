import "./SignIn.scss";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="sign-up">
    <Link to="/">Back</Link>

    <div className="sign-up-wrap">
        
      <h1>Sign In</h1>
      <input type="text" placeholder="Email"></input>
      <input type="text" placeholder="Password"></input>
      <button>Sign In</button>
    </div>
  </div>
  );
};

export default SignIn;
