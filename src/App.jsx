import ItemManager from "./components/item-manager-app.jsx"
import { Router, Route, Navigate } from "react-router-dom";

  function App() {
  return (
    <Router>
      <Route path="/" element={<ItemManager />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Router>
  )
}

  export default App