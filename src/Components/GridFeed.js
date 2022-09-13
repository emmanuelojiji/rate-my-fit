import "./GridFeed.scss";
import Post from "./Post";

const GridFeed = ({ posts, style }) => {
  return (
    <div className="grid-feed" style={{display: style}}>
      {posts.map((post) => (
        <Post
          post={post}
          height="200px"
          marginBottom="0"
          textContainerDisplay="none"
          userInfoDisplay="none"
        />
      ))}
    </div>
  );
};

export default GridFeed;
