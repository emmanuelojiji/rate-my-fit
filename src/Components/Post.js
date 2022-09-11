import food from "../Media/food.jpeg";
import "../Components/Post.scss";
import LoveReaction from "./LoveReaction";
import StraightFaceReaction from "./StraightFaceReaction";
import SickReaction from "./SickReaction";

const Post = ({ post }) => {
  return (
    <div class="post">
      {/* <div className="image-container">
        <img src={food}></img>
      </div>

      <div className="text-container">
        <p>Love ({post.love})</p>
        <p>Hate ({post.cry})</p>

        <p>{post.shop}</p>
        <h2>{post.main}</h2>

        <p>{post.snack}</p>
        <p>{post.drink}</p>
  </div> */}

      <div className="image-container">
        <img src={food}></img>
      </div>

      <div className="text-container">
        <div className="reaction-container">
          <LoveReaction />
          <StraightFaceReaction />
          <SickReaction />
        </div>


      </div>
    </div>
  );
};

export default Post;
