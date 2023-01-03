import NavBox from "./NavBox";
import { Route, Routes} from "react-router-dom";

import PostList from "./PostList";
import PostPage from "./PostPage";
import NewPost from "./NewPost";

function App() {

  return (
    <div className="App">
        <NavBox />
        <Routes>
          <Route path="/" element={<PostList/>} />
          <Route path="/new" element={<NewPost/>} />
          <Route path="/:id" element={<PostPage/>} />
        </Routes>
    </div>
  );
}

export default App;
