import { Homepage } from "./pages/Homepage";
import { RickSanchezPage } from "./pages/RickSanchez";
import { MortySmithPage } from "./pages/MortySmith";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/rick" element={<RickSanchezPage />} />
      <Route path="/morty" element={<MortySmithPage />} />
    </Routes>
  );
}

export default App;
