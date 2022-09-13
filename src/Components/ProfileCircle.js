import "./ProfileCircle.scss";

const ProfileCircle = ({ height, width, marginBottom, paddingLeft }) => {
  return (
    <div
      className="profile-circle"
      style={{ height: height, width: width, marginBottom: marginBottom, paddingLeft: paddingLeft }}
    ></div>
  );
};

export default ProfileCircle;
