import "./ScrollFeed.scss";
import Post from "./Post";

const ScrollFeed = ({ posts }) => {
  return (
    <div className="scroll-feed">
      {posts.map((post) => (
        <Post post={post} />
      ))}
    </div>
  );
};

export default ScrollFeed;
