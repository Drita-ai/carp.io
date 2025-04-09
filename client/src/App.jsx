import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Track from "./pages/Track";
import CreateUser from "./pages/CreateUser";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CreateUser />} />
        <Route path="track" element={<Track />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
