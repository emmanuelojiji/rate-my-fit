import food from "../Media/food.jpeg";
import "../Components/Post.scss";
import LoveReaction from "./LoveReaction";
import StraightFaceReaction from "./StraightFaceReaction";
import SickReaction from "./SickReaction";

const Post = ({ post }) => {
  return (
    <div class="post">
      <div className="image-container">
        <img src={post.image}></img>
      </div>
      <div className="text-container">
        <span className="username">emmanuel</span>
        <span className="caption">Wearing a vest today with some beige pants. What do you think?</span>
      </div>
    </div>
  );
};

export default Post;
