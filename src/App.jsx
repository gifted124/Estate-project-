import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import BiDnaLoading from "./compunet/BiDnaLoading";
import Overview from "./pages/Overview";
// Make sure this path is correct

function App() {
  return (
    <>
      <BiDnaLoading/>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/overview" replace />} />
          <Route path="/overview" element={<Overview />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
