import ItemManager from "./components/item-manager-app.jsx";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/ItemManager" element={<ItemManager />} />
        <Route path="*" element={<Navigate to="/ItemManager" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;