import "./GridFeed.scss";
import Post from "./Post";

const GridFeed = ({ posts }) => {
  return (
    <div className="grid-feed">
      {posts.map((post) => (
        <Post post={post} height='200px' marginBottom='0' textContainerDisplay='none'/>
      ))}
    </div>
  );
};

export default GridFeed;
