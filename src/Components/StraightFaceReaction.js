import straight_face from "../Media/straight-face.png";
import "./Reaction.scss";

const StraightFaceReaction = ({post}) => {
  return (
    <div className="reaction-number-wrap">
    <div className="reaction">
      <img src={straight_face}></img>
    </div>
    <span>{post.straight}</span>
    </div>
  );
};

export default StraightFaceReaction;
