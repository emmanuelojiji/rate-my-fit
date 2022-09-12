import love from "../Media/love.png";
import "./Reaction.scss";

const LoveReaction = ({post}) => {
  return (
    <div className="reaction-number-wrap">
      <div className="reaction">
        <img src={love}></img>
      </div>

      <span>{post.love}</span>
    </div>
  );
};

export default LoveReaction;
