import Header from "../Components/Header";
import Loader from "../Components/Loader";
import Feed from "./Feed";

const Home = ({
  view,
  toggleView,
  imageUpload,
  setImageUpload,
  setImagePreviewURL,
  imagePreviewURL,
  newPostVisible, 
  setNewPostVisible,
  posts
}) => {
  return (
    <>
    
      <Header
        view={view}
        toggleView={toggleView}
        setImageUpload={setImageUpload}
        setImagePreviewURL={setImagePreviewURL}
        imagePreviewURL={imagePreviewURL}
        newPostVisible={newPostVisible}
        setNewPostVisible={setNewPostVisible}
        displayHomeIcon='none'
      />
      <Feed
        newPostVisible={newPostVisible}
        setNewPostVisible={setNewPostVisible}
        view={view}
        imageUpload={imageUpload}
        imagePreviewURL={imagePreviewURL}
        posts={posts}
      />
    </>
  );
};

export default Home;
