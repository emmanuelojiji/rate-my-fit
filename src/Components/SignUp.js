import "./SignUp.scss";
import { Link } from "react-router-dom";
const SignUp = () => {
  return (
    <div className="sign-up">
      <div className="sign-up-wrap">
        <Link to="/" className="back">
          Back
        </Link>
      
        <input type="text" placeholder="Email"></input>
        <input type="text" placeholder="Password"></input>
        <button>Sign Up</button>
      </div>
    </div>
  );
};

export default SignUp;
