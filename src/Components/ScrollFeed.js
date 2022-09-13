import "./ScrollFeed.scss";
import Post from "./Post";

const ScrollFeed = ({ posts, style }) => {
  return (
    <div className="scroll-feed" style={{ display: style }}>
      {posts.map((post) => (
        <Post post={post} />
      ))}
    </div>
  );
};

export default ScrollFeed;
