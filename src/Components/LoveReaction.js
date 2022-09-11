import love from "../Media/love.png";
import "./Reaction.scss";

const LoveReaction = () => {
  return (
    <div className="reaction-number-wrap">
      <div className="reaction">
        <img src={love}></img>
      </div>

      <span>500</span>
    </div>
  );
};

export default LoveReaction;
