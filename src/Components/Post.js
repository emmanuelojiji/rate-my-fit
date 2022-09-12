import food from "../Media/food.jpeg";
import "../Components/Post.scss";
import LoveReaction from "./LoveReaction";
import StraightFaceReaction from "./StraightFaceReaction";
import SickReaction from "./SickReaction";

const Post = ({
  post,
  username,
  caption,
  height,
  width,
  marginBottom,
  textContainerDisplay,
}) => {
  return (
    <div class="post" style={{ marginBottom: marginBottom }}>
      <div className="image-container">
        <img src={post.image} style={{ height: height, width: width }}></img>
      </div>
      <div className="text-container" style={{ display: textContainerDisplay }}>
        <span className="username">{username}</span>
        <span className="caption">{caption}</span>
      </div>
    </div>
  );
};

export default Post;
