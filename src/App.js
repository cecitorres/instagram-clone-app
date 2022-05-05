import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { StoryProvider } from './context/stories';
// import { PostsContext } from './context/posts';
import Home from './pages/Home';
// import Inbox from './pages/Inbox';

function App() {
  return (
    <>
      <BrowserRouter>
          <StoryProvider>
            {/* <PostsContext> */}
              <Routes>
                <Route path="/" element={<Home />} />
              {/* <Route path="inbox" element={<Inbox />} /> */}
              </Routes>
          {/* </PostsContext> */}
          </StoryProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
