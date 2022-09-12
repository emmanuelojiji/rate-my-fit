import sick from "../Media/sick.png";
import "./Reaction.scss"

const SickReaction = ({post}) => {
  return (
    <div className="reaction-number-wrap">
    <div className="reaction">
      <img src={sick}></img>
    </div>
    <span>{post.sick}</span>
    </div>
  );
};

export default SickReaction;
