import straight_face from "../Media/straight-face.png";
import "./Reaction.scss";

const StraightFaceReaction = () => {
  return (
    <div className="reaction-number-wrap">
    <div className="reaction">
      <img src={straight_face}></img>
    </div>
    <span>20</span>
    </div>
  );
};

export default StraightFaceReaction;
