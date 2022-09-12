import "./ScrollFeed.scss";
import Post from "./Post";

const ScrollFeed = ({ posts }) => {
  return (
    <div className="scroll-feed">
      {posts.map((post) => (
        <Post post={post} username='emmanuel' caption='Wearing a black vest with some beige trousers. What do you think?'/>
      ))}
    </div>
  );
};

export default ScrollFeed;
