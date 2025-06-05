import { useState } from "react";

import PostList from "./components/PostList";
import MainHeader from "./components/MainHeader";

const App = () => {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const showModalHandler = () => {
    setModalIsVisible(true);
  };
  const hideModalHandler = () => {
    setModalIsVisible(false);
  };

  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />
      <main>
        <PostList
          hideModalHandler={hideModalHandler}
          isPosting={modalIsVisible}
        />
      </main>
    </>
  );
};

export default App;
