import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Inbox from './pages/Inbox';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="inbox" element={<Inbox />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
