import video from "../data/video.js";
import Vid from "./Vid.js";
import Comment from "./Comment.js";
import react, {useState} from "react";

function App() {
  console.log("Here's your data:", video);
  const[hide, setHide] = useState(false)

  function hideComments() {
    if(hide === false) {
      setHide(true)
    }else {
      setHide(false)
    }
  }

  return (
    <div className="App">
      <Vid 
      hide={hide}
      title={video.title} 
      url={video.embedUrl}
      views={video.views}
      date={video.createdAt}
      likes={video.upvotes}
      dislikes={video.downvotes}
      hideComments={hideComments}
      />
      {hide ? null : <Comment hide={hide} comments={video.comments} />}
    </div>
  );
}

export default App;
