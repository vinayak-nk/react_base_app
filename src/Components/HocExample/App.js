import EnhancedLikes from "./LikesComp";
import EnhancedComments from "./CommentsComp";

function App() {
  console.log('APP')
  return (
    <div className="App">
      <EnhancedLikes />
      <EnhancedComments />
    </div>
  );
}

export default App
