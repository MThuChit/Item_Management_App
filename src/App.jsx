import ItemManager from "./components/item-manager-app.jsx";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ItemManager />} />
      {/* Redirect unknown paths to root */}
      <Route path="*" element={<Navigate to="/" />} /> 
    </Routes>
  );
}

export default App;