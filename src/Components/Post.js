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
        <p className="caption">
          {post.caption}
        </p>
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
