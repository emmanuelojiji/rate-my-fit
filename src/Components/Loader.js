import "./Loader.scss";

const Loader = ({ loaderStyle }) => {
  return (
    <div className="loader-container" style={{ display: loaderStyle }}>
      <div class="loader"></div>
    </div>
  );
};

export default Loader;
