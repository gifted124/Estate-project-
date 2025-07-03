import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import BiDnaLoading from "./compunet/BiDnaLoading";
import Overview from "./pages/Overview";

function App() {
  return (
    <Router>
      {/* Place loader inside Routes or wrap with layout to avoid interfering with routing */}
      <BiDnaLoading />

      <Routes>
        <Route path="/" element={<Navigate to="/overview" replace />} />
        <Route path="/overview" element={<Overview />} />
      </Routes>
    </Router>
  );
}

export default App;
