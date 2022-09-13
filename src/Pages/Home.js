import Header from "../Components/Header";
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
      />
      <Feed
        newPostVisible={newPostVisible}
        setNewPostVisible={setNewPostVisible}
        view={view}
        imageUpload={imageUpload}
        imagePreviewURL={imagePreviewURL}
      />
    </>
  );
};

export default Home;
