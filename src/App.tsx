import { BrowserRouter, Route, Routes } from "react-router-dom";
import Map from "./Pages/Map";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/map" element={<Map />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
