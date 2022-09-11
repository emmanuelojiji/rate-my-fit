import sick from "../Media/sick.png";
import "./Reaction.scss"

const SickReaction = () => {
  return (
    <div className="reaction-number-wrap">
    <div className="reaction">
      <img src={sick}></img>
    </div>
    <span>90</span>
    </div>
  );
};

export default SickReaction;
